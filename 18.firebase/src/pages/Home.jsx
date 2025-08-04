import React, { useEffect, useState } from 'react'
import { auth } from '../Firebase'
import { onAuthStateChanged } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import { FaUser, FaEnvelope, FaTrophy, FaCode, FaGraduationCap } from 'react-icons/fa'
import '../css/Home.css'

function Home() {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()

  useEffect(() => {
    console.log("Home component mounted, checking auth state...");
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      console.log("Auth state changed:", user);
      if (user) {
        setUser(user)
        console.log("User authenticated:", user.email);
      } else {
        console.log("No user, redirecting to auth");
        navigate('/auth')
      }
      setLoading(false)
    })

    return () => unsubscribe()
  }, [navigate])

  if (loading) {
    return <div className="loading">Yükleniyor...</div>
  }

  if (!user) {
    return <div className="loading">Kullanıcı bulunamadı...</div>
  }

  return (
    <div className="home">
      <div className="home-header">
        <h1>Hoş Geldin, {user.displayName || user.email}!</h1>
        <p>Firebase ile React uygulamanıza hoş geldiniz</p>
      </div>

      <div className="home-content">
        <div className="user-info-card">
          <div className="user-avatar">
            {user.photoURL ? (
              <img src={user.photoURL} alt="Profil" />
            ) : (
              <FaUser className="default-avatar" />
            )}
          </div>
          <div className="user-details">
            <h2><FaUser /> Kullanıcı Bilgileri</h2>
            <div className="user-info-item">
              <FaEnvelope />
              <span><strong>Email:</strong> {user.email}</span>
            </div>
            {user.displayName && (
              <div className="user-info-item">
                <FaUser />
                <span><strong>Ad:</strong> {user.displayName}</span>
              </div>
            )}
            <div className="user-info-item">
              <FaCode />
              <span><strong>Kullanıcı ID:</strong> {user.uid.slice(0, 8)}...</span>
            </div>
            <div className="user-info-item">
              <FaGraduationCap />
              <span><strong>Hesap Türü:</strong> {user.providerData[0]?.providerId === 'google.com' ? 'Google' : 'Email'}</span>
            </div>
          </div>
        </div>

        <div className="achievement-card">
          <div className="achievement-icon">
            <FaTrophy />
          </div>
          <div className="achievement-content">
            <h2>🎉 Tebrikler!</h2>
            <h3>Bugün React eğitimimi bitirdim</h3>
            <p>React öğrenme yolculuğunuzda büyük bir adım attınız. Firebase entegrasyonu ile modern web uygulamaları geliştirme becerilerinizi geliştirdiniz.</p>
            <div className="achievement-stats">
              <div className="stat">
                <span className="stat-number">100%</span>
                <span className="stat-label">Tamamlandı</span>
              </div>
              <div className="stat">
                <span className="stat-number">React</span>
                <span className="stat-label">Öğrenildi</span>
              </div>
              <div className="stat">
                <span className="stat-number">Firebase</span>
                <span className="stat-label">Entegre Edildi</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
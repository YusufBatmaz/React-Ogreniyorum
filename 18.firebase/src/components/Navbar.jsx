import React, { useEffect, useState } from 'react'
import '../css/Navbar.css'
import { auth } from '../Firebase'
import { signOut, onAuthStateChanged } from 'firebase/auth'
import { toast } from 'react-toastify'
import { useNavigate, useLocation } from 'react-router-dom'

function Navbar() {
  const [user, setUser] = useState(null)
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user)
    })

    return () => unsubscribe()
  }, [])

  const logout = async () => {
    try {
      await signOut(auth)
      toast.success("Çıkış Yapıldı")
      navigate("/auth")
    } catch (error) {
      toast.error("Çıkış Yapılamadı. Hata: " + error.message)
    }
  }

  // Don't show navbar if user is not authenticated or on auth page
  if (!user || location.pathname === '/auth') {
    return null
  }

  return (
    <div className="navbar">
      <div className="navbar-left">FIREBASE</div>
      <div onClick={logout} className="navbar-right">Çıkış Yap</div>
    </div>
  )
}

export default Navbar
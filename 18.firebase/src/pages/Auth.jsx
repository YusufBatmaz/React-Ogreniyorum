import React from 'react'
import { FcGoogle } from 'react-icons/fc'
import '../css/Auth.css'
import { useState } from 'react'
import { auth, provider } from '../Firebase'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

const googleProvider = new GoogleAuthProvider();

function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const getErrorMessage = (errorCode) => {
    switch (errorCode) {
      case 'auth/invalid-credential':
        return 'Email veya şifre hatalı. Önce kayıt olmanız gerekiyor.';
      case 'auth/user-not-found':
        return 'Bu email adresi kayıtlı değil. Önce kayıt olun.';
      case 'auth/wrong-password':
        return 'Şifre hatalı.';
      case 'auth/email-already-in-use':
        return 'Bu email adresi zaten kullanımda.';
      case 'auth/weak-password':
        return 'Şifre çok zayıf. En az 6 karakter kullanın.';
      case 'auth/invalid-email':
        return 'Geçersiz email adresi.';
      default:
        return errorCode;
    }
  };

  const loginWithGoogle = async () => {
    try {
      console.log("Google login attempt...");
      const response = await signInWithPopup(auth, googleProvider)
      const credential = GoogleAuthProvider.credentialFromResult(response);
      const token = credential.accessToken;
      const user = response.user;
      console.log("Google login successful:", user, token)
      if (user) {
        toast.success("Giriş Başarılı")
        setEmail("")
        setPassword("")
        navigate("/")
      }
    } catch (error) {
      console.error("Google login error:", error);
      toast.error("Google ile giriş yapılamadı: " + getErrorMessage(error.code))
    }
  }

  const register = async () => {
    try {
      console.log("Register attempt with:", email);
      if (!email || !password) {
        toast.error("Email ve şifre gerekli!");
        return;
      }
      if (password.length < 6) {
        toast.error("Şifre en az 6 karakter olmalıdır!");
        return;
      }
      const response = await createUserWithEmailAndPassword(auth, email, password)
      const user = response.user;
      console.log("Register successful:", user);
      if (user) {
        toast.success("Kayıt Başarılı! Şimdi giriş yapabilirsiniz.")
        setEmail("")
        setPassword("")
      }
    } catch (error) {
      console.error("Register error:", error);
      toast.error("Kayıt yapılamadı: " + getErrorMessage(error.code))
    }
  }

  const login = async () => {
    try {
      console.log("Login attempt with:", email);
      if (!email || !password) {
        toast.error("Email ve şifre gerekli!");
        return;
      }
      const response = await signInWithEmailAndPassword(auth, email, password)
      const user = response.user;
      console.log("Login successful:", user);
      if (user) {
        toast.success("Giriş Başarılı")
        setEmail("")
        setPassword("")
        navigate("/")
      }
    } catch (error) {
      console.error("Login error:", error);
      toast.error("Giriş yapılamadı: " + getErrorMessage(error.code))
    }
  }

  return (
    <div className="auth">
      <h3>Giriş Yap/Kayıt Ol</h3>
      <div className="auth-input">
        <input value={email} onChange={(e) => setEmail(e.target.value)} type="text" placeholder="Email" />
        <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Şifre" />
      </div>
      <div className="auth-button">
        <button onClick={loginWithGoogle}><FcGoogle className="google-icon" /> Google İle Giriş Yap</button>
        <button onClick={login}>Giriş Yap</button>
        <button onClick={register}>Kayıt Ol</button>
      </div>
      <div style={{ marginTop: '1rem', textAlign: 'center', color: 'rgba(255,255,255,0.8)', fontSize: '0.9rem' }}>
        <p>💡 İpucu: Önce "Kayıt Ol" ile hesap oluşturun, sonra "Giriş Yap" ile giriş yapın.</p>
        <p>Veya "Google İle Giriş Yap" ile hızlıca giriş yapabilirsiniz.</p>
      </div>
    </div>
  )
}

export default Auth
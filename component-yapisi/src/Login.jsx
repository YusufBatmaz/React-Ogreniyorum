import React from 'react'

export const users = [
    {
        id: 1,
        username: "admin",
        password: "123456"
    },
]

function Login() {
  return (
    <div>
        <div>
            <p>Kullanıcı Adı</p>
            <input type="text" placeholder='Kullanıcı Adınızı Giriniz' />
        </div>
        <div>
            <p>Şifre</p>
            <input type="password" placeholder='Şifrenizi Giriniz' />
        </div>
        <div>
            <button>Giriş Yap</button>
        </div>
    </div>
  )
}

export default Login
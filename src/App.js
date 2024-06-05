import React, { useState } from 'react';
import './App.css'; // Stil dosyasını ekliyoruz

const LoginPanel = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Giriş işlemleri burada yapılabilir
    console.log("Kullanıcı adı:", username);
    console.log("Şifre:", password);
  };

  const handleRegister = (e) => {
    e.preventDefault();
    // Kayıt olma işlemleri burada yapılabilir
    console.log("Yeni kullanıcı adı:", username);
    console.log("Yeni şifre:", password);
  };

  return (
    <div className="container">
      <h2>Müşteri - Giriş</h2>
      <form className="login-form" onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Kullanıcı Adı"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Şifre"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="button-container">
          <button type="submit">Giriş Yap</button>
          <button className="register-button" onClick={handleRegister}>Kayıt Ol</button>
        </div>
      </form>
    </div>
  );
};

export default LoginPanel;

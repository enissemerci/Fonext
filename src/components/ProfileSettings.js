import React from 'react';

function ProfileSettings() {
  return (
    <div>
      <h2>Profil Ayarları</h2>
      <form>
        <div>
          <label>İsim:</label>
          <input type="text" name="name" />
        </div>
        <div>
          <label>E-posta:</label>
          <input type="email" name="email" />
        </div>
        <div>
          <label>Şifre:</label>
          <input type="password" name="password" />
        </div>
        <button type="submit">Kaydet</button>
      </form>
    </div>
  );
}

export default ProfileSettings;

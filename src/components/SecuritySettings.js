import React from 'react';

function SecuritySettings() {
  return (
    <div>
      <h2>Güvenlik Ayarları</h2>
      <form>
        <div>
          <label>Mevcut Şifre:</label>
          <input type="password" name="currentPassword" />
        </div>
        <div>
          <label>Yeni Şifre:</label>
          <input type="password" name="newPassword" />
        </div>
        <div>
          <label>Yeni Şifreyi Onayla:</label>
          <input type="password" name="confirmNewPassword" />
        </div>
        <button type="submit">Şifreyi Değiştir</button>
      </form>
    </div>
  );
}

export default SecuritySettings;

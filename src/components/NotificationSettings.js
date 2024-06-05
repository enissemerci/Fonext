import React from 'react';

function NotificationSettings() {
  return (
    <div>
      <h2>Bildirim Ayarları</h2>
      <form>
        <div>
          <label>E-posta Bildirimleri:</label>
          <input type="checkbox" name="emailNotifications" />
        </div>
        <div>
          <label>SMS Bildirimleri:</label>
          <input type="checkbox" name="smsNotifications" />
        </div>
        <div>
          <label>Push Bildirimleri:</label>
          <input type="checkbox" name="pushNotifications" />
        </div>
        <button type="submit">Kaydet</button>
      </form>
    </div>
  );
}

export default NotificationSettings;

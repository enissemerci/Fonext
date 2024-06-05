import React from 'react';

function Sidebar({ setActiveSection }) {
  return (
    <div className="sidebar">
      <ul>
        <li onClick={() => setActiveSection('profile')}>Profil Ayarları</li>
        <li onClick={() => setActiveSection('security')}>Güvenlik Ayarları</li>
        <li onClick={() => setActiveSection('notifications')}>Bildirim Ayarları</li>
        <li onClick={() => setActiveSection('language')}>Dil ve Bölge Ayarları</li>
      </ul>
    </div>
  );
}

export default Sidebar;

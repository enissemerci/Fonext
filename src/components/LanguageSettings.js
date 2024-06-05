import React from 'react';

function LanguageSettings() {
  return (
    <div>
      <h2>Dil ve Bölge Ayarları</h2>
      <form>
        <div>
          <label>Dil:</label>
          <select name="language">
            <option value="tr">Türkçe</option>
            <option value="en">İngilizce</option>
          
          </select>
        </div>
        <div>
          <label>Bölge:</label>
          <select name="region">
            <option value="tr">Türkiye</option>
            <option value="us">Amerika Birleşik Devletleri</option>
            
          </select>
        </div>
        <button type="submit">Kaydet</button>
      </form>
    </div>
  );
}

export default LanguageSettings;

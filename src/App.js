import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import ProfileSettings from './components/ProfileSettings';
import SecuritySettings from './components/SecuritySettings';
import NotificationSettings from './components/NotificationSettings';
import LanguageSettings from './components/LanguageSettings';

function App() {
  const [activeSection, setActiveSection] = React.useState('profile');

  const renderSection = () => {
    switch (activeSection) {
      case 'profile':
        return <ProfileSettings />;
      case 'security':
        return <SecuritySettings />;
      case 'notifications':
        return <NotificationSettings />;
      case 'language':
        return <LanguageSettings />;
      default:
        return <ProfileSettings />;
    }
  };

  return (
    <div className="App">
      <Sidebar setActiveSection={setActiveSection} />
      <div className="settings-content">
        {renderSection()}
      </div>
    </div>
  );
}

export default App;

import React from 'react';
import { Container, Sidebar, SidebarTitle, Content, SocialMediaContainer, SocialMediaLink } from './styles';

const socialMediaPlatforms = [
  { name: 'Facebook', color: '#3b5998', url: 'https://www.facebook.com' },
  { name: 'X', color: '#1da1f2', url: 'https://www.twitter.com' },
  { name: 'Instagram', color: '#e1306c', url: 'https://www.instagram.com' },
  { name: 'LinkedIn', color: '#0077b5', url: 'https://www.linkedin.com' },
  { name: 'Pinterest', color: '#bd081c', url: 'https://www.pinterest.com' },
  { name: 'Snapchat', color: '#fffc00', url: 'https://www.snapchat.com' },
];

const App = () => {
  return (
    <Container>
      <Sidebar>
        <SidebarTitle>Medya</SidebarTitle>
      </Sidebar>
      <Content>
        <SocialMediaContainer>
          {socialMediaPlatforms.map(platform => (
            <SocialMediaLink
              key={platform.name}
              href={platform.url}
              hoverColor={platform.color}
              target="_blank"
              rel="noopener noreferrer"
            >
              {platform.name}
            </SocialMediaLink>
          ))}
        </SocialMediaContainer>
      </Content>
    </Container>
  );
};

export default App;

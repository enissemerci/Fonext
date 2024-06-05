import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  height: 100vh;
  background-color: #f0f0f0;
  font-family: 'Arial', sans-serif;
`;

export const Sidebar = styled.div`
  width: 200px; /* Sidebar genişliği biraz artırıldı */
  background-color: #fff;
  color: #333;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 2px 0 5px rgba(0,0,0,0.1);
  border-right: 1px solid #e0e0e0;
`;

export const SidebarTitle = styled.h2`
  margin: 0;
  font-size: 1.5em;
  color: #0077b5; /* LinkedIn mavisi tonu */
  border-bottom: 2px solid #0077b5;
  padding-bottom: 10px;
`;

export const Content = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SocialMediaContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  justify-items: center;
  align-items: center;
  width: 70%; /* Genişlik artırıldı */
`;

export const SocialMediaLink = styled.a`
  text-decoration: none;
  color: #333;
  background-color: white;
  padding: 40px;
  border-radius: 10px;
  width: 150px;
  text-align: center;
  font-size: 1.2em;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s ease, color 0.3s ease, transform 0.3s ease;

  &:hover {
    background-color: ${({ hoverColor }) => hoverColor};
    color: white;
    transform: translateY(-5px); /* Hover animasyonu */
  }
`;

import {NavLink} from 'react-router-dom'
import styled from 'styled-components'

export const SideContainer = styled.nav`
  background-color: ${props => (props.isDarkTheme ? '#212121' : '#ffffff')};
  padding-left: 20px;
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
  margin-top: 80px;
  padding-top: 20px;
  width: 20%;
  z-index: 5;

  @media screen and (max-width: 768px) {
    width: 70px;
    padding-left: 10px;
  }

  @media screen and (max-width: 480px) {
    display: none;
  }
`

export const LinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-decoration: none;
`

export const Links = styled(NavLink)`
  text-decoration: none;
  padding: 12px;
  display: flex;
  align-items: center;

  &.active-link {
    background-color: ${props => (props.isDarkTheme ? '#7e858e' : '#d7dfe9')};
    .icon {
      color: #ff0b37;
    }
  }
`

export const IconLinkContainer = styled.div`
  display: flex;
  align-items: center;
`

export const Icon = styled.div`
  font-size: 22px;
  margin-right: 20px;
  color: ${props => (props.isDarkTheme ? '#ebebeb' : '#383838')};

  @media screen and (max-width: 768px) {
    font-size: 26px;
    margin-right: 0;
  }
`

export const LinkHeader = styled.p`
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#383838')};
  font-size: 18px;
  margin: 0;

  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 0;

  @media screen and (max-width: 768px) {
    align-items: center;
    text-align: center;
  }
`

export const ContactHeader = styled.p`
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#00306e')};
  font-size: 20px;
  margin-bottom: 10px;

  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
`

export const SocialContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;

  @media screen and (max-width: 768px) {
    justify-content: center;
  }
`

export const SocialIcon = styled.img`
  width: 30px;
  margin: 5px;

  @media screen and (max-width: 480px) {
    width: 24px;
    margin: 5px 8px;
  }
`

export const ContactDesc = styled.p`
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#00306e')};
  font-size: 15px;
  margin-top: 10px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`

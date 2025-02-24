import {NavLink} from 'react-router-dom'
import styled from 'styled-components'

export const SideContainer = styled.nav`
  background-color: ${props => (props.isDarkTheme ? '#212121' : '#ffffff')};
  padding-left: 20px;
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 89vh;
  margin-right: 30px;
  margin-top: 80px;
  padding-top: 20px;
  width: 20%;
`

export const LinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-decoration: none;
`

export const Links = styled(NavLink)`
  text-decoration: none;
`

export const IconLinkContainer = styled.div`
  display: flex;
  align-items: center;
`

export const Icon = styled.div`
  font-size: 20px;
  margin-right: 20px;
  color: ${props => (props.isDarkTheme ? '#ebebeb' : '#383838')};
`

export const LinkHeader = styled.h1`
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#383838')};
  font-size: 20px;
`

export const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const ContactHeader = styled.p`
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#00306e')};
  font-size: 20px;
`

export const SocialContainer = styled.div`
  display: flex;
`

export const SocialIcon = styled.img`
  color: #316ff6;
  width: 40px;
  margin-right: 10px;
`

export const ContactDesc = styled.p`
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#00306e')};
  font-size: 15px;
`

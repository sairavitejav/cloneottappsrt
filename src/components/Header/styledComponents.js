import styled from 'styled-components'

export const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 10;
  background-color: ${props => (props.isDarkTheme ? '#212121' : '#f8fafc')};
  padding: 20px;

  @media screen and (max-width: 768px) {
    padding: 15px 10px;
  }
`

export const LogoImage = styled.img`
  width: 200px;
  cursor: pointer;

  @media screen and (max-width: 768px) {
    width: 150px;
  }

  @media screen and (max-width: 480px) {
    width: 130px;
  }
`

export const HeaderProfileContainer = styled.li`
  display: flex;
  align-items: center;

  @media screen and (max-width: 480px) {
    flex-wrap: wrap;
  }
`

export const ThemeButton = styled.button`
  background-color: transparent;
  border-width: 0px;
  cursor: pointer;
  outline: none;
  margin-right: 20px;

  @media screen and (max-width: 480px) {
    margin-right: 10px;
  }
`

export const ReactIcon = styled.div`
  font-size: 40px;
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#000000')};

  @media screen and (max-width: 480px) {
    font-size: 30px;
  }
`

export const ProfileImage = styled.img`
  width: 40px;
  height: 40px;
  margin-right: 20px;
  cursor: pointer;

  @media screen and (max-width: 480px) {
    width: 35px;
    height: 35px;
    margin-right: 10px;
  }
`

export const LogoutButton = styled.button`
  background-color: transparent;
  border-radius: 5px;
  width: 80px;
  font-weight: bold;
  border: ${props =>
    props.isDarkTheme ? '2px solid #ffffff' : '2px solid #3b82f6'};
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#3b82f6')};
  cursor: pointer;
  outline: none;
  padding: 10px;

  @media screen and (max-width: 480px) {
    width: 70px;
    padding: 8px;
    font-size: 12px;
  }
`

export const PopupDesc = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#00306e')};
  padding: 30px;
  background-color: ${props => (props.isDarkTheme ? '#000000' : '#ffffff')};
  text-align: center;

  @media screen and (max-width: 480px) {
    padding: 20px;
  }
`

export const PopupButtonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

export const CloseButton = styled(LogoutButton)`
  color: #7e858e;
  border: 1px solid #7e858e;
  margin-right: 20px;

  @media screen and (max-width: 480px) {
    margin-right: 10px;
    margin-bottom: 10px;
  }
`

export const ConfirmButton = styled(LogoutButton)`
  color: #ffffff;
  border-width: 0px;
  background-color: #3b82f6;
`

export const LogoList = styled.li`
  list-style-type: none;
`

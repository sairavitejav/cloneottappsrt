import {Link, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import {IoSunnyOutline, IoMoon} from 'react-icons/io5'
import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'
import SavedVideosContext from '../../context/SavedVideosContext'
import {
  NavContainer,
  LogoImage,
  HeaderProfileContainer,
  ThemeButton,
  ReactIcon,
  ProfileImage,
  LogoutButton,
  PopupDesc,
  PopupButtonContainer,
  CloseButton,
  ConfirmButton,
} from './styledComponents'

const Header = props => (
  <SavedVideosContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value
      const logoutUser = () => {
        const {history} = props
        Cookies.remove('jwt_token')
        history.replace('/login')
      }
      const changeTheme = () => {
        toggleTheme()
      }
      const logoUrl = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
      return (
        <NavContainer isDarkTheme={isDarkTheme}>
          <div>
            <Link to="/">
              <LogoImage src={logoUrl} alt="website logo" />
            </Link>
          </div>
          <HeaderProfileContainer>
            <ThemeButton
              data-testid="theme"
              onClick={changeTheme}
              type="button"
            >
              <ReactIcon isDarkTheme={isDarkTheme}>
                {isDarkTheme ? <IoSunnyOutline /> : <IoMoon />}
              </ReactIcon>
            </ThemeButton>
            <ProfileImage
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
              alt="profile"
            />

            <Popup
              modal
              trigger={
                <LogoutButton isDarkTheme={isDarkTheme} type="button">
                  Logout
                </LogoutButton>
              }
            >
              {close => (
                <>
                  <PopupDesc isDarkTheme={isDarkTheme}>
                    <p>Are you sure, you want to logout?</p>
                    <PopupButtonContainer>
                      <CloseButton type="button" onClick={() => close()}>
                        Cancel
                      </CloseButton>
                      <ConfirmButton onClick={logoutUser} type="button">
                        Confirm
                      </ConfirmButton>
                    </PopupButtonContainer>
                  </PopupDesc>
                </>
              )}
            </Popup>
          </HeaderProfileContainer>
        </NavContainer>
      )
    }}
  </SavedVideosContext.Consumer>
)
export default withRouter(Header)

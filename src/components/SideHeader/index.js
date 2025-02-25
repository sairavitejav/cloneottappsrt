import {IoMdHome} from 'react-icons/io'
import {FaFire} from 'react-icons/fa'
import {SiYoutubegaming} from 'react-icons/si'
import {RiMenuAddLine} from 'react-icons/ri'
import SavedVideosContext from '../../context/SavedVideosContext'
import {
  SideContainer,
  LinksContainer,
  IconLinkContainer,
  Icon,
  Links,
  LinkHeader,
  ContactContainer,
  ContactHeader,
  SocialContainer,
  SocialIcon,
  ContactDesc,
} from './styledComponents'

const SideHeader = () => (
  <SavedVideosContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      return (
        <SideContainer isDarkTheme={isDarkTheme}>
          <LinksContainer>
            <Links
              exact
              to="/"
              activeClassName="active-link"
              isDarkTheme={isDarkTheme}
            >
              <IconLinkContainer>
                <Icon isDarkTheme={isDarkTheme} className="icon">
                  <IoMdHome />
                </Icon>
                <LinkHeader isDarkTheme={isDarkTheme}>Home</LinkHeader>
              </IconLinkContainer>
            </Links>
            <Links
              to="/trending"
              activeClassName="active-link"
              isDarkTheme={isDarkTheme}
            >
              <IconLinkContainer>
                <Icon isDarkTheme={isDarkTheme} className="icon">
                  <FaFire />
                </Icon>
                <LinkHeader isDarkTheme={isDarkTheme}>Trending</LinkHeader>
              </IconLinkContainer>
            </Links>
            <Links
              to="/gaming"
              activeClassName="active-link"
              isDarkTheme={isDarkTheme}
            >
              <IconLinkContainer>
                <Icon isDarkTheme={isDarkTheme} className="icon">
                  <SiYoutubegaming />
                </Icon>
                <LinkHeader isDarkTheme={isDarkTheme}>Gaming</LinkHeader>
              </IconLinkContainer>
            </Links>
            <Links
              to="/saved-videos"
              activeClassName="active-link"
              isDarkTheme={isDarkTheme}
            >
              <IconLinkContainer>
                <Icon isDarkTheme={isDarkTheme} className="icon">
                  <RiMenuAddLine />
                </Icon>
                <LinkHeader isDarkTheme={isDarkTheme}>Saved videos</LinkHeader>
              </IconLinkContainer>
            </Links>
          </LinksContainer>
          <ContactContainer>
            <ContactHeader isDarkTheme={isDarkTheme}>CONTACT US</ContactHeader>
            <SocialContainer>
              <SocialIcon
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                alt="facebook logo"
              />
              <SocialIcon
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                alt="twitter logo"
              />
              <SocialIcon
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                alt="linked in logo"
              />
            </SocialContainer>
            <ContactDesc isDarkTheme={isDarkTheme}>
              Enjoy! Now to see your channels and recommendations!
            </ContactDesc>
          </ContactContainer>
        </SideContainer>
      )
    }}
  </SavedVideosContext.Consumer>
)
export default SideHeader

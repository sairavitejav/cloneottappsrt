import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {SiYoutubegaming} from 'react-icons/si'
import Header from '../Header'
import SideHeader from '../SideHeader'
import GamingAllVideos from '../GamingAllVideos'
import SavedVideosContext from '../../context/SavedVideosContext'
import {
  SideMainContainer,
  GamingContainer,
  LoaderContainer,
  FailureContainer,
  FailureImage,
  FailureHeader,
  FailureDesc,
  FailureButton,
  HeaderContainer,
  Icon,
  GamingHeader,
  ULContainer,
  GamingVideosContainer,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  loading: 'LOADING',
}

class GamingRoute extends Component {
  state = {gamesList: [], apiStatus: apiStatusConstants.initial}

  componentDidMount() {
    this.getGamesList()
  }

  getGamesList = async () => {
    this.setState({apiStatus: apiStatusConstants.loading})
    const apiUrl = 'https://apis.ccbp.in/videos/gaming'
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      method: 'GET',
      headers: {
        authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(apiUrl, options)
    if (response.ok === true) {
      const data = await response.json()
      const updatedData = data.videos.map(eachVideo => ({
        id: eachVideo.id,
        title: eachVideo.title,
        thumbnailUrl: eachVideo.thumbnail_url,
        viewCount: eachVideo.view_count,
      }))
      this.setState({
        gamesList: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  onFailureRetry = () => {
    this.getGamesList()
  }

  renderLoadingView = () => (
    <SavedVideosContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        return (
          <LoaderContainer isDarkTheme={isDarkTheme} data-testid="loader">
            <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
          </LoaderContainer>
        )
      }}
    </SavedVideosContext.Consumer>
  )

  renderFailureView = () => (
    <SavedVideosContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const failureUrl = isDarkTheme
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
        return (
          <FailureContainer isDarkTheme={isDarkTheme}>
            <FailureImage src={failureUrl} alt="failure view" />
            <FailureHeader isDarkTheme={isDarkTheme}>
              Oops! Something Went Wrong
            </FailureHeader>
            <FailureDesc isDarkTheme={isDarkTheme}>
              We are having some trouble completing your request. Please try
              again.
            </FailureDesc>
            <FailureButton onClick={this.onFailureRetry} type="button">
              Retry
            </FailureButton>
          </FailureContainer>
        )
      }}
    </SavedVideosContext.Consumer>
  )

  renderGamingView = () => {
    const {gamesList} = this.state
    return (
      <SavedVideosContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          return (
            <GamingContainer isDarkTheme={isDarkTheme} data-testid="gaming">
              <HeaderContainer isDarkTheme={isDarkTheme}>
                <Icon>
                  <SiYoutubegaming />
                </Icon>
                <GamingHeader isDarkTheme={isDarkTheme}>Gaming</GamingHeader>
              </HeaderContainer>
              <GamingVideosContainer>
                {gamesList.map(eachGame => (
                  <GamingAllVideos eachGame={eachGame} key={eachGame.id} />
                ))}
              </GamingVideosContainer>
            </GamingContainer>
          )
        }}
      </SavedVideosContext.Consumer>
    )
  }

  renderDifferentViews = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.loading:
        return this.renderLoadingView()
      case apiStatusConstants.success:
        return this.renderGamingView()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      default:
        return null
    }
  }

  render() {
    return (
      <>
        <ULContainer>
          <Header />
        </ULContainer>
        <SideMainContainer>
          <SideHeader />
          {this.renderDifferentViews()}
        </SideMainContainer>
      </>
    )
  }
}
export default GamingRoute

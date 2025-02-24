import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {FaFire} from 'react-icons/fa'
import Header from '../Header'
import SideHeader from '../SideHeader'
import TrendingAllVideos from '../TrendingAllVideos'
import SavedVideosContext from '../../context/SavedVideosContext'
import {
  SideMainContainer,
  TrendingContainer,
  HeaderContainer,
  Icon,
  TrendingHeader,
  TrendingVideosContainer,
  LoaderContainer,
  FailureContainer,
  FailureImage,
  FailureHeader,
  FailureDesc,
  FailureButton,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  loading: 'LOADING',
}

class TrendingRoute extends Component {
  state = {trendingVideosList: [], apiStatus: apiStatusConstants.initial}

  componentDidMount() {
    this.getTrendingVideosList()
  }

  getTrendingVideosList = async () => {
    this.setState({apiStatus: apiStatusConstants.loading})
    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = 'https://apis.ccbp.in/videos/trending'
    const options = {
      method: 'GET',
      headers: {
        authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(apiUrl, options)
    if (response.ok === true) {
      const data = await response.json()
      const updatedData = data.videos.map(eachVideoDetails => ({
        id: eachVideoDetails.id,
        title: eachVideoDetails.title,
        channel: eachVideoDetails.channel,
        publishedAt: eachVideoDetails.published_at,
        thumbnailUrl: eachVideoDetails.thumbnail_url,
        viewCount: eachVideoDetails.view_count,
      }))
      this.setState({
        trendingVideosList: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  onFailureRetry = () => {
    this.getTrendingVideosList()
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

  renderTrendingView = () => {
    const {trendingVideosList} = this.state
    return (
      <SavedVideosContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          return (
            <TrendingContainer isDarkTheme={isDarkTheme} data-testid="trending">
              <HeaderContainer isDarkTheme={isDarkTheme}>
                <Icon>
                  <FaFire />
                </Icon>
                <TrendingHeader isDarkTheme={isDarkTheme}>
                  Trending
                </TrendingHeader>
              </HeaderContainer>
              <TrendingVideosContainer>
                {trendingVideosList.map(eachVideo => (
                  <TrendingAllVideos eachVideo={eachVideo} key={eachVideo.id} />
                ))}
              </TrendingVideosContainer>
            </TrendingContainer>
          )
        }}
      </SavedVideosContext.Consumer>
    )
  }

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

  renderDifferentViews = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.loading:
        return this.renderLoadingView()
      case apiStatusConstants.success:
        return this.renderTrendingView()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      default:
        return null
    }
  }

  render() {
    return (
      <>
        <Header />
        <SideMainContainer>
          <SideHeader />
          {this.renderDifferentViews()}
        </SideMainContainer>
      </>
    )
  }
}
export default TrendingRoute

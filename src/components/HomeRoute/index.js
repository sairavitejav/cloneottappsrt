import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {IoCloseSharp, IoSearchSharp} from 'react-icons/io5'
import Header from '../Header'
import SideHeader from '../SideHeader'
import HomeAllVideos from '../HomeAllVideos'
import SavedVideosContext from '../../context/SavedVideosContext'
import {
  SideMainContainer,
  BannerContainer,
  LogoImage,
  BannerDesc,
  BannerButton,
  CloseButton,
  HomeContainer,
  HomeVideosContainer,
  InputContainer,
  Input,
  SearchIconButton,
  VideosListContainer,
  LoaderContainer,
  FailureContainer,
  FailureImage,
  FailureHeader,
  FailureDesc,
  FailureButton,
  ULContainer,
  Container,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  loading: 'LOADING',
}

class Home extends Component {
  state = {
    showBanner: true,
    homeVideosList: [],
    apiStatus: apiStatusConstants.initial,
    searchInput: '',
    appliedSearch: '',
  }

  componentDidMount() {
    this.getVideosList()
  }

  getVideosList = async () => {
    this.setState({apiStatus: apiStatusConstants.loading})
    const jwtToken = Cookies.get('jwt_token')
    const {appliedSearch} = this.state
    const apiUrl = `https://apis.ccbp.in/videos/all?search=${appliedSearch}`
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
        homeVideosList: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  onFailureRetry = () => {
    this.getVideosList()
  }

  removeBanner = () => {
    this.setState({showBanner: false})
  }

  readUserSearch = event => {
    this.setState({searchInput: event.target.value})
  }

  applyUserSearch = () => {
    const {searchInput} = this.state
    this.setState({appliedSearch: searchInput}, this.getVideosList)
  }

  renderHomeView = () => {
    const {homeVideosList} = this.state
    return (
      <SavedVideosContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          return (
            <div>
              {homeVideosList.length !== 0 ? (
                <VideosListContainer>
                  {homeVideosList.map(eachVideoDetails => (
                    <HomeAllVideos
                      eachVideoDetails={eachVideoDetails}
                      key={eachVideoDetails.id}
                    />
                  ))}
                </VideosListContainer>
              ) : (
                <FailureContainer>
                  <FailureImage
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
                    alt="no videos"
                  />
                  <FailureHeader isDarkTheme={isDarkTheme}>
                    No Search Results Found
                  </FailureHeader>
                  <FailureDesc isDarkTheme={isDarkTheme}>
                    Try different key words or remove search filter
                  </FailureDesc>
                  <FailureButton onClick={this.onFailureRetry} type="button">
                    Retry
                  </FailureButton>
                </FailureContainer>
              )}
            </div>
          )
        }}
      </SavedVideosContext.Consumer>
    )
  }

  renderLoaderView = () => (
    <LoaderContainer data-testid="loader">
      <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
    </LoaderContainer>
  )

  renderFailureView = () => (
    <SavedVideosContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const failureUrl = isDarkTheme
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
        return (
          <FailureContainer>
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
        return this.renderLoaderView()
      case apiStatusConstants.success:
        return this.renderHomeView()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      default:
        return null
    }
  }

  render() {
    const {showBanner, searchInput} = this.state
    return (
      <SavedVideosContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          return (
            <>
              <ULContainer>
                <Header />
              </ULContainer>
              <SideMainContainer>
                <SideHeader />
                <HomeContainer data-testid="home" isDarkTheme={isDarkTheme}>
                  {showBanner && (
                    <BannerContainer data-testid="banner">
                      <Container>
                        <LogoImage
                          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                          alt="nxt watch logo"
                        />
                        <BannerDesc>
                          Buy Nxt Watch Premium prepaid plans with UPI
                        </BannerDesc>
                        <BannerButton>GET IT NOW</BannerButton>
                      </Container>
                      <Container>
                        <CloseButton
                          data-testid="close"
                          onClick={this.removeBanner}
                        >
                          <IoCloseSharp />
                        </CloseButton>
                      </Container>
                    </BannerContainer>
                  )}
                  <HomeVideosContainer>
                    <InputContainer isDarkTheme={isDarkTheme}>
                      <Input
                        isDarkTheme={isDarkTheme}
                        value={searchInput}
                        onChange={this.readUserSearch}
                        type="search"
                        placeholder="Search"
                      />
                      <SearchIconButton
                        type="button"
                        data-testid="searchButton"
                        isDarkTheme={isDarkTheme}
                        onClick={this.applyUserSearch}
                      >
                        <IoSearchSharp />
                      </SearchIconButton>
                    </InputContainer>
                    {this.renderDifferentViews()}
                  </HomeVideosContainer>
                </HomeContainer>
              </SideMainContainer>
            </>
          )
        }}
      </SavedVideosContext.Consumer>
    )
  }
}
export default Home

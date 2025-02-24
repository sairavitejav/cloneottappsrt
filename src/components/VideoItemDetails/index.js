import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'
import {formatDistanceToNow} from 'date-fns'
import SavedVideosContext from '../../context/SavedVideosContext'
import {
  ReactIconLike,
  ReactIconDisLike,
  ReactIconSave,
  VideoItemContainer,
  SideMainContainer,
  LoaderContainer,
  FailureContainer,
  FailureImage,
  FailureHeader,
  FailureDesc,
  FailureButton,
  ReactPlayers,
  VideoItemTitle,
  ViewsLikesContainer,
  ItemButton,
  ViewsContainer,
  LikesContainer,
  ItemDesc,
  ChannelDetailContainer,
  LogoContainer,
  ChannelLogo,
  DetailsContainer,
  ChannelName,
} from './styledComponents'
import Header from '../Header'
import SideHeader from '../SideHeader'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  loading: 'LOADING',
}

class VideoItemDetails extends Component {
  state = {
    videoItemDetails: [],
    apiStatus: apiStatusConstants.initial,
    isLiked: false,
    isDisLiked: false,
  }

  componentDidMount() {
    this.getVideoItemDetails()
  }

  getVideoItemDetails = async () => {
    this.setState({apiStatus: apiStatusConstants.loading})
    const {match} = this.props
    const {params} = match
    const {id} = params
    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = `https://apis.ccbp.in/videos/${id}`
    const options = {
      method: 'GET',
      headers: {
        authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(apiUrl, options)
    if (response.ok === true) {
      const data = await response.json()
      const updatedData = {
        id: data.video_details.id,
        channel: data.video_details.channel,
        description: data.video_details.description,
        publishedAt: data.video_details.published_at,
        thumbnailUrl: data.video_details.thumbnail_url,
        title: data.video_details.title,
        videoUrl: data.video_details.video_url,
        viewCount: data.video_details.view_count,
      }
      this.setState({
        videoItemDetails: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  onFailureRetry = () => {
    this.getVideoItemDetails()
  }

  onClickLike = () => {
    const {isDisLiked} = this.state
    this.setState(prevState => ({isLiked: !prevState.isLiked}))
    if (isDisLiked) {
      this.setState({isDisLiked: false})
    }
  }

  onClickDisLike = () => {
    this.setState(prevState => ({isDisLiked: !prevState.isDisLiked}))
    const {isLiked} = this.state
    if (isLiked) {
      this.setState({isLiked: false})
    }
  }

  renderVideoItemView = () => (
    <SavedVideosContext.Consumer>
      {value => {
        const {saveOrDeleteVideos, isDarkTheme} = value
        const {videoItemDetails, isLiked, isDisLiked} = this.state
        const {
          channel,
          description,
          title,
          videoUrl,
          viewCount,
          publishedAt,
        } = videoItemDetails
        const channelData = {
          name: channel.name,
          profileImageUrl: channel.profile_image_url,
          subscriberCount: channel.subscriber_count,
        }
        const {name, profileImageUrl, subscriberCount} = channelData
        const publishedOn = formatDistanceToNow(new Date(publishedAt)).split(
          ' ',
        )
        const onSaveOrDeleteVideo = () => {
          saveOrDeleteVideos({...videoItemDetails, ...channelData})
        }
        return (
          <VideoItemContainer
            isDarkTheme={isDarkTheme}
            data-testid="videoItemDetails"
          >
            <ReactPlayers url={videoUrl} controls />
            <VideoItemTitle isDarkTheme={isDarkTheme}>{title}</VideoItemTitle>
            <ViewsLikesContainer>
              <ViewsContainer>
                <ItemDesc>{viewCount} views</ItemDesc>
                <ItemDesc>
                  {publishedOn[1]} {publishedOn[2]} ago
                </ItemDesc>
              </ViewsContainer>
              <LikesContainer>
                <ItemButton
                  isActive={isLiked}
                  onClick={this.onClickLike}
                  type="button"
                >
                  <ReactIconLike />
                  Like
                </ItemButton>
                <ItemButton
                  isActive={isDisLiked}
                  onClick={this.onClickDisLike}
                  type="button"
                >
                  <ReactIconDisLike />
                  DisLike
                </ItemButton>
                <ItemButton onClick={onSaveOrDeleteVideo} type="button">
                  <ReactIconSave />
                  Save
                </ItemButton>
              </LikesContainer>
            </ViewsLikesContainer>
            <hr />
            <ChannelDetailContainer>
              <LogoContainer>
                <ChannelLogo src={profileImageUrl} alt="channel logo" />
              </LogoContainer>
              <DetailsContainer>
                <ChannelName isDarkTheme={isDarkTheme}>{name}</ChannelName>
                <ItemDesc>{subscriberCount} subscribers</ItemDesc>
                <ItemDesc>{description}</ItemDesc>
              </DetailsContainer>
            </ChannelDetailContainer>
          </VideoItemContainer>
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

  renderDifferentViews = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.loading:
        return this.renderLoadingView()
      case apiStatusConstants.success:
        return this.renderVideoItemView()
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
export default VideoItemDetails

import {formatDistanceToNow} from 'date-fns'
import SavedVideosContext from '../../context/SavedVideosContext'
import {
  EachVideoList,
  ThumbNail,
  DetailsContainer,
  ChannelLogo,
  Titles,
  VideoTitle,
  VideoDetails,
  CountViewsContainer,
  Links,
} from './styledComponents'

const HomeAllVideos = props => {
  const {eachVideoDetails} = props
  const {
    id,
    title,
    channel,
    publishedAt,
    thumbnailUrl,
    viewCount,
  } = eachVideoDetails
  const channelData = {
    name: channel.name,
    profileImageUrl: channel.profile_image_url,
  }
  const {name, profileImageUrl} = channelData
  const publishedOn = formatDistanceToNow(new Date(publishedAt)).split(' ')
  return (
    <SavedVideosContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        return (
          <Links to={`/videos/${id}`}>
            <EachVideoList>
              <ThumbNail src={thumbnailUrl} alt="video thumbnail" />
              <DetailsContainer>
                <ChannelLogo src={profileImageUrl} alt="channel logo" />
                <Titles>
                  <VideoTitle isDarkTheme={isDarkTheme}>{title}</VideoTitle>
                  <VideoDetails>{name}</VideoDetails>
                  <CountViewsContainer>
                    <VideoDetails>{viewCount} views</VideoDetails>
                    <VideoDetails>
                      {publishedOn[1]} {publishedOn[2]} ago
                    </VideoDetails>
                  </CountViewsContainer>
                </Titles>
              </DetailsContainer>
            </EachVideoList>
          </Links>
        )
      }}
    </SavedVideosContext.Consumer>
  )
}
export default HomeAllVideos

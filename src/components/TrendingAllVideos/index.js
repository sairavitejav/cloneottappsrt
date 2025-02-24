import {formatDistanceToNow} from 'date-fns'
import SavedVideosContext from '../../context/SavedVideosContext'
import {
  ListVideoContainer,
  TrendingThumbNail,
  DetailsContainer,
  Titles,
  VideoTitle,
  VideoDetails,
  CountViewsContainer,
  Links,
} from './styledComponents'

const TrendingAllVideos = props => {
  const {eachVideo} = props
  const {id, title, channel, publishedAt, thumbnailUrl, viewCount} = eachVideo
  const channelData = {
    name: channel.name,
  }
  const {name} = channelData
  const publishedOn = formatDistanceToNow(new Date(publishedAt)).split(' ')
  return (
    <SavedVideosContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        return (
          <Links to={`/videos/${id}`}>
            <ListVideoContainer>
              <TrendingThumbNail src={thumbnailUrl} alt="video thumbnail" />
              <DetailsContainer>
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
            </ListVideoContainer>
          </Links>
        )
      }}
    </SavedVideosContext.Consumer>
  )
}
export default TrendingAllVideos

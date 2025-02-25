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

const SavedVideoItems = props => {
  const {eachVideo} = props
  const {id, thumbnailUrl, title, name, viewCount, publishedAt} = eachVideo
  const publishedOn = formatDistanceToNow(new Date(publishedAt))
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
                    <VideoDetails>{publishedOn}</VideoDetails>
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
export default SavedVideoItems

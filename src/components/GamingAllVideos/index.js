import SavedVideosContext from '../../context/SavedVideosContext'
import {EachGameList, Thumbnail, Header, Views, Links} from './styledComponents'

const GamingAllVideos = props => {
  const {eachGame} = props
  const {id, title, thumbnailUrl, viewCount} = eachGame
  return (
    <SavedVideosContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        return (
          <Links to={`/videos/${id}`}>
            <EachGameList>
              <Thumbnail src={thumbnailUrl} alt="video thumbnail" />
              <Header isDarkTheme={isDarkTheme}>{title}</Header>
              <Views>{viewCount} Watching Worldwide</Views>
            </EachGameList>
          </Links>
        )
      }}
    </SavedVideosContext.Consumer>
  )
}
export default GamingAllVideos

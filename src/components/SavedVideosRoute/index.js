import {RiMenuAddLine} from 'react-icons/ri'
import SavedVideosContext from '../../context/SavedVideosContext'
import Header from '../Header'
import SideHeader from '../SideHeader'
import SavedVideoItems from '../SavedVideoItems'
import {
  SideMainContainer,
  SavedVideosContainer,
  NoSavedVideosContainer,
  NoVideosImage,
  NoSavedDesc,
  NoSavedHeader,
  VideosListContainer,
  SavedContainer,
  HeaderContainer,
  SavedHeader,
  Icon,
  ULContainer,
} from './styledComponents'

const SavedVideosRoute = () => (
  <SavedVideosContext.Consumer>
    {value => {
      const {savedVideosList, isDarkTheme} = value
      const showEmptyView = savedVideosList.length === 0
      return (
        <>
          <ULContainer>
            <Header />
          </ULContainer>
          <SideMainContainer>
            <SideHeader />
            <SavedVideosContainer
              isDarkTheme={isDarkTheme}
              data-testid="savedVideos"
            >
              {showEmptyView ? (
                <NoSavedVideosContainer>
                  <NoVideosImage
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
                    alt="no saved videos"
                  />
                  <NoSavedHeader isDarkTheme={isDarkTheme}>
                    No saved videos found
                  </NoSavedHeader>
                  <NoSavedDesc>
                    You can save your videos while watching them.
                  </NoSavedDesc>
                </NoSavedVideosContainer>
              ) : (
                <SavedContainer isDarkTheme={isDarkTheme}>
                  <HeaderContainer isDarkTheme={isDarkTheme}>
                    <Icon>
                      <RiMenuAddLine />
                    </Icon>
                    <SavedHeader isDarkTheme={isDarkTheme}>
                      Saved Videos
                    </SavedHeader>
                  </HeaderContainer>
                  <VideosListContainer>
                    {savedVideosList.map(eachVideo => (
                      <SavedVideoItems
                        eachVideo={eachVideo}
                        key={eachVideo.id}
                      />
                    ))}
                  </VideosListContainer>
                </SavedContainer>
              )}
            </SavedVideosContainer>
          </SideMainContainer>
        </>
      )
    }}
  </SavedVideosContext.Consumer>
)
export default SavedVideosRoute

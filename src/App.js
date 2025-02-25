import {Component} from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import LoginRoute from './components/LoginRoute'
import ProtectedRoute from './components/ProtectedRoute'
import HomeRoute from './components/HomeRoute'
import VideoItemDetails from './components/VideoItemDetails'
import TrendingRoute from './components/TrendingRoute'
import GamingRoute from './components/GamingRoute'
import SavedVideosRoute from './components/SavedVideosRoute'
import NotFound from './components/NotFound'
import SavedVideosContext from './context/SavedVideosContext'
import './App.css'

// Replace your code here
class App extends Component {
  state = {savedVideosList: [], isDarkTheme: false}

  saveOrDeleteVideos = video => {
    const {savedVideosList} = this.state
    const isSaved = savedVideosList.find(item => item.id === video.id)
    if (isSaved) {
      const filteredList = savedVideosList.filter(item => item.id !== video.id)
      this.setState({
        savedVideosList: filteredList,
      })
    } else {
      this.setState(prevState => ({
        savedVideosList: [...prevState.savedVideosList, video],
      }))
    }
  }

  toggleTheme = () => {
    this.setState(prevState => ({isDarkTheme: !prevState.isDarkTheme}))
  }

  render() {
    const {savedVideosList, isDarkTheme} = this.state
    return (
      <SavedVideosContext.Provider
        value={{
          savedVideosList,
          saveOrDeleteVideos: this.saveOrDeleteVideos,
          isDarkTheme,
          toggleTheme: this.toggleTheme,
        }}
      >
        <Switch>
          <Route exact path="/login" component={LoginRoute} />
          <ProtectedRoute exact path="/" component={HomeRoute} />
          <ProtectedRoute
            exact
            path="/videos/:id"
            component={VideoItemDetails}
          />
          <ProtectedRoute exact path="/trending" component={TrendingRoute} />
          <ProtectedRoute exact path="/gaming" component={GamingRoute} />
          <ProtectedRoute
            exact
            path="/saved-videos"
            component={SavedVideosRoute}
          />
          <Route path="/not-found" component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
      </SavedVideosContext.Provider>
    )
  }
}

export default App

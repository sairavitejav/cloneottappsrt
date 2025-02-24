import React from 'react'

const SavedVideosContext = React.createContext({
  savedVideosList: [],
  saveOrDeleteVideos: () => {},
  isDarkTheme: false,
  toggleTheme: () => {},
})

export default SavedVideosContext

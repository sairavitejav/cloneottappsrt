import {Link} from 'react-router-dom'
import styled from 'styled-components'

export const ListVideoContainer = styled.li`
  list-style-type: none;
  display: flex;
  margin-bottom: 20px;
`
export const TrendingThumbNail = styled.img`
  width: 300px;
  margin-right: 10px;
`
export const DetailsContainer = styled.div`
  display: flex;
  align-items: flex-start;
`

export const Titles = styled.div`
  display: flex;
  flex-direction: column;
`
export const VideoTitle = styled.h1`
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#181818')};
  font-size: 15px;
  margin-top: 0px;
  margin-bottom: 0px;
`
export const VideoDetails = styled.p`
  color: #64748b;
  font-size: 15px;
  margin-top: 5px;
  margin-right: 5px;
  margin-bottom: 0px;
`
export const CountViewsContainer = styled.div`
  display: flex;
`
export const Links = styled(Link)`
  text-decoration: none;
`

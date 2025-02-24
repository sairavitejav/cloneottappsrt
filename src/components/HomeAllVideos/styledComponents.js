import {Link} from 'react-router-dom'
import styled from 'styled-components'

export const EachVideoList = styled.li`
  list-style-type: none;
  width: 300px;
  margin-right: 40px;
  margin-bottom: 20px;
  font-family: Roboto;
`
export const ThumbNail = styled.img`
  width: 100%;
  margin-bottom: 10px;
`

export const DetailsContainer = styled.div`
  display: flex;
  align-items: flex-start;
`

export const ChannelLogo = styled.img`
  width: 40px;
  margin-right: 10px;
`
export const Titles = styled.div`
  display: flex;
  flex-direction: column;
`
export const VideoTitle = styled.p`
  color: ${props => (props.isDarkTheme ? '#f1f1f1' : '#181818')};
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

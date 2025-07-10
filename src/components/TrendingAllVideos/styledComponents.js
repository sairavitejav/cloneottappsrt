import {Link} from 'react-router-dom'
import styled from 'styled-components'

export const ListVideoContainer = styled.li`
  list-style-type: none;
  display: flex;
  margin-bottom: 20px;

  @media screen and (max-width: 576px) {
    flex-direction: column;
  }
`

export const TrendingThumbNail = styled.img`
  width: 300px;
  margin-right: 10px;

  @media screen and (max-width: 768px) {
    width: 250px;
  }

  @media screen and (max-width: 576px) {
    width: 100%;
    margin-right: 0;
    margin-bottom: 10px;
  }
`

export const DetailsContainer = styled.div`
  display: flex;
  align-items: flex-start;

  @media screen and (max-width: 576px) {
    flex-direction: column;
  }
`

export const Titles = styled.div`
  display: flex;
  flex-direction: column;
`

export const VideoTitle = styled.p`
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#181818')};
  font-size: 15px;
  margin-top: 0px;
  margin-bottom: 0px;

  @media screen and (max-width: 576px) {
    font-size: 14px;
  }
`

export const VideoDetails = styled.p`
  color: #64748b;
  font-size: 15px;
  margin-top: 5px;
  margin-right: 5px;
  margin-bottom: 0px;

  @media screen and (max-width: 576px) {
    font-size: 13px;
  }
`

export const CountViewsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;

  @media screen and (max-width: 576px) {
    margin-top: 5px;
  }
`

export const Links = styled(Link)`
  text-decoration: none;
`

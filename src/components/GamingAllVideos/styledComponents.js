import {Link} from 'react-router-dom'
import styled from 'styled-components'

export const EachGameList = styled.li`
  list-style-type: none;
  margin-right: 20px;
  margin-bottom: 20px;
  width: 350px;

  @media screen and (max-width: 1024px) {
    width: 300px;
  }

  @media screen and (max-width: 768px) {
    width: 45%;
    margin-right: 10px;
  }

  @media screen and (max-width: 480px) {
    width: 100%;
    margin-right: 0;
  }
`

export const Thumbnail = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
  margin-bottom: 10px;
`

export const Header = styled.p`
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#000000')};
  font-size: 20px;
  margin: 5px 0;

  @media screen and (max-width: 768px) {
    font-size: 18px;
  }

  @media screen and (max-width: 480px) {
    font-size: 16px;
  }
`

export const Views = styled.p`
  color: #64748b;
  font-size: 15px;

  @media screen and (max-width: 768px) {
    font-size: 14px;
  }

  @media screen and (max-width: 480px) {
    font-size: 13px;
  }
`

export const Links = styled(Link)`
  text-decoration: none;
`

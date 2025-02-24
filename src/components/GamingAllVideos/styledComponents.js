import {Link} from 'react-router-dom'
import styled from 'styled-components'

export const EachGameList = styled.li`
  list-style-type: none;
  margin-right: 20px;
  margin-bottom: 20px;
`
export const Thumbnail = styled.img`
  width: 350px;
  height: 350px;
  margin-bottom: 10px;
`
export const Header = styled.p`
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#000000')};
  font-size: 20px;
`

export const Views = styled.p`
  color: #64748b;
  font-size: 15px;
`
export const Links = styled(Link)`
  text-decoration: none;
`

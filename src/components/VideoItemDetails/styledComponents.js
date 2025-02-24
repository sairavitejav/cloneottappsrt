import ReactPlayer from 'react-player'
import {BiLike, BiDislike} from 'react-icons/bi'
import {RiMenuAddLine} from 'react-icons/ri'
import styled from 'styled-components'

export const SideMainContainer = styled.div`
  display: flex;
`

export const VideoItemContainer = styled.div`
  background-color: ${props => (props.isDarkTheme ? '#0f0f0f' : '#f9f9f9')};
  width: 100%;
  margin-left: 20%;
  margin-top: 80px;
  padding: 30px;
`
export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  height: 100vh;
  margin-left: 20%;
  margin-top: 80px;
  background-color: ${props => (props.isDarkTheme ? '#0f0f0f' : '#f9f9f9')};
`
export const FailureContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-left: 20%;
  margin-top: 80px;
  height: 88vh;
  background-color: ${props => (props.isDarkTheme ? '#0f0f0f' : '#f9f9f9')};
`

export const FailureImage = styled.img`
  width: 400px;
  margin-bottom: 10px;
`

export const FailureHeader = styled.h1`
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#000000')};
  font-size: 30px;
`

export const FailureDesc = styled.p`
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#64748bw')};
  font-size: 20px;
`
export const FailureButton = styled.button`
  background-color: #3b82f6;
  color: #ffffff;
  padding: 10px;
  border-radius: 10px;
  border-width: 0px;
  cursor: pointer;
  outline: none;
`
export const ReactPlayers = styled(ReactPlayer)`
  width: 100%;
`
export const VideoItemTitle = styled.p`
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#000000')};
  font-size: 15px;
`
export const ViewsLikesContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const ViewsContainer = styled.div`
  display: flex;
`

export const ItemDesc = styled.p`
  color: #64748b;
  margin-right: 10px;
  font-size: 15px;
`
export const LikesContainer = styled.div`
  display: flex;
`

export const ItemButton = styled.button`
  background-color: transparent;
  color: ${props => (props.isActive ? '#2563eb' : '#64748b')};
  display: flex;
  align-items: flex-end;
  margin-right: 10px;
  border-width: 0px;
  cursor: pointer;
  outline: none;
`
export const ReactIconLike = styled(BiLike)`
  font-size: 20px;
`
export const ReactIconDisLike = styled(BiDislike)`
  font-size: 20px;
`
export const ReactIconSave = styled(RiMenuAddLine)`
  font-size: 20px;
`

export const ChannelDetailContainer = styled.div`
  display: flex;
  align-items: flex-start;
`
export const LogoContainer = styled.div`
  margin-right: 20px;
`

export const ChannelLogo = styled.img`
  width: 40px;
  margin-top: 10px;
`

export const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
`
export const ChannelName = styled.p`
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#000000')};
  font-size: 15px;
  margin-bottom: 0px;
`

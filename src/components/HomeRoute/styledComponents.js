import styled from 'styled-components'

export const SideMainContainer = styled.div`
  display: flex;
`
export const BannerContainer = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  height: 25vh;
  padding-left: 60px;
  padding-top: 30px;
  width: 100%;
  display: flex;
  justify-content: space-between;
`

export const LogoImage = styled.img`
  width: 150px;
`

export const BannerDesc = styled.p`
  font-size: 15px;
`

export const BannerButton = styled.button`
  background-color: transparent;
  border: 1px solid #1e293;
  color: #1e293;
  padding: 10px;
  cursor: pointer;
  outline: none;
`
export const CloseButton = styled(BannerButton)`
  border-width: 0px;
`

export const HomeContainer = styled.div`
  width: 100%;
  margin-left: 20%;
  margin-top: 80px;
  background-color: ${props => (props.isDarkTheme ? '#181818' : '#f9f9f9')};
`

export const HomeVideosContainer = styled.div`
  background-color: ${props => (props.isDarkTheme ? '#181818' : '#f9f9f9')};
  min-height: 100vh;
  padding: 20px;
`
export const InputContainer = styled.div`
  background-color: ${props => (props.isDarkTheme ? 'transparent' : '#ffffff')};
  border: 1px solid #475569;
  display: flex;
  width: 50%;
  margin-left: 40px;
  margin-bottom: 20px;
`
export const Input = styled.input`
  background-color: ${props => (props.isDarkTheme ? 'transparent' : '#ffffff')};
  border: 1px solid #475569;
  padding: 5px;
  width: 90%;
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#000000')};
  outline: none;
`

export const SearchIconButton = styled.button`
  background-color: ${props => (props.isDarkTheme ? '#7e858e' : '')};
  border: 1px solid #475569;
  cursor: pointer;
  outline: none;
  width: 10%;
`
export const VideosListContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
`

export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
`

export const FailureContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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
  color: ${props => (props.isDarkTheme ? '#e2e8f0' : '#64748b')};
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

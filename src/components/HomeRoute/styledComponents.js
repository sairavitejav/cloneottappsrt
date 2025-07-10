import styled from 'styled-components'

export const SideMainContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`

export const BannerContainer = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  height: 25vh;
  padding: 30px 20px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    height: auto;
    padding: 20px;
    gap: 10px;
  }
`

export const Container = styled.div`
  padding: 0px;
`

export const LogoImage = styled.img`
  width: 150px;

  @media screen and (max-width: 480px) {
    width: 120px;
  }
`

export const BannerDesc = styled.p`
  font-size: 15px;

  @media screen and (max-width: 480px) {
    font-size: 13px;
  }
`

export const BannerButton = styled.button`
  background-color: transparent;
  border: 1px solid #1e293;
  color: #1e293;
  padding: 10px;
  cursor: pointer;
  outline: none;

  @media screen and (max-width: 480px) {
    padding: 8px;
    font-size: 14px;
  }
`

export const CloseButton = styled(BannerButton)`
  border-width: 0px;
`

export const HomeContainer = styled.div`
  width: 100%;
  margin-left: 20%;
  margin-top: 80px;
  background-color: ${props => (props.isDarkTheme ? '#181818' : '#f9f9f9')};

  @media screen and (max-width: 768px) {
    margin-left: 60px; /* or whatever your compact sidebar width is */
  }

  @media screen and (max-width: 576px) {
    margin-left: 0px;
  }
`

export const HomeVideosContainer = styled.div`
  min-height: 100vh;
  padding: 20px;

  @media screen and (max-width: 480px) {
    padding: 10px;
  }
`

export const InputContainer = styled.div`
  background-color: ${props => (props.isDarkTheme ? 'transparent' : '#ffffff')};
  border: 1px solid #475569;
  display: flex;
  width: 50%;
  margin-left: 40px;
  margin-bottom: 20px;

  @media screen and (max-width: 768px) {
    width: 80%;
    margin-left: 20px;
  }

  @media screen and (max-width: 480px) {
    width: 90%;
    margin-left: 0;
  }
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
  padding: 0;
  margin: 0;
  list-style: none;
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
  padding: 20px;

  @media screen and (max-width: 480px) {
    padding: 10px;
  }
`

export const FailureImage = styled.img`
  width: 400px;
  margin-bottom: 10px;

  @media screen and (max-width: 768px) {
    width: 300px;
  }

  @media screen and (max-width: 480px) {
    width: 200px;
  }
`

export const FailureHeader = styled.h1`
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#000000')};
  font-size: 30px;
  text-align: center;

  @media screen and (max-width: 480px) {
    font-size: 24px;
  }
`

export const FailureDesc = styled.p`
  color: ${props => (props.isDarkTheme ? '#e2e8f0' : '#64748b')};
  font-size: 20px;
  text-align: center;

  @media screen and (max-width: 480px) {
    font-size: 16px;
  }
`

export const FailureButton = styled.button`
  background-color: #3b82f6;
  color: #ffffff;
  padding: 10px 20px;
  border-radius: 10px;
  border-width: 0px;
  cursor: pointer;
  outline: none;

  @media screen and (max-width: 480px) {
    padding: 8px 16px;
    font-size: 14px;
  }
`

export const ULContainer = styled.ul`
  padding: 0px;
  margin: 0px;
`

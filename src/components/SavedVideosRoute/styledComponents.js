import styled from 'styled-components'

export const SideMainContainer = styled.div`
  display: flex;
`

export const SavedVideosContainer = styled.div`
  width: 100%;
  margin-left: 20%;
  margin-top: 80px;
  min-height: 90vh;
  background-color: ${props => (props.isDarkTheme ? '#0f0f0f' : '#f9f9f9')};

  @media screen and (max-width: 768px) {
    margin-left: 0;
  }
`

export const NoSavedVideosContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 88vh;
  padding: 20px;
`

export const NoSavedHeader = styled.h1`
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#000000')};
  font-size: 20px;
  text-align: center;
`

export const NoSavedDesc = styled.p`
  color: #64748b;
  font-size: 15px;
  text-align: center;
`

export const NoVideosImage = styled.img`
  width: 500px;
  margin-bottom: 10px;

  @media screen and (max-width: 768px) {
    width: 300px;
  }

  @media screen and (max-width: 480px) {
    width: 90%;
  }
`

export const VideosListContainer = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 20px;
`

export const SavedContainer = styled.div`
  background-color: ${props => (props.isDarkTheme ? '#0f0f0f' : '#f9f9f9')};
`

export const HeaderContainer = styled.div`
  background-color: ${props => (props.isDarkTheme ? '#181818' : '#ebebeb')};
  display: flex;
  align-items: center;
  padding: 10px 20px;
  padding-left: 50px;

  @media screen and (max-width: 576px) {
    padding: 10px;
  }
`

export const Icon = styled.div`
  font-size: 50px;
  color: #ff0b37;
  padding: 10px;
  padding-left: 15px;
  border-radius: 80px;
  background-color: #cbd5e1;
  height: 80px;
  width: 80px;
  margin-right: 20px;

  @media screen and (max-width: 576px) {
    font-size: 35px;
    height: 60px;
    width: 60px;
    padding: 5px;
  }
`

export const SavedHeader = styled.h1`
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#000000')};
  font-size: 40px;

  @media screen and (max-width: 576px) {
    font-size: 25px;
  }
`

export const ULContainer = styled.ul`
  padding: 0px;
  margin: 0px;
`

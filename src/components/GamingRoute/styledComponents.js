import styled from 'styled-components'

export const SideMainContainer = styled.div`
  display: flex;
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

  @media screen and (max-width: 768px) {
    margin-left: 60px;
  }

  @media screen and (max-width: 576px) {
    margin-left: 0;
  }
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

  @media screen and (max-width: 768px) {
    margin-left: 60px;
  }

  @media screen and (max-width: 576px) {
    margin-left: 0;
  }
`

export const FailureImage = styled.img`
  width: 500px;
  margin-bottom: 10px;

  @media screen and (max-width: 768px) {
    width: 300px;
  }

  @media screen and (max-width: 576px) {
    width: 250px;
  }
`

export const FailureHeader = styled.h1`
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#000000')};
  font-size: 30px;

  @media screen and (max-width: 576px) {
    font-size: 22px;
  }
`

export const FailureDesc = styled.p`
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#64748b')};
  font-size: 20px;

  @media screen and (max-width: 576px) {
    font-size: 16px;
    text-align: center;
    padding: 0 10px;
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
  font-size: 16px;
`

export const GamingContainer = styled.div`
  width: 100%;
  margin-left: 20%;
  margin-top: 80px;
  background-color: ${props => (props.isDarkTheme ? '#0f0f0f' : '#f9f9f9')};

  @media screen and (max-width: 768px) {
    margin-left: 60px;
  }

  @media screen and (max-width: 576px) {
    margin-left: 0;
  }
`

export const HeaderContainer = styled.div`
  background-color: ${props => (props.isDarkTheme ? '#181818' : '#ebebeb')};
  display: flex;
  align-items: center;
  padding: 10px 20px;

  @media screen and (max-width: 576px) {
    padding: 10px;
  }
`

export const Icon = styled.div`
  font-size: 50px;
  color: #ff0b37;
  padding: 10px 15px;
  border-radius: 80px;
  background-color: #cbd5e1;
  height: 80px;
  width: 80px;
  margin-right: 20px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 576px) {
    height: 60px;
    width: 60px;
    font-size: 35px;
    margin-right: 10px;
  }
`

export const GamingHeader = styled.h1`
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#000000')};
  font-size: 40px;

  @media screen and (max-width: 576px) {
    font-size: 24px;
  }
`

export const GamingVideosContainer = styled.ul`
  padding: 40px;
  display: flex;
  flex-wrap: wrap;

  @media screen and (max-width: 768px) {
    padding: 20px;
  }

  @media screen and (max-width: 576px) {
    padding: 10px;
    justify-content: center;
  }
`

export const ULContainer = styled.ul`
  padding: 0px;
  margin: 0px;
`

import styled from 'styled-components'

export const NotFoundContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px;
  background-color: ${props => (props.isDarkTheme ? '#0f0f0f' : '#ffffff')};

  @media screen and (max-width: 576px) {
    padding: 20px;
  }
`

export const NotFoundImage = styled.img`
  width: 500px;
  margin-bottom: 10px;

  @media screen and (max-width: 768px) {
    width: 300px;
  }

  @media screen and (max-width: 480px) {
    width: 220px;
  }
`

export const NotFoundHeader = styled.h1`
  font-size: 30px;
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#000000')};
  text-align: center;

  @media screen and (max-width: 576px) {
    font-size: 22px;
  }
`

export const NotFoundDesc = styled.p`
  font-size: 20px;
  color: ${props => (props.isDarkTheme ? '#d1d5db' : '#212121')};
  text-align: center;

  @media screen and (max-width: 576px) {
    font-size: 16px;
  }
`

import styled from 'styled-components'

export const LoginContainer = styled.div`
  background-color: ${props => (props.isDarkTheme ? '#212121' : '#ffffff')};
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const FormContainer = styled.form`
  background-color: ${props => (props.isDarkTheme ? '#000000' : '#ffffff')};
  box-shadow: 0px 4px 16px 0px
    ${props => (props.isDarkTheme ? '#000000' : '#bfbfbf')};
  width: 30vw;
  border-radius: 10px;
  padding: 40px;
  display: flex;
  flex-direction: column;
`

export const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
`

export const LogoImage = styled.img`
  width: 200px;
  margin: 10px;
`

export const LabelInputContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const Label = styled.label`
  color: #94a3b8;
  font-size: 10px;
  font-weight: bold;
  margin-bottom: 8px;
`

export const Input = styled.input`
  background-color: transparent;
  border: 2px solid ${props => (props.isDarkTheme ? '#e2e8f0' : '#475569')};
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#000000')};
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 20px;
  outline: none;
`

export const InputC = styled.input`
  height: 15px;
  width: 15px;
  margin-right: 10px;
`

export const LabelC = styled.label`
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#000000')};
  font-size: 18px;
`

export const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`

export const LoginButton = styled.button`
  background-color: #3b82f6;
  border-radius: 10px;
  color: #ffffff;
  padding: 10px;
  margin: 10px;
  cursor: pointer;
  outline: none;
  border-width: 0px;
`
export const ErrorMessage = styled.p`
  color: #ff0000;
  font-size: 10px;
`

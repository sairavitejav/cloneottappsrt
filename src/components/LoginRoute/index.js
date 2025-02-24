import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'
import SavedVideosContext from '../../context/SavedVideosContext'
import {
  LoginContainer,
  FormContainer,
  LogoContainer,
  LogoImage,
  LabelInputContainer,
  Label,
  Input,
  InputC,
  LabelC,
  CheckboxContainer,
  LoginButton,
  ErrorMessage,
} from './styledComponents'

class LoginRoute extends Component {
  state = {username: '', password: '', errorMessage: '', showPassword: false}

  readUsername = event => {
    this.setState({username: event.target.value})
  }

  readPassword = event => {
    this.setState({password: event.target.value})
  }

  onSubmitSuccess = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {
      expires: 30,
    })
    history.replace('/')
  }

  onSubmitFailure = errorMsg => {
    this.setState({errorMessage: errorMsg})
  }

  onFormSubmit = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const apiUrl = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(apiUrl, options)
    const data = await response.json()
    if (response.ok === true) {
      return this.onSubmitSuccess(data.jwt_token)
    }
    return this.onSubmitFailure(data.error_msg)
  }

  showHidePassword = () => {
    this.setState(prevState => ({showPassword: !prevState.showPassword}))
  }

  render() {
    const {username, password, errorMessage, showPassword} = this.state
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <SavedVideosContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          const logoUrl = isDarkTheme
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
          return (
            <LoginContainer isDarkTheme={isDarkTheme}>
              <FormContainer
                isDarkTheme={isDarkTheme}
                onSubmit={this.onFormSubmit}
              >
                <LogoContainer>
                  <LogoImage src={logoUrl} alt="website logo" />
                </LogoContainer>
                <LabelInputContainer>
                  <Label htmlFor="username">USERNAME</Label>
                  <Input
                    isDarkTheme={isDarkTheme}
                    onChange={this.readUsername}
                    value={username}
                    type="text"
                    placeholder="Username"
                    id="username"
                  />
                </LabelInputContainer>
                <LabelInputContainer>
                  <Label htmlFor="password">PASSWORD</Label>
                  <Input
                    isDarkTheme={isDarkTheme}
                    onChange={this.readPassword}
                    value={password}
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Password"
                    id="password"
                  />
                </LabelInputContainer>
                <CheckboxContainer>
                  <InputC
                    type="checkbox"
                    id="checkbox"
                    onChange={this.showHidePassword}
                  />
                  <LabelC isDarkTheme={isDarkTheme} htmlFor="checkbox">
                    Show Password
                  </LabelC>
                </CheckboxContainer>
                <LoginButton type="submits">Login</LoginButton>
                {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
              </FormContainer>
            </LoginContainer>
          )
        }}
      </SavedVideosContext.Consumer>
    )
  }
}
export default LoginRoute

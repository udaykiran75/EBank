import './index.css'
import {Component} from 'react'
import Cookies from 'js-cookie'

class EbankLogin extends Component {
  state = {userId: '', pinNumber: '', isErrorMsg: false, errorMsg: ''}

  onChangeUserId = event => {
    this.setState({userId: event.target.value})
  }

  onChangeUserPin = event => {
    this.setState({pinNumber: event.target.value})
  }

  onSubmitForm = async event => {
    event.preventDefault()
    const {userId, pinNumber} = this.state
    const userDetails = {user_id: userId, pin: pinNumber}
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const loginUrl = 'https://apis.ccbp.in/ebank/login'
    const response = await fetch(loginUrl, options)
    const data = await response.json()
    if (response.ok) {
      Cookies.set('jwt_token', data.jwt_token, {expires: 30})
      const {history} = this.props
      history.replace('/')
    } else {
      this.setState({isErrorMsg: true, errorMsg: data.error_msg})
    }
  }

  render() {
    const {userId, pinNumber, isErrorMsg, errorMsg} = this.state
    return (
      <div className="app-bgContainer">
        <div className="loginPage-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ebank-login-img.png"
            alt="website login"
            className="loginImage"
          />
          <form className="login-cardContainer" onSubmit={this.onSubmitForm}>
            <h1 className="login-heading">Welcome Back!</h1>
            <div className="userinput-container">
              <label htmlFor="userId" className="input-label">
                User ID
              </label>
              <input
                type="text"
                placeholder="Enter User ID"
                id="userId"
                className="input-box"
                value={userId}
                onChange={this.onChangeUserId}
              />
            </div>
            <div className="userinput-container">
              <label htmlFor="password" className="input-label">
                PIN
              </label>
              <input
                type="password"
                placeholder="Enter PIN"
                id="password"
                className="input-box"
                value={pinNumber}
                onChange={this.onChangeUserPin}
              />
            </div>
            <button type="submit" className="login-button">
              Login
            </button>
            {isErrorMsg && <p className="errorMsg">{errorMsg}</p>}
          </form>
        </div>
      </div>
    )
  }
}
export default EbankLogin

import './index.css'
import Cookies from 'js-cookie'
import {withRouter} from 'react-router-dom'

const Header = props => {
  const onClickLogoutButton = () => {
    Cookies.remove('jwt_token')
    const {history} = props
    history.replace('/ebank/login')
  }

  return (
    <div className="logo-logout-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/ebank-logo-img.png"
        className="website-logo"
        alt="website logo"
      />
      <button
        className="logout-button"
        type="button"
        onClick={onClickLogoutButton}
      >
        Logout
      </button>
    </div>
  )
}
export default withRouter(Header)

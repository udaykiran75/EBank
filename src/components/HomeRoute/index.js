import './index.css'
import Header from '../Header'

const HomeRoute = () => (
  <div className="home-main-container">
    <Header />
    <div className="digitalCard-container">
      <h1 className="heading">Your Flexibility, Our Excellence</h1>
      <img
        src="https://assets.ccbp.in/frontend/react-js/ebank-digital-card-img.png"
        className="digitalCard"
        alt="digital card"
      />
    </div>
  </div>
)
export default HomeRoute

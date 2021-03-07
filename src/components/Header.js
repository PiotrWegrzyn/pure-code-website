import PropTypes from 'prop-types'
import React from 'react'

const Header = props => (
  <header id="header" style={props.timeout ? { display: 'none' } : {}}>
    <div className="logo">
      <img src="icons/lotus.svg" alt="Pure Code logo" height="69%" style={{margin: '0.8em', filter: "invert(100%)"}}/>
    </div>
    <div className="content">
      <div className="inner">
        <h1>Pure Code</h1>
        <p>
          100% reusable code.
        </p>
      </div>
    </div>
    <nav>
      <ul>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('about')
            }}
          >
            About
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('web_scraping')
            }}
          >
            Web Scraping
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('web_apps')
            }}
          >
            Web Apps
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('system_integrations')
            }}
          >
            Integrations
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('contact')
            }}
          >
            Contact
          </button>
        </li>
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
}

export default Header

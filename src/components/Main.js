import PropTypes from 'prop-types'
import React from 'react'
import pic01 from '../images/pic01.jpg'
import pic02 from '../images/pic02.jpg'
import pic03 from '../images/pic03.jpg'

class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >

        <article
          id="about"
          className={`${this.props.article === 'about' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">About</h2>
          <span className="image main">
            <img src={pic03} alt="" />
          </span>
          <p>
            We are a group of programmers who live by the Al Sweigart's motto "Automate the boring stuff".
          </p>
          <p>
            The amount of human potential waisted on tedious and boring processes is what keeps us awake at night.
            We know that automation frees people from the burden of performing repetitive tasks but also error rate
            while increasing efficiency and scalability.
            With this in mind our missions became to help as many companies as possible to unlock their potential and
            help them take their business to another level with our solutions.
          </p>
          {close}
        </article>

        <article
          id="web_scraping"
          className={`${this.props.article === 'web_scraping' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Web Applications</h2>
          <span className="image main">
            <img src={pic03} alt="" />
          </span>
          <p>
            Many say information is the new gold and is this paradigm The Web would be the gold mine. This is why we
            build web scrapers.
          </p>
          <p>
            We are helping companies collect publicly available data from The Web by building python based web scrapers
            that provide them with the information they need. Whether you're working with AI or make your business on
            collecting scattered data we would be glad to provide you with our service.
          </p>
          {close}
        </article>

        <article
          id="web_apps"
          className={`${this.props.article === 'web_apps' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">About</h2>
          <span className="image main">
            <img src={pic03} alt="" />
          </span>
          <p>
            So far we had the opportunity to build web applications that aid the day to day tasks in financial
            institutions, hotels and even hospitals.
          </p>
          {close}
        </article>

        <article
          id="system_integrations"
          className={`${this.props.article === 'system_integrations' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">About</h2>
          <span className="image main">
            <img src={pic03} alt="" />
          </span>
          <p>
            We integrate systems.
          </p>
          {close}
        </article>

        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Contact</h2>
          <h3 className="fa-bold">Email:</h3>

          {/*<form method="post" action="#">*/}
          {/*  <div className="field half first">*/}
          {/*    <label htmlFor="name">Name</label>*/}
          {/*    <input type="text" name="name" id="name" />*/}
          {/*  </div>*/}
          {/*  <div className="field half">*/}
          {/*    <label htmlFor="email">Email</label>*/}
          {/*    <input type="text" name="email" id="email" />*/}
          {/*  </div>*/}
          {/*  <div className="field">*/}
          {/*    <label htmlFor="message">Message</label>*/}
          {/*    <textarea name="message" id="message" rows="4"></textarea>*/}
          {/*  </div>*/}
          {/*  <ul className="actions">*/}
          {/*    <li>*/}
          {/*      <input type="submit" value="Send Message" className="special" />*/}
          {/*    </li>*/}
          {/*    <li>*/}
          {/*      <input type="reset" value="Reset" />*/}
          {/*    </li>*/}
          {/*  </ul>*/}
          {/*</form>*/}
          <ul className="icons">
            <li>
              <a
                href="https://www.linkedin.com/company/pure-code"
                className="icon fa-linkedin"
              >
                <span className="label">LinkedIn</span>
              </a>
            </li>
            {/*<li>*/}
            {/*  <a href="https://codebushi.com" className="icon fa-facebook">*/}
            {/*    <span className="label">Facebook</span>*/}
            {/*  </a>*/}
            {/*</li>*/}
            {/*<li>*/}
            {/*  <a href="https://codebushi.com" className="icon fa-instagram">*/}
            {/*    <span className="label">Instagram</span>*/}
            {/*  </a>*/}
            {/*</li>*/}
            {/*<li>*/}
            {/*  <a*/}
            {/*    href="https://github.com/codebushi/gatsby-starter-dimension"*/}
            {/*    className="icon fa-github"*/}
            {/*  >*/}
            {/*    <span className="label">GitHub</span>*/}
            {/*  </a>*/}
            {/*</li>*/}
          </ul>
          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main

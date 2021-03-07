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
          <h4>
            Who are we?
          </h4>
          <p>
            We are a group of developers and tech enthusiasts who are ready to help you enrich your business with new tech solutions.
          </p>
          <h4>
            Our principals
          </h4>
          <h5>
            Simplicity
          </h5>
          <p>
            We know there is power in simplicity. That's why we try to keep the code clean and simple.
            Clean and <b>Pure code</b> means order. Order means control. Control means <b>reliability</b> and reliable
            solutions that is what we pride ourselves on.
          </p>
          <h5>
            Automation
          </h5>
          <p>
            We are a group of programmers who live by the Al Sweigart's motto "Automate the boring stuff".
          </p>
          <p>
            The amount of human potential waisted on tedious and boring processes is what keeps us awake at night.
            We know that automation frees people from the burden of performing repetitive tasks but also removes the
            human error factor while increasing efficiency and scalability.
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
          <h2 className="major">Web Scraping</h2>
          <span className="image main">
            <img src={pic03} alt="" />
          </span>
          <p>
            Many say information is the new gold and is this paradigm The Web would be the gold mine that's why we build
            web scrapers.
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
          <h2 className="major">Web applications</h2>
          <span className="image main">
            <img src={pic03} alt="" />
          </span>
          <p>
            Web applications are the bread and butter of any modern business and we take it upon ourselves to leverage
            the power of the newest technologies to create tailored solutions for our clients. We understand that in the
            modern world the application that we will create will often serve as the only hub between you and your
            customers that's why it's reliability and it's appeal to the users will be directly interpreted as the
            reliability of your business.
          </p>
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
          <h2 className="major">System Integration Consulting</h2>
          <span className="image main">
            <img src={pic03} alt="" />
          </span>
          <p>
            We offer consulting services in enterprise integration area. We can help you to clarify the business requirements, create the data model, define business data flows, costs and timeline estimations, project schedules and API strategy. We can minimise the danger of going into a wrong direction.
          </p>
          <p>
            When it comes to platforms, systems and/or applications integration services, we can do it all. Furthermore, our experts are skilled in using such proven integration platforms as MuleSoft to help companies become better connected entities. Finally our certified professionals are extremely skilled in API strategy and microservices consulting thus helping enterprises be more agile, responsive and able to make better decisions.
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
          <p>
            <b><span><i className="fa fa-envelope"></i></span> <span className="">Email:</span></b> <span>peter@pure-code.net</span>
          </p>
          <p>
            <b><span><i className="fa fa-phone f"></i></span> <span>Phone:</span></b> <span>+48 534 851 363</span>
          </p>

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

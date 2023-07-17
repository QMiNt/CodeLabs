import React from "react";
import { Link } from "react-router-dom";

import banner from "../images/title-img.png";
import heading from "../images/heading-line-dec.png";
import about from "../images/about-right-dec.png";
import quote from "../images/quote.png";

import Card from "../components/UI/Card";

const Home = () => {
  return (
    <div>
      <div
        className="main-banner wow fadeIn"
        id="top"
        data-wow-duration="1s"
        data-wow-delay="0.5s"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="row">
                <div className="col-lg-6 align-self-center">
                  <div
                    className="left-content show-up header-text wow fadeInLeft"
                    data-wow-duration="1s"
                    data-wow-delay="1s"
                  >
                    <div className="row">
                      <div className="col-lg-12">
                        <h2>CODELABS: Programming Simplified</h2>
                        <p style={{fontSize:"1rem"}}>
                          CODELABS is a web application that allows users to learn
                          about algorithms by visualizing them. Users can choose
                          from a variety of algorithms and customize their
                          parameters to see how they work. VLearn also allows
                          users to create their own algorithms and visualize
                          them.
                        </p>
                      </div>
                      <div className="col-lg-12">
                        <div className="white-button first-button scroll-to-section" style={{borderStyle:"solid", borderColor:"white", borderRadius:"20px"}}>
                          <Link to="/build">
                            Build <i className="fa fa-arrow-right"></i>
                          </Link>
                        </div>
                        <div className="white-button scroll-to-section" style={{borderStyle:"solid", borderColor:"white", borderRadius:"20px"}}>
                          <Link to="/visualize" className="gradient-button">
                            Visualize <i className="fa fa-arrow-right"></i>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div
                    className="right-image wow fadeInRight"
                    data-wow-duration="1s"
                    data-wow-delay="0.5s"
                  >
                    <img src={banner} alt="banner" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="services" className="services section">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <div
                className="section-heading  wow fadeInDown"
                data-wow-duration="1s"
                data-wow-delay="0.5s"
              >
                <h4>
                  Amazing <em>Services &amp; Features</em> for you
                </h4>
                <img src={heading} alt="heading" />
                <p style={{fontSize:"1.0rem", color:"#72286F"}}>
                  Our proposed solution is a website that helps students to
                  learn programming in a fun and interactive way that would
                  revolutionize the way of learning to code. We propose the
                  following features in our application:
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row" >
            <Card
            
              title="Build Algorithms"
              desc="Learning programming can be made effective by dragging and dropping the code components and thus generating the code."
              link="/build"
            />
            <Card
              title="Visualize"
              desc="The complex Data Structures and Algorithms can be animated and their working can be viewed for better understanding."
              link="/visualize"
            />
            <Card
              title="AI Explains Code"
              desc="Helping developers break through the enigma of code.  It helps you in learning programming concepts and improves your coding skills."
              link="/explain"
            />
            <Card
              title="Discussion Forums"
              desc="24x7 Active Discussion where researchers/developers can discuss algorithms and help solve each others doubts."
              link="/discuss"
            />
          </div>
        </div>
      </div>
      <div id="about" className="about-us section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 align-self-center">
              <div className="section-heading">
                <h4>Problem Statement &amp; its Solution's Impact</h4>
                <img src={about} alt="about" />
                <p style={{fontSize:"1.05rem", color:"#72286F"}}>
                  Programming has become the biggest trend among Indian
                  schoolchildren. There are various pathways that allow high
                  school students to demonstrate their programming abilities by
                  contributing to open-source projects. While these programs can
                  provide a great introduction to computer programming, they
                  also lack a number of important features that we think are
                  necessary to help & create the next generation of effective
                  independent computer programmers.
                </p>
              </div>
              <div className="row">
                <div className="col-lg-6">
                  <div className="box-item">
                    <p style={{fontSize:"23px", color:"black"}}>Teaching Aid</p>
                    <p style={{fontSize:"1.0rem", color:"#73BEF9"}}>
                      Can be used as a tool for teachers instead of them just
                      reading out stuff help students visualize algorithms
                    </p>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="box-item">
                    <p style={{fontSize:"23px", color:"black"}}>Promoting Community Content Creation</p>
                    <p style={{fontSize:"1.0rem", color:"#73BEF9"}}>
                      Educational content creator can promote the courses
                      through Advertisements and Curated quiz
                    </p>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="box-item">
                    <p style={{fontSize:"23px", color:"black"}}>Enhanced Learning</p>
                    <p style={{fontSize:"1.0rem", color:"#73BEF9"}}>
                      Students can use for better learning. Aspirants can use
                      for interview and contests participation
                    </p>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="box-item">
                    <p style={{fontSize:"23px", color:"black"}}>Igniting Research</p>
                    <p style={{fontSize:"1.0rem", color:"#73BEF9"}}>
                      Researchers can use our platform to get a better
                      understanding of algorithm and compare it with existing
                      algorithms
                    </p>
                  </div>
                </div>
                <div className="col-lg-12">
                  <p>
                    It's crucial to visualize and understand the syntax in order
                    to develop solid coding concepts, due to which our platform
                    focuses on the visualization of various data structure
                    algorithms along with providing various resources which
                    could help students. Thus helping to revolutionize the
                    coding experience for students.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="right-image">
                <img src={about} alt="about" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="clients" className="the-clients">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <div className="section-heading">
                <h4>
                  Tech <em>Stack</em> We Use
                </h4>
                <img src={heading} alt="" />
                <p>Tools and Items we used</p>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="naccs">
                <div className="grid">
                  <div className="row">
                    <div className="col-lg-7 align-self-center">
                      <div className="menu">
                        <div className="first-thumb active">
                          <div className="thumb">
                            <div className="row">
                              <div className="col-lg-4 col-sm-4 col-12">
                                <h4 style={{color:"black"}}>Frontend</h4>
                                <span className="date">Client</span>
                              </div>
                              <div className="col-lg-4 col-sm-4 d-none d-sm-block">
                                <span className="category">
                                  React.js, Bootstrap, Material UI
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div className="thumb">
                            <div className="row">
                              <div className="col-lg-4 col-sm-4 col-12">
                                <h4>Backend</h4>
                                <span className="date">Server</span>
                              </div>
                              <div className="col-lg-4 col-sm-4 d-none d-sm-block">
                                <span className="category">
                                  Nodejs Express js, REST Framework
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div className="thumb">
                            <div className="row">
                              <div className="col-lg-4 col-sm-4 col-12">
                                <h4>Machine Learning</h4>
                                <span className="date">Data Science & NLP</span>
                              </div>
                              <div className="col-lg-4 col-sm-4 d-none d-sm-block">
                                <span className="category">
                                  GPT, Pandas, Numpy
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div className="thumb">
                            <div className="row">
                              <div className="col-lg-4 col-sm-4 col-12">
                                <h4>Collaboration</h4>
                                <span className="date">Version Control</span>
                              </div>
                              <div className="col-lg-4 col-sm-4 d-none d-sm-block">
                                <span className="category">
                                  GitHub, Git, Python Anywhere
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-5">
                      <ul className="nacc">
                        <li className="active">
                          <div>
                            <div className="thumb">
                              <div className="row">
                                <div className="col-lg-12">
                                  <div className="client-content">
                                    <img src={quote} alt="quote" />
                                    <p>
                                      “Tell me and I forget. Teach me and I
                                      remember. Make me a visual part of it and
                                      I learn” <br />
                                      ~Benjamin Franklin
                                    </p>
                                  </div>
                                  <div className="down-content">
                                    <img
                                      src="assets/images/client-image.jpg"
                                      alt=""
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

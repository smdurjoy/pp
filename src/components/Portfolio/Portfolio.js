import React, { Component, Fragment } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import eLearning from '../../asset/image/eLearning.jpg'
import covid from '../../asset/image/covid.PNG'
import portfolio from '../../asset/image/portfolio.PNG'
import snakeGame from '../../asset/image/snakeGame.PNG'
import sms from '../../asset/image/sms.jpg'
import sgs from '../../asset/image/sgs.jpg'

export default class Portfolio extends Component {
    render() {
        return (
           <Fragment>
               <title>Portfolios</title>
               <Container>
               <h1 className="text-center title">portfolios</h1>
                   <Row className="portfolioRow">
                       <Col md={6} lg={6}>
                            <div id="cards">
                                <div class="card-horizon">
                                    <Row className="row center card-horizon-con">
                                        <Col md={4} lg={4} sm={4} className="p-0 m-0 wh-100 left">
                                            <img src={covid}/>
                                            <div class="postdata text-white">
                                                Corona Update Application
                                            </div>
                                        </Col>

                                        <Col md={8} lg={8} sm={8} className="right">
                                            <h5 class="card-title text-white">
                                                <a href="https://durjoycovid.netlify.app/" target="_blank"> Covid-19 World Wide Update</a>
                                            </h5> 
                                            <p class="card-text">
                                                ReactJS, Axios, JSON API
                                            </p>
                                        </Col>
                                    </Row>
                                </div>
                            </div>
                       </Col>

                       <Col md={6} lg={6}>
                            <div id="cards">
                                <div class="card-horizon">
                                    <Row className="row center card-horizon-con">
                                        <Col md={4} lg={4} sm={4} className="p-0 m-0 wh-100 left">
                                            <img src={portfolio}/>
                                            <div class="postdata text-white">
                                                DYNAMIC PORTFOLIO
                                            </div>
                                        </Col>

                                        <Col md={8} lg={8} sm={8} className="right">
                                            <h5 class="card-title text-white">
                                                <a href="https://sitedynamic.000webhostapp.com" target="_blank"> Dynamic Company Site with admin panel</a>
                                            </h5> 
                                            <p class="card-text">
                                                ReactJS, Lumen as RestAPI, MySQL
                                            </p>
                                        </Col>
                                    </Row>
                                </div>
                            </div>
                       </Col>
                   </Row>

                   <Row>
                       <Col md={6} lg={6}>
                            <div id="cards">
                                <div class="card-horizon">
                                    <Row className="row center card-horizon-con">
                                        <Col md={4} lg={4} sm={4} className="p-0 m-0 wh-100 left">
                                            <img src={eLearning}/>
                                            <div class="postdata text-white">
                                                Online Learning Application
                                            </div>
                                        </Col>

                                        <Col md={8} lg={8} sm={8} className="right">
                                            <h5 class="card-title text-white">
                                                <a href="https://github.com/smdurjoy/online-learning" target="_blank"> Online Learning Application</a>
                                            </h5> 
                                            <p class="card-text">
                                                PHP, Laravel, MySQL
                                            </p>
                                        </Col>
                                    </Row>
                                </div>
                            </div>
                       </Col>

                       <Col md={6} lg={6}>
                            <div id="cards">
                                <div class="card-horizon">
                                    <Row className="row center card-horizon-con">
                                        <Col md={4} lg={4} sm={4} className="p-0 m-0 wh-100 left">
                                            <img src={sms}/>
                                            <div class="postdata text-white">
                                                Student Management System
                                            </div>
                                        </Col>

                                        <Col md={8} lg={8} sm={8} className="right">
                                            <h5 class="card-title text-white">
                                                <a href="https://github.com/smdurjoy/Student-Management-System" target="_blank"> Simple Student Management System</a>
                                            </h5> 
                                            <p class="card-text">
                                                Raw PHP, MySQL
                                            </p>
                                        </Col>
                                    </Row>
                                </div>
                            </div>
                       </Col>
                   </Row>

                   <Row>
                        <Col md={6} lg={6}>
                            <div id="cards">
                                <div class="card-horizon">
                                    <Row className="row center card-horizon-con">
                                        <Col md={4} lg={4} sm={4} className="p-0 m-0 wh-100 left">
                                            <img src={snakeGame}/>
                                            <div class="postdata text-white">
                                                Snake Game
                                            </div>
                                        </Col>

                                        <Col md={8} lg={8} sm={8} className="right">
                                            <h5 class="card-title text-white">
                                                <a href="https://smdurjoy.github.io/snakeGame/" target="_blank"> Multilavel Snake Game</a>
                                            </h5> 
                                            <p class="card-text">
                                                JavaScript
                                            </p>
                                        </Col>
                                    </Row>
                                </div>
                            </div>
                       </Col>

                       <Col md={6} lg={6}>
                            <div id="cards">
                                <div class="card-horizon">
                                    <Row className="row center card-horizon-con">
                                        <Col md={4} lg={4} sm={4} className="p-0 m-0 wh-100 left">
                                            <img src={sgs}/>
                                            <div class="postdata text-white">
                                                Student Grading System
                                            </div>
                                        </Col>

                                        <Col md={8} lg={8} sm={8} className="right">
                                            <h5 class="card-title text-white">
                                                <a href="https://github.com/smdurjoy/Student-Grade-System-Javascript" target="_blank"> Student Grading System</a>
                                            </h5> 
                                            <p class="card-text">
                                                JavaScript
                                            </p>
                                        </Col>
                                    </Row>
                                </div>
                            </div>
                       </Col>
                   </Row>
                   <div className="marginDiv"></div>
               </Container>
           </Fragment>
        )
    }
}

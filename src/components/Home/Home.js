import React, { Component, Fragment } from 'react'
import { Container, Row, Col } from 'react-bootstrap'

export default class Home extends Component {
    render() {
        return (
            <Fragment>
                <title>Home</title>
                <Container className="homePage" fluid={true}>
                    <Row className="text-center">
                        <Col>
                            <h1 className="homeTitle">Hi! I'm Saqlain Mustaq <span>Durjoy</span></h1>
                            <p className="homeSubTitle">I’m a web developer. I spend my every day experimenting with HTML, CSS, and JavaScript; dabbling with Laravel and ReactJS. I’m curious, and I enjoy work that challenges me to learn something new and stretch in a different direction. I do my best to learn more and be a perfect full stack Software Developer.</p>
                            <div>
                                <ul class="social-network social-circle">
                                    <li><a href="https://github.com/smdurjoy" target="_blank" class="icoGithub" title="Github"><i class="fab fa-github"></i></a></li>
                                    <li><a href="https://www.facebook.com/smdurjoyy" target="_blank" class="icoFacebook" title="Facebook"><i class="fab fa-facebook-f"></i></a></li>
                                    <li><a href="https://twitter.com/smdurjoy96" target="_blank" class="icoTwitter" title="Twitter"><i class="fab fa-twitter"></i></a></li>
                                    <li><a href="https://www.hackerrank.com/smdurjoy?hr_r=1" target="_blank" class="icoHrank" title="HackerRank"><i class="fab fa-hackerrank"></i></a></li>
                                    <li><a href="https://www.linkedin.com/in/smdurjoy" target="_blank" class="icoLinkedin" title="Linkedin"><i class="fab fa-linkedin-in"></i></a></li>
                                    <li><a href="https://www.pinterest.com/smdurjoy96/" target="_blank" class="icoPinterest" title="Pinterest"><i class="fab fa-pinterest"></i></a></li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        )
    }
}

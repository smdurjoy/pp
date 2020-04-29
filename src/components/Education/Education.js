import React, { Component, Fragment } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import polytechnic from '../../asset/image/poly.jpg'
import rtsc from '../../asset/image/rtsc.jpg'

export default class Education extends Component {
    render() {
        return (
            <Fragment>
                <title>Education</title>
                <Container className="educationPage">
                    <h1 className="text-center title">Education</h1>
                    <Row className="eduRow frow">
                        <Col md={6} lg={6} sm={6} xs={12}>
                            <div class="img-container">
                                <img src={polytechnic} alt="image" className="clgImage"/>
                            </div>
                            <p class="time">September 2015 - July 2019</p>
                        </Col>

                        <Col md={6} lg={6} sm={6} xs={12} className="eduCol">
                            <h1 class="collegeName">Rangpur Polytechnic Institute, Rangpur</h1>
                            <h1 class="courseName">Diploma in Computer Engineering</h1>
                            <p class="cdes mt-4">
                                Passing year: 2019 <br/>
                                Result: 3.08 (out of 4)
                            </p>
                        </Col>
                    </Row>

                    <Row className="eduRow mb-5"> 
                        <Col md={6} lg={6} sm={6} xs={12}>
                            <div class="img-container">
                                <img src={rtsc} alt="image" className="clgImage"/>
                            </div>
                            <p class="time">January 2013 - February 2015</p>
                        </Col>

                        <Col md={6} lg={6} sm={6} xs={12} className="eduCol">
                            <h1 class="collegeName">Rangpur Technical School & College, Rangpur</h1>
                            <h1 class="courseName">Secondary School Certificate Examination (SSC)</h1>
                            <p class="cdes mt-4">
                                Dept: Computer & Information Technology<br/>
                                Passing year: 2015 <br/>
                                Result: 4.75 (out of 5)
                            </p>
                        </Col>
                    </Row>
                </Container>
        </Fragment>
        )
    }
}

import React, { Component, Fragment } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick'
import slider1 from '../../asset/image/aboutImg1.jpg'
import slider2 from '../../asset/image/aboutImg2.JPG'
import slider3 from '../../asset/image/aboutImg3.jpg'


export default class About extends Component {
    render() {
        const settings = {
            dots: true,
            fade: true,
            infinite: true,
            arrows: false,
            autoplay: true,
            speed: 500,
            slidesToShow: 1,
            slideToScroll: 1,
            className: "slides"
        }
        return (
            <Fragment>
                <title>About</title>
                <Container className="aboutPage">
                    <h1 className="text-center title">About Me</h1>
                    <Row>
                        <Col md={6} lg={6} sm={12} xs={12} className="aboutCol">
                            <Slider {...settings}>
                                <div>
                                    <img className="sliderImage" src={slider1} />
                                </div>
                                <div>
                                    <img className="sliderImage" src={slider2} />
                                </div>
                                <div>
                                    <img className="sliderImage" src={slider3} />
                                </div>
                            </Slider>
                        </Col>
                        <Col md={6} lg={6} sm={12} xs={12} className="aboutCol">
                            <h2 class="aboutTitle">Hello I am DURJOY</h2>
                            <p class="aboutDetails mt-3">I am a full stack web developer. I still learning to be a perfect developer. I want to provide clean code and pixel perfect design. I also want to learn the backend perfectly.</p>

                            <table class="aboutDetails">
                                <tbody>
                                    <tr>
                                        <td width="40%" align="left"><b className="heading">Full Name</b></td>
                                        <td align="left">: Saqlain Mustaq Durjoy</td>
                                    </tr>
                                    <tr>
                                        <td width="40%" align="left"><b className="heading">Age</b></td>
                                        <td align="left">: 22 Years</td>
                                    </tr>
                                    <tr>
                                        <td width="40%" align="left"> <b className="heading">Nationality</b> </td>
                                        <td align="left">: Bangladeshi</td>
                                    </tr>
                                    <tr>
                                        <td width="40%" align="left"> <b className="heading">Languages</b> </td>
                                        <td align="left">: English, Bengali</td>
                                    </tr>
                                    <tr>
                                        <td width="40%" align="left"> <b className="heading">Address</b> </td>
                                        <td align="left">: East Guptapara, Rangpur</td>
                                    </tr>
                                    <tr>
                                        <td width="40%" align="left"> <b className="heading">Blood Group</b> </td>
                                        <td align="left">: O+</td>
                                    </tr>
                                </tbody>
                            </table>    

                            <a href="#" target="_blank" className="btn btnSubmit">download cv</a>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        )
    }
}

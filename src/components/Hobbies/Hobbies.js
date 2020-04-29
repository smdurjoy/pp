import React, { Component, Fragment } from 'react'
import { Container, Row, Col } from 'react-bootstrap'

export default class Hobbies extends Component {
    render() {
        return (
            <Fragment>
                <title>Hobbies</title>
                <Container>
                    <h1 className="text-center title">Hobbies-Dreams-Interests</h1>
                    <Row className="hobbyRow">
                        <Col className="hobbyCol" md={6} lg={6} sm={12} xs={12}>
                            <h4>Programming</h4>
                            <p className="hobbyDes">When I started learning web development I realized programming is a really cool thing to do and how much I could do with it. Problem solving is a challenge to yourself that can be enjoyed a lot. That’s why I want to be a good programmer.</p>

                            <h4 className="mt-4">Ethical Hacking</h4>
                            <p className="hobbyDes">Actually, it’s a very old dream of mine. This has been my dream since I learned to understand hacking. But unfortunately, I didn’t get enough resources and time to learn about it. But yeah it’s a hobby I really want to learn it and use it in the right way.</p>

                            <h4 className="mt-4">Artificial Intelligence</h4>
                            <p className="hobbyDes">After watching Iron man movie, I was so much excited about artificial intelligence. But it’s a very advanced things to learn. I have to know so many things before that.<br/> I want to build a very intelligent system like JARVIS (Tony Stark's ingenious creation) not same but relatable. It's one of the biggest dream of my life.  </p>
                        </Col>

                        <Col className="hobbyCol" md={6} lg={6} sm={12} xs={12}>
                            <h4>Travelling</h4>
                            <p className="hobbyDes">It's another big dream or hobby whatever you call of mine. Unknown places, new environments, different peoples I just like these a lot. I want to enjoy the beautiful nature of the world.  </p>

                            <h4 className="mt-4">Watching Movie</h4>
                            <p className="hobbyDes">One of my favorite activities in my spare time is watching movies. I like English movies a lot.  </p>

                            <h4 className="mt-4">Playing Cricket</h4>
                            <p className="hobbyDes">I grow up playing cricket since childhood. A different kind of love for cricket has existed before, now and will continue to exist in the future.  </p>
                        </Col>
                    </Row>
                    <div className="marginDiv"></div>
                </Container>
            </Fragment>
        )
    }
}

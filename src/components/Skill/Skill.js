import React, { Component, Fragment } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { BarChart, Bar, ResponsiveContainer, XAxis, Tooltip, YAxis } from 'recharts';

export default class Skill extends Component {
    constructor() {
        super();

        this.state = {
            data:[
                {Language: 'CSS', Skill: 85},
                {Language: 'JS', Skill: 60},
                {Language: 'jQuery', Skill: 50},
                {Language: 'PHP', Skill: 55},
                {Language: 'Laravel', Skill: 60},
                {Language: 'ReactJS', Skill: 55},
                {Language: 'MySQL', Skill: 60},
                {Language: 'Html', Skill: 90}
            ]
        }
    }
    render() {
        var chartColor = "rgb(0, 65, 150)";
        return (
            <Fragment>
            <title>Skill</title>
            <Container className="skillPage">
                <h1 className="text-center title">Skill</h1>
                <Row className="text-center skillRow">
                    <Col md={12} lg={12} sm={12} xs={12} style={{width:'100%', height:'300px'}} className="skillCol">
                        <h6 className="chartTitle">Showing data in percentage(%)</h6>
                        <ResponsiveContainer>
                            <BarChart width={100} height={300} data={this.state.data} className="chart">
                                <XAxis dataKey="Language" className="xAxis"/>
                                <YAxis />
                                <Tooltip />
                                <Bar dataKey="Skill" fill={chartColor}>
                                </Bar>
                            </BarChart>
                        </ResponsiveContainer>   
                        <h6 className="smtitle">Please click bars to view details</h6>
                    </Col>

                    <Col md={12} lg={12} sm={12} xs={12}>
                        <h3 className="techTitle">I have basic knowledge of these technologies:</h3>
                        <p>C</p> <p>C++</p> <p>Python</p> <p>Java</p>    
                        <div className="marginDiv"></div>
                    </Col>
                </Row>
            </Container>
        </Fragment>
        )
    }
}

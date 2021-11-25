import React from 'react'
import { Col, Row } from 'react-bootstrap';
import Course from '../Components/Course'

const HomeScreen = () => {
    return (
        <>
            <h1>Courses List</h1>
            <Row>
                <Col sm={12} md = {6} lg ={4} sl ={3}>
                    <Course course='Course 1'/>
                </Col>
            </Row>
        </>
    )
}

export default HomeScreen

import React from "react";
import './SearchPanel.css'
import {Col, Container, Form, Row} from "react-bootstrap";

import Button from "../Button";

const SearchPanel = () => {
    return (
        <div className="search-panel">
            <Container>
                <Row>
                    <Col>
                        <div className="title-container">
                            <h1>Быстрый поиск детали</h1>
                        </div>
                    </Col>
                </Row>

                <div className="form-container">
                    <Form>
                        <Form.Group as={Row} controlId="formHorizontalEmail">
                            <Col sm={12} md={true} lg={true}>
                                <Form.Label>Марка авто</Form.Label>
                                <Form.Control as="select">
                                    <option>—</option>
                                </Form.Control>
                            </Col>
                            <Col sm={12} md={true} lg={true}>
                                <Form.Label>Модель</Form.Label>
                                <Form.Control as="select">
                                    <option>—</option>
                                </Form.Control>
                            </Col>
                            <Col sm={12} md={true} lg={true}>
                                <Form.Label>Год выпуска</Form.Label>
                                <Form.Control as="select">
                                    <option>—</option>
                                </Form.Control>
                            </Col>
                            <Col sm={12} md={true} lg={true}>
                                <Form.Label>Запчасть</Form.Label>
                                <Form.Control as="select">
                                    <option>—</option>
                                </Form.Control>
                            </Col>
                            <Col sm={12} md={true} lg={true}>
                                <Form.Label style={{'visibility': 'hidden'}}>_</Form.Label>
                                <Button label="Найти"/>
                            </Col>
                        </Form.Group>
                    </Form>
                </div>

            </Container>
        </div>
    )
};

export default SearchPanel
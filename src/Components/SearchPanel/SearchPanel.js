import React from "react";
import './SearchPanel.css'
import {Col, Container, Form, Row} from "react-bootstrap";

import Button from "../Button";

const SearchPanel = (props) => {


    const {title = 'title', searchPanelFormItems = []} = props;

    const searchPanelFormElements = searchPanelFormItems.map(it => (
        <Col key={`col-${it.id}`}
             sm={12} md={true} lg={true}>
            <Form.Label
                key={`label-${it.id}`}
                htmlFor={it.id}
                className="cursor-pointer"
            >{it.label}</Form.Label>
            <Form.Control key={`select-${it.id}`}
                          id={it.id}
                          as="select" >
                {
                    it.options.map(option => (
                        <option
                            key={`option-${it.id}-${option.id}`}
                            value={option.value}
                        >{option.label}</option>
                    ))
                }
            </Form.Control>
        </Col>
    ));

    return (
        <div className="search-panel" id="search-panel">
            <Container>
                <Row>
                    <Col>
                        <div className="title-container">
                            <h1>{title}</h1>
                        </div>
                    </Col>
                </Row>

                <div className="form-container">
                    <Form>
                        <Form.Group as={Row}>
                            {
                                searchPanelFormElements
                            }
                            <Col sm={12} md={true} lg={true}>
                                <Form.Label style={{'visibility': 'hidden'}}>_</Form.Label>
                                <Button
                                    label="Найти"
                                />
                            </Col>
                        </Form.Group>
                    </Form>
                </div>

            </Container>
        </div>
    )
};

export default SearchPanel
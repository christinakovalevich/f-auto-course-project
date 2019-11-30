import React from "react";
import './SearchPanel.css'
import {Col, Container, Form, Row} from "react-bootstrap";

import Button from "../Button";

const SearchPanel = () => {

    const searchFormItems = [
        {
            id: 'brand', label: 'Марка авто', options: [
                {id: 1, label: '', value: ''},
                {id: 2, label: '', value: ''},
                {id: 3, label: '', value: ''},
            ]
        },
        {
            id: 'model', label: 'Модель', options: [
                {id: 1, label: '', value: ''},
                {id: 2, label: '', value: ''},
                {id: 3, label: '', value: ''},
            ]
        },
        {
            id: 'year', label: 'Год выпуска', options: [
                {id: 1, label: '', value: ''},
                {id: 2, label: '', value: ''},
                {id: 3, label: '', value: ''},
            ]
        },
        {
            id: 'detail', label: 'Запчасть', options: [
                {id: 1, label: '', value: ''},
                {id: 2, label: '', value: ''},
                {id: 3, label: '', value: ''},
            ]
        },
    ];

    const searchFormCols = searchFormItems.map(it => (
        <Col key={'col-' + it.id}
             sm={12} md={true} lg={true}>
            <Form.Label
                key={'label-' + it.id}
                htmlFor={it.id}
                className="cursor-pointer"
            >{it.label}</Form.Label>
            <Form.Control key={'select-' + it.id}
                          id={it.id}
                          as="select" >
                {
                    it.options.map(option => (
                        <option
                            key={'option-' + it.id + '-' + option.id}
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
                            <h1>Быстрый поиск детали</h1>
                        </div>
                    </Col>
                </Row>

                <div className="form-container">
                    <Form>
                        <Form.Group as={Row}>
                            {
                                searchFormCols
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
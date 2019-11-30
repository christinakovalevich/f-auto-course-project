import React from "react";
import {Col, Container, Nav, Navbar, Row} from "react-bootstrap";

import Button from "../Button";

import './Header.css'

const Header = (props) => {
    const {app} = props;
    return (
        <header>

            <Container>
                <Navbar collapseOnSelect expand="lg" variant="dark">
                    <Navbar.Brand href="#home">{app.name}</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                    <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                        <Nav justify={true}>
                            <Nav.Link href="#about-us">О Нас</Nav.Link>
                            <Nav.Link href="/catalog">Каталог</Nav.Link>
                            <Nav.Link href="#customers-reviews">Отзывы</Nav.Link>
                            <Nav.Link href="#contacts">Контакты</Nav.Link>
                            <Nav.Link href="/signIn">Войти</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Container>

            <div className="content">
                <Container>
                        <Row>
                            <Col>
                                <div className="title-container">
                                <span className="title">Найти автозапчасти — легко!</span>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <div className="text-container">
                                    <span className="text">Автозапчасти только от проверенных продавцов.</span>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={12} md={4} lg={3}>
                                <div className="button-container">
                                    <Button label="Найти"/>
                                </div>
                            </Col>
                        </Row>
                </Container>
            </div>

        </header>

    )
};

export default Header
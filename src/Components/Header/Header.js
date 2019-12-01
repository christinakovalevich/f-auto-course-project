import React from "react";
import './Header.css'

import {Col, Container, Nav, Navbar, Row} from "react-bootstrap";

import Button from "../Button";


const Header = (props) => {
    const {app, navLinkItems, logo = app.name.en, title='title', text='text'} = props;

    const navLinkElements = navLinkItems.map(it => (
        <Nav.Link key={'nav-link-item-' + it.id} href={it.href}>{it.label}</Nav.Link>
    ));

    return (
        <header>
            <Container>
                <Navbar collapseOnSelect expand="lg" variant="dark">
                    <Navbar.Brand href="#home">{logo}</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                    <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                        <Nav justify={true}>
                            {navLinkElements}
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Container>

            <div className="content">
                <Container>
                    <Row>
                        <Col>
                            <div className="title-container">
                                <span className="title">{title}</span>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <div className="text-container">
                                <span className="text">{text}</span>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={12} md={4} lg={3}>
                            <div className="button-container">
                                <Button
                                    href="#search-panel"
                                    label="Найти"/>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </header>

    )
};

export default Header
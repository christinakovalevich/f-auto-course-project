import React from "react";
import './DiscountPanel.css'
import {Col, Container, Row} from "react-bootstrap";

const DiscountPanel = (props) => {

    const {title = 'title', img, text} = props;

    const decoratedText = decorateText(text);

    return (
        <div className="discount-panel panel panel-white">
            <Container>
                <Row>
                    <Col sm={12} md={12} lg={12}>
                        <div className="title-container">
                            <h1>{title}</h1>
                        </div>
                    </Col>
                    <Col sm={12} md={true} lg={true}>
                        {decoratedText}
                        <div className="text-secondary">
                            *Акция действует при условии доставки товара в пределах Границы Доставки.
                        </div>
                    </Col>
                    <Col sm={false} md={1} lg={1}>
                    </Col>
                    <Col sm={false} md={true} lg={true}>
                        <div className="img-container">
                            <img src={img} alt=""/>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
};

const decorateText = (text = '') => {
    const simpleWords = text.split(' ');

    const decoratedText = simpleWords.map((word, i) => {
        if (word.toLocaleLowerCase() === 'бесплатно') {
            return (
                <span key={i} className="font-weight-medium text-color-blue">{word}</span>
            )
        } else if (word.toLocaleLowerCase() === 'доставка' || !isNaN(word)) {
            return (
                <span key={i} className="font-weight-medium text-color-black">{word} </span>
            )
        } else {
            return word + ' '
        }
    });

    return (
        <span className="decorated-text">
            <span>{decoratedText}.</span>
        </span>
    )
};

export default DiscountPanel
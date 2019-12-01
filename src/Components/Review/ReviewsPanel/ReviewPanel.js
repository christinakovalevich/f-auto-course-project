import React from "react";
import './ReviewPanel.css'
import {Carousel, Col, Container, Row} from "react-bootstrap";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronLeft, faChevronRight} from "@fortawesome/free-solid-svg-icons";

import ReviewItem from "../ReviewItem";


const ReviewPanel = (props) => {

    const {usersReviews} = props;

    const carouselItems = usersReviews.map(it => (
        <Carousel.Item key={`carouselItem-${it.id}`}>
            <ReviewItem
                key={`review-${it.id}`}
                user={it.user}
                review={it.review}
            />
        </Carousel.Item>
    ));

    const nextIcon = (
        <span className="text-dark">
            <FontAwesomeIcon icon={faChevronRight}/>
        </span>);

    const prevIcon = (
        <span className="text-dark">
            <FontAwesomeIcon icon={faChevronLeft}/>
        </span>);

    return (
        <div className="review-panel">
            <Container>
                <Row>
                    <Col>
                        <div className="title-container">
                            <h1>Отзывы наших клиентов</h1>
                        </div>
                    </Col>
                </Row>
                <Row className="justify-content-center">
                    <Col sm={12} md={true} lg={true}>
                        <Carousel
                            indicators={false}
                            nextIcon={nextIcon}
                            prevIcon={prevIcon}
                        >
                            {carouselItems}
                        </Carousel>

                    </Col>
                </Row>

            </Container>
        </div>
    )
};

export default ReviewPanel
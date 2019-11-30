import React from "react";
import './ReviewPanel.css'
import {Carousel, Col, Container, Row} from "react-bootstrap";

const ReviewPanel = (props) => {

    const {usersReviews} = props;

    const carouselItems = usersReviews.map(it => (
        <Carousel.Item key={"carouselItem-" + it.id}>
            <UserReview
                key={'review-' + it.id}
                user={it.user}
                review={it.review}
            />
        </Carousel.Item>
    ));

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
                <Row className="justify-content-lg-center">
                <Col sm={12} md={8} lg={8}>

                    <Carousel>
                        { carouselItems }
                    </Carousel>

                </Col>
            </Row>

            </Container>
        </div>
    )
};

export default ReviewPanel

const UserReview = (props) => {
    const {user, review} = props;
    return (
        <div className="review">
            <div className="user-info">
                <div className="avatar-container">
                    <img src={user.avatar} alt=""/>
                </div>
                <div className="name">
                    {user.name}
                </div>
            </div>
            <div className="review-body">
                <div className="text">
                    {review.text}
                </div>
                <div className="review-date">
                    {review.date}
                </div>
            </div>
        </div>
    )
};
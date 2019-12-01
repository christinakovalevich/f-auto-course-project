import React from "react";
import './ReviewItem.css'

import {Col, Container, Row} from "react-bootstrap";

const ReviewItem = (props) => {
    const {user, review} = props;
    return (
        <div className="review-item">
            <div className="user-info">
                <div className="avatar-container">
                    <img src={user.avatar} alt=""/>
                </div>
                <div className="name">
                    {user.name}
                </div>
            </div>
            <div className="review-body">
                <Container>
                    <Row className="justify-content-center">
                        <Col sm={12} md={8} lg={6}>
                            <div className="text">
                                {review.text}
                            </div>
                        </Col>
                    </Row>
                </Container>
                <div className="review-date">
                    {review.date}
                </div>
            </div>
        </div>
    )
};

export default ReviewItem
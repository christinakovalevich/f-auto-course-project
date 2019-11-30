import React from "react";
import './ReviewPanel.css'
import {Col, Container, Row} from "react-bootstrap";
import userAvatar1 from './assets/user-avatar-1.png'

const users = [{
    id:0, name: 'Руслан', avatar: userAvatar1
}];

const ReviewPanel = () => {

    const userReviews = [
        {
            user: users.pop(),
            review: {
                text: '«В силу специфики моей работы знаю Компанию Ф-АВТО \n' +
                    'уже очень давно. С самого первого момента отметил для себя профессиональный подход руководства компании к формированию команды и выстраиванию бизнес-процессов. Рекомендую!»',
                date: '03.11.2019'
            }
        }
    ];

    const userReviewsElements = userReviews.map(it => (
        <UserReview
            user={it.user}
            review={it.review}
        />
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
                <Col sm={12} md={8} lg={6}>
                    {userReviewsElements}
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
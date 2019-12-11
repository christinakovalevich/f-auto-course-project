import React from "react";
import './JobOfferItem.css'
import {Card} from "react-bootstrap";

const JobOfferItem = (props) => {
    const {id, title, salary, functions = []} = props;
    const href = `jobOffer/${id}`;

    const functionsList = functions.map(it => (
        <span
            key={`function-${id}-${it}`}
            className="d-block">
            {`- ${it}`}
        </span>
    ));

    return (
        <div className="job-offer-item shadow-on-hover">
            <Card>
                <Card.Body>
                    <div className="card-title-head">
                        <Card.Title>{title}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">{salary}</Card.Subtitle>
                    </div>
                    <div className="functions-container">
                        <Card.Text>
                            <span className="title">
                                Функции:
                            </span>
                            {functionsList}
                        </Card.Text>
                        <div className="text-right">
                            <Card.Link href={href}>Подробнее</Card.Link>
                        </div>
                    </div>
                </Card.Body>
            </Card>
        </div>
    )
};

export default JobOfferItem
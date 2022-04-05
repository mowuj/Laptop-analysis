import React from 'react';
import { CardGroup, Col, Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card'
import './SingleReview.css'
const SingleReview = (props) => {
    const { review } = props
    const { name, rating,cutomerReview,img } = review;
    
    return (
      <Row xs={1} md={4} className="g-4">
  {Array.from({ length: 1 }).map((_, idx) => (
    <Col>
      <Card>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{ name}</Card.Title>
          <Card.Text>
            {cutomerReview}
          </Card.Text>
          <Card.Text>
            {rating}
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  ))}
</Row>
    )
};

export default SingleReview;
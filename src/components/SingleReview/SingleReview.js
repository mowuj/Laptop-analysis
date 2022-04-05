import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card'
import './SingleReview.css'
const SingleReview = (props) => {
    const { review } = props
    const { name, rating,cutomerReview,img,id } = review;
    
    return (
      <div className=''>
        <Row xs={1} md={2} className="g-2">
  {Array.from({ length: 1 }).map((_, idx) => (
    <Col>
      <Card>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{ name}</Card.Title>
          <Card.Text>
            Review : {cutomerReview}
          </Card.Text>
          <Card.Text>
            Rating : {rating}
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  ))}
</Row>
    </div>)
      
};

export default SingleReview;
import React from 'react';
import { Card } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import image1 from "../../Pages/Asset/Reviews/reviews1.png"
import image2 from "../../Pages/Asset/Reviews/reviews2.png"
import image3 from "../../Pages/Asset/Reviews/reviews3.png"
import "../../Pages/Styles/Home/Reviews.css"
import ReviewIcon from './ReviewIcon';
const Reviews = () => {
  return (
    <div className="container mt-5 mb-5 pt-5 pb-5">
      <div className="mb-5 pb-2">
        <h1 className="share-main-title">Testi<span className="ride">monials.</span></h1>
        <p className="share-sub-title">The proper business solution for your developing business strategies and corporation</p>
      </div>
      <Carousel variant="dark" fade>
        <Carousel.Item>
          <Card className="card-design">
            <Card.Img src={image1} className="card-image" />
            <Card.Body className="text-center">
              <h5 className="reviewer-name">Smith Ladey</h5>
              <Card.Text className="review">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, velit?
              </Card.Text>
              <div className="text-center">
                <ReviewIcon />
              </div>
            </Card.Body>
          </Card>
        </Carousel.Item>
        <Carousel.Item>
          <Card className="card-design">
            <Card.Img src={image2} className="card-image" />
            <Card.Body className="text-center">
              <h5 className="reviewer-name">Jos Smith</h5>
              <Card.Text className="review">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus, odio!
              </Card.Text>
              <div>
                <ReviewIcon />
              </div>
            </Card.Body>
          </Card>
        </Carousel.Item>
        <Carousel.Item>
          <Card className="card-design">
            <Card.Img src={image3} className="card-image" />
            <Card.Body className="text-center">
              <h5 className="reviewer-name">Steve Mahi</h5>
              <Card.Text className="review">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, velit?
              </Card.Text>
              <div>
                <ReviewIcon />
              </div>
            </Card.Body>
          </Card>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Reviews;
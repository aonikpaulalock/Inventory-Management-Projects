import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import image1 from "../../Pages/Asset/Banner/by-1.jpg"
import image2 from "../../Pages/Asset/Banner/by-1.png"
import image3 from "../../Pages/Asset/Banner/by-3.jpg"
import "../../Pages/Styles/Home/Banner.css"
const Banner = () => {
  // const [index, setIndex] = useState(0);

  // const handleSelect = (selectedIndex, e) => {
  //   setIndex(selectedIndex);
  // };
  return (
    <div className="carousel-banner">
      <Carousel variant="dark" fade>
        <Carousel.Item>
          <img
            className="image-content"
            src={image1}
            alt="First slide"
          />
          <Carousel.Caption>
            <h5>Women's S-Works Tarmac Disc</h5>
            <p>The new Women's S-Works Tarmac DiscLong climbs, windy flats, Grand Tour stages, and local fondos.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="image-content"
            src={image2}
            alt="Second slide"
          />
          <Carousel.Caption>
            <h5>S-Works Roubaix Dura-Ace Di2</h5>
            <p>The S-Works Roubaix with Shimano Dura-Ace Di2 is right at home at a local Fondo, a group ride.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="image-content"
            src={image3}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h5>Men's Epic Comp</h5>
            <p>
            The Men's Epic Comp M5 premium aluminum with D'Aluisio Smartweld technology found on the Epic Comp Alloy.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banner;
import Carousel from "react-bootstrap/Carousel";
import Row from "react-bootstrap/Row";
import { useEffect, useState } from "react";
import CarrouselCard from "./CarouselCard.js";

function Carrousel() {
  const [array, setArray] = useState([{ name: "", country: "", image: "" }]);
  const imagesPerSlide = 4;
  let currentIndex = 0

  useEffect(() => {
    const citiesArray = [
      {
        name: "Amsterdam",
        country: "Netherlands",
        image:
          "./assets/cities/amsterdam.jpg",
      },
      {
        name: "New Delhi",
        country: "India",
        image:
          "./assets/cities/nueva dheli.jpg",
      },
      {
        name: "Kyoto",
        country: "Japan",
        image:
          "./assets/cities/kyoto.jpg",
      },
      {
        name: "Moscu",
        country: "Russia",
        image:
          "./assets/cities/moscu.jpg",
      },
      {
        name: "Berlin",
        country: "Germany",
        image:
          "./assets/cities/berlin.jpeg",
      },
      {
        name: "Yakarta",
        country: "Indonesia",
        image:
          "./assets/cities/jakarta.jpg",
      },
      {
        name: "London",
        country: "England",
        image:
          "./assets/cities/london.jpg",
      },
      {
        name: "Paris",
        country: "France",
        image:
          "./assets/cities/paris.jpg",
      },
      {
        name: "New York",
        country: "United States",
        image:
          "./assets/cities/newyork.jpg",
      },
      {
        name: "Punaauia",
        country: "French Plynessia",
        image:
          "./assets/cities/punaauia.jpg",
      },
      {
        name: "Rome",
        country: "Italy",
        image:
          "./assets/cities/roma.jpg",
      },
      {
        name: "Shangai",
        country: "China",
        image:
          "./assets/cities/shangai.jpg",
      },
    ];
    simulateFetch(citiesArray);
  }, []);

  const simulateFetch = (list) => {
    setArray(list);
  };
  const handleSelect = (_, e) => {
      if(e !== undefined){
        e.target.className.includes("next") ? (currentIndex >= array.length ? currentIndex=0 : currentIndex = currentIndex + imagesPerSlide) : 
         (currentIndex <= 0 ? currentIndex = array.length - imagesPerSlide : currentIndex = currentIndex - imagesPerSlide )
      }
  };

  return (
    <Carousel id="slider" interval={3000} onSelect={handleSelect}>
      
      {Array.from({length : array.length/imagesPerSlide }).map((e) => (
        <Carousel.Item>
          <Row xs={1} md={2} className="g-4">
            <CarrouselCard
              list={array}
              index={currentIndex}
              imgPerSlide={imagesPerSlide}
            />
            {currentIndex += imagesPerSlide}
          </Row>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default Carrousel;

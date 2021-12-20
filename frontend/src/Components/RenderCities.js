import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

function RenderCities() {
  const [ciudades, setCiudades] = useState([]);
  const [search, setSearch] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/api/cities")
      .then((res) => res.json())
      .then((data) => setCiudades(data.response))
      .catch((err) => console.log(err.message));
  }, []);

  const filter = ciudades.filter((city) =>
    city.name.toLowerCase().startsWith(search)
  );

  return (
    <div>
      <div className="contenedor-ciudades container">
        <input
          onChange={
            (e) => setSearch(e.target.value.toLocaleLowerCase().trim()) //trim corta los espacios en blanco
          }
          type="text"
          className="buscador"
          placeholder="Find your next trip here"
        />
        <div className="card-ciudad">
          {filter.length > 0 ? (
            filter.map((ciudad) => {
              return (
                <Link to={`/city/${ciudad._id}`}>
                  <Card className="  bg-dark text-white m-4"  style={{ width: '35rem'}}>
                    <Card.Img src={ciudad.src} alt="Card image" />
                    <Card.ImgOverlay>
                      <Card.Title>{ciudad.name}</Card.Title>
                      <Card.Text>{ciudad.country}</Card.Text>
                    </Card.ImgOverlay>
                  </Card>
                </Link>
              );
            })
          ) : (
            <h3 className="sin-resultados">
              No results found, try another search
            </h3>
          )}
        </div>
      </div>
    </div>
  );
}
export default RenderCities;

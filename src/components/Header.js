import React from "react";
import { Link } from "react-router-dom"; 
// Import your background image or use a URL
import backgroundImage from "../assets/2.jpg";

const Header = props => {
  const { search, onInputChange, onSearchClick } = props;

  const jumbotronStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover", // You can adjust these values
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  };

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div className="container">
          <a className="navbar-brand" >Food Recipe</a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item">
              <Link className="nav-link" to="/section2">Vegan Food</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/section1">Gluten Free</Link>
              </li>
              <li className="nav-item">
              <Link className="nav-link" to="/section3">Lactose Food</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Jumbotron */}
      <div className="jumbotron" style={jumbotronStyle}>
        <h1 className="display-1">
          <i className="material-icons brand-icon">fastfood</i> Food Recipe
        </h1>
        <div className="input-group w-50 mx-auto">
          <input
            type="text"
            className="form-control"
            placeholder="Search Your Recipe..."
            value={search}
            onChange={onInputChange}
          />
          <div className="input-group-append">
            <button className="btn btn-dark" onClick={onSearchClick}>
              Search Recipe
            </button>
          </div>
        </div>
        <div className="greet">
          <h3>
            Made with<i className="material-icons heart">favorite</i>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Header;

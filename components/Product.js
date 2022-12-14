import React from "react";
import { Card, CardImg } from "react-bootstrap";
import { Link } from "react-router-dom";
import Rating from "./Rating";
import star from "../assets/ratingstart.svg"
import StarIcon from '@mui/icons-material/Star';
import "./components.css";
const Product = ({ product }) => {
  console.log(product);
  return (
    <div className="product-list">
      <div className="card p-3 rounded">
        <img
          className="cardImg card-img-top mx-auto"
          src={product.images[0].url}
          alt="image"
        />
        <div className="card-body d-flex flex-column">
          <div className="price-name">
            <p className="card-title">
              <Link to={`/product/${product._id}`}>{product.name}</Link>
            </p>
            <p className="card-text">
              ₹{product.price} <span className="kg">/kg</span>
            </p>
          </div>
          <div className="ratings mt-auto">
          <div className="rating">
            <button style={{marginBottom: '0', background: '#6d8b56', border: 'none', borderRadius: '20px', height: '40px', marginRight: '15px', width: '100px', color: '#FFFF00'}} alt="" />
            <p className="star" style={{ whiteSpace: 'nowrap', marginLeft: '-2.5rem'}}>{Math.floor(product.rating)}.0 <StarIcon sx={{display: 'inline', color: '#eecc00'}} /></p>
            <p className="rating-review" style={{ fontSize: '0.9rem'}}> {product.numReviews} Rating and Reviews</p>
          </div>
            {/* <Rating
              value={product.rating}
              text={` ${product.numReviews} Rating and Reviews`}
            /> */}
          </div>
          {/* <div className="gap"></div> */}
          <div className="added">
            <div className="dot"></div>
            <p className="added">
              Product Added On {product.updatedAt[8]}
              {product.updatedAt[9]}-{product.updatedAt.split("-")[1]}-
              {product.updatedAt.split("-")[0]}
            </p>
          </div>
          {/* <div className="gap"></div> */}
          <div className="added">
            <div className="dot"></div>
            <p className="fresh">{product.description}</p>
          </div>
          {/* <div className="gap"></div> */}
          {/* <div className="gap"></div> */}
          <div className="viewDetails-btn">
            <Link to={`/product/${product._id}`} className="btn btn-block">
            <button className="viewDetails">View Details</button>
            </Link>
            </div>
          
        </div>
      </div>
    </div>
  );
};

export default Product;

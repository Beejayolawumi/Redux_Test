import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "./redux/ProductsFetch";
import PropTypes from "prop-types";

const Products = ({ image }) => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.products);
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  console.log(data.data);

  const handleNext = (index) => {
    Products.Math.floor(Math.random(index));
  };

  Products.proptotype = {
    image: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  };

  return (
    <div>
      <h2>{data.title}</h2>
      {/* <img src={image.fetchProducts} alt={name} /> */}
      <h2>{data.data.description}</h2>
      <h2>{data.data.id}</h2>
      <button>Prev</button>
      <button
        onClick={() => {
          handleNext;
        }}
      >
        Next
      </button>
    </div>
  );
};

export default Products;

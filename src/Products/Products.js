import "./Product.css";
import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';


const Products = ({ result }) => {

  useEffect(() => {
    Aos.init({duration: 2000})
  }, [])
  
  return (
    <>
      <section data-aos='fade-up' data-aos-duration='1500' className="card-container">{result}</section>
    </>
  );
};

export default Products;
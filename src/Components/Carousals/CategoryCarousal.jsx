import React, { useEffect } from 'react';
import './ProductCarousel.css'; // Import custom CSS for additional styling
import m1 from '../Logo/m1.png'; // Import image
import m2 from '../Logo/m2.png'; // Import image
import m3 from '../Logo/m3.png'; // Import image
import m4 from '../Logo/m4.png'; // Import image
import Masonry from 'masonry-layout';
import { Link } from 'react-router-dom';

const CategoryCarousel = () => {
  useEffect(() => {
    // Ensure that Masonry initializes only after the component mounts
    const grid = document.querySelector('.grid');

    // Initialize Masonry
    const masonryInstance = new Masonry(grid, {
      itemSelector: '.grid-item',
      columnWidth: '.grid-item',
      percentPosition: true,
    });

    // Optional: Cleanup function to destroy Masonry instance if needed
    return () => {
      masonryInstance.destroy();
    };
  }, []); // Empty dependency array means this effect runs once on mount

  const categories = [
    { id: 1, name: 'Tables', image: m3 },
    { id: 2, name: 'Trund', image: m4 },
    { id: 3, name: 'Trays', image: m1 },
    { id: 4, name: 'Boxes', image: m2 },
    { id: 5, name: 'Boxes', image: m3 },
    { id: 5, name: 'Boxes', image: m4 },

  ];

  return (
    // <div className='container-fluid'>

      <div>

      <h1 className='text-center fs-2 my-4 fontStyling02'>TRENDING CATEGORIES</h1>

      <div className="grid grid_   ">
        {categories.map((category) => (
          <div className="grid-item grid-item_" key={category.id}>
            <div className='card card_ border-1 border m-3'>
              <img src={category.image} alt={category.name} />
              <div className='card-content card-content_'>
                <Link className='d-flex align-items-center text-decoration-none' to={`/categories/${category.id}`}>
                  <h5 className=" p-3">{category.name}</h5>
                  <i className='bi bi-arrow-right'> </i>
                </Link>
              
              </div>
              
            </div>
          </div>
        ))}
      </div>
      </div>
   
    // </div>
 
  );
};

export default CategoryCarousel;


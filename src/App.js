import React from 'react';
import PropTypes from 'prop-types';

function Food({ name, picture, rating }) {
  return ( 
    <div>
      <h2>I like {name}</h2>
      <h4>{rating}/5.0</h4>
      <img src={picture} alt={name}/>
    </div>
  );
}

const foodILike = [
  {
    id: 1,
    name: 'kimchi',
    image: 'https://img.hankyung.com/photo/202108/99.27186019.1.jpg',
    rating: 5,
  },
  {
    id: 2,
    name: 'pizza',
    image: 'https://img.hankyung.com/photo/202108/99.27186019.1.jpg',
    rating: 4.9,
  },
  {
    id: 3,
    name: 'doncasu',
    image: 'https://img.hankyung.com/photo/202108/99.27186019.1.jpg',
    rating: 4.8,
  },
  {
    id: 4,
    name: 'kimbap',
    image: 'https://img.hankyung.com/photo/202108/99.27186019.1.jpg',
    rating: 4.7,
  },
  {
    id: 5,
    name: 'bibimbap',
    image: 'https://img.hankyung.com/photo/202108/99.27186019.1.jpg',
    rating: 4.6,
  },
];

function App() {
  return (
    <div>
      {foodILike.map(dish => (
        <Food key={dish.id} name={dish.name} picture={dish.image}
        rating={dish.rating} />))}
    </div>
  );
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number,
};

export default App;

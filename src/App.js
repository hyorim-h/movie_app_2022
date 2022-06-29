import React from 'react';

function Food({ name, picture }) {
  return ( 
    <div>
      <h2>I like {name}</h2>
      <img src={picture} alt={name}/>
    </div>
  );
}

const foodILike = [
  {
    id: 1,
    name: 'kimchi',
    image: 'https://img.hankyung.com/photo/202108/99.27186019.1.jpg',
  },
  {
    id: 2,
    name: 'pizza',
    image: 'https://img.hankyung.com/photo/202108/99.27186019.1.jpg',
  },
  {
    id: 3,
    name: 'doncasu',
    image: 'https://img.hankyung.com/photo/202108/99.27186019.1.jpg',
  },
  {
    id: 4,
    name: 'kimbap',
    image: 'https://img.hankyung.com/photo/202108/99.27186019.1.jpg',
  },
  {
    id: 5,
    name: 'bibimbap',
    image: 'https://img.hankyung.com/photo/202108/99.27186019.1.jpg',
  },
];

function App() {
  return (
    <div>
      {foodILike.map(dish => (
        <Food key={dish.id} name={dish.name} picture={dish.image}/>))}
    </div>
  );
}

export default App;

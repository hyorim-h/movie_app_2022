import React from 'react';

function Food({ name, picture }) {
  return ( 
    <div>
      <h2>I like {name}</h2>
      <img src={picture} />
    </div>
  );
}

const foodILike = [
  {name: 'kimchi',
   image: 'https://img.hankyung.com/photo/202108/99.27186019.1.jpg',},
   {name: 'pizza',
   image: 'https://img.hankyung.com/photo/202108/99.27186019.1.jpg',},
   {name: 'doncasu',
   image: 'https://img.hankyung.com/photo/202108/99.27186019.1.jpg',},
   {name: 'kimbap',
   image: 'https://img.hankyung.com/photo/202108/99.27186019.1.jpg',},
   {name: 'bibimbap',
   image: 'https://img.hankyung.com/photo/202108/99.27186019.1.jpg',},
];

function App() {
  return (
    <div>
      {foodILike.map(dish => (
        <Food name={dish.name} picture={dish.image}/>))}
    </div>
  );
}

export default App;

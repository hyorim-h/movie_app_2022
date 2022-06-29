import React from 'react';

function Food({fav}) {
  return <h1>I like {fav}</h1>
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
      <h1>Hello!!!</h1>
    </div>
  );
}

export default App;

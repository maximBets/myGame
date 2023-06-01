import React from 'react';
import Card from './Card';

function CardList():JSX.Element {

  return (
    <div>
      {themes.map(theme => (<div className="">тема</div>)
      flashes.map(flash => <Card />))}
      
    </div>
  );
}

export default CardList;

import React from 'react';
import { useSelector } from 'react-redux';
import Card from './Card';
import { RootState } from '../../store';

function CardList(): JSX.Element {
  const s = useSelector((store: RootState) => store);

  return (
    <div>
      {/* {themes.map(theme => (<div className="">тема</div>)
      flashes.map(flash => <Card />))} */}
    </div>
  );
}

export default CardList;

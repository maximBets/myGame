import React from 'react';
import { useSelector } from 'react-redux';
import Card from './Card';
import { RootState } from '../../store';
import styles from './css/styles.module.css';

function CardList(): JSX.Element {
  const { flashCards } = useSelector(
    (store: RootState) => store.flashCardReducer
  );

  return (
    <div className={styles.flashcardContainer}>
      {flashCards.map((theme) => (
        <div className={styles.flashcardblock} key={theme.id}>
          <div className={styles.themeCard}>{theme.theme}</div>
          <div className={styles.flashContainer}>
            {theme.Flashes.map((flash) => (
              <Card flash={flash} key={flash.id} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default CardList;

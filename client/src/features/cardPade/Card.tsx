import React, { useState } from 'react';
import styles from './css/styles.module.css';
import { Flash } from './reducer/types/type';
import './Modal.css';

function Card({ flash }: { flash: Flash }): JSX.Element {
  const [active, setActive] = useState(false);

  console.log(active);

  return (
    <>
      <div className={styles.containerCard} onClick={() => setActive(!active)}>
        <div className={styles.scoreCard}>{flash.score} </div>
      </div>
      <div>
        <div className={active ? 'modals active' : 'modals'}>
          <div className={active ? 'modals-content active' : 'modals'}>
            <div className="">{flash.question}</div>
            <input></input>
            <button type="button" onClick={() => setActive(!active)}>
              Закрыть
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;

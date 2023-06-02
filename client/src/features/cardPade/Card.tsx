import React, { useState } from 'react';
// import { useSelector } from 'react-redux';
import styles from './css/styles.module.css';
import { Flash } from './reducer/types/type';
import './Modal.css';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
// import { RootState } from '../../store';

function Card({ flash }: { flash: Flash }): JSX.Element {
  const [activeModal, setActiveModal] = useState(false);
  const [activeCard, setActiveCard] = useState(true);
  const [activeCheck, setActiveCheck] = useState('');
  const [valueModal, setValueModal] = useState('');
  const { user } = useSelector((store: RootState) => store.userReducer);

  // const s = useSelector((state:RootState) => state.flashCardReducer)

  const hendlerCheck: React.MouseEventHandler<HTMLButtonElement> = () => {
    if (flash.answer.toLowerCase() === valueModal.toLowerCase()) {
      setActiveCheck('верно');
    } else {
      setActiveCheck('не верно');
    }
  };

  return (
    <>
      <div
        className={
          activeCard ? styles.containerCard : styles.containerCardDisable
        }
        onClick={() => setActiveModal(!activeModal)}>
        <div className={styles.scoreCard}>{flash.score} </div>
      </div>
      <div>
        <div className={activeModal ? 'modals active' : 'modals'}>
          <div
            className={
              activeModal ? 'modals-content active' : 'modals-content'
            }>
            <div className="">{flash.question}</div>
            <input onChange={(e) => setValueModal(e.target.value)} />
            <div className="">{activeCheck}</div>

            <button
              type="button"
              onClick={() => {
                setActiveModal(!activeModal);
                setActiveCard((prev) => !prev);
              }}>
              Закрыть
            </button>
            <button type="button" onClick={hendlerCheck}>
              Проверить
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;

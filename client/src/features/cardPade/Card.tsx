import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './css/styles.module.css';
import { Flash } from './reducer/types/type';
import './Modal.css';
import { RootState } from '../../store';

// import { RootState } from '../../store';

function Card({ flash }: { flash: Flash }): JSX.Element {
  const [activeModal, setActiveModal] = useState(false);
  const [activeCard, setActiveCard] = useState(true);
  const [activeCheck, setActiveCheck] = useState('');
  const [valueModal, setValueModal] = useState('');
  const dispatch = useDispatch();
  const { user } = useSelector((store: RootState) => store.userReducer);
  const [details, setDatails] = useState(false);

  // const s = useSelector((state:RootState) => state.flashCardReducer)

  const hendlerCheck: React.MouseEventHandler<HTMLButtonElement> = () => {
    if (flash.answer.toLowerCase() === valueModal.toLowerCase()) {
      setActiveCheck('верно');
      if (user) {
        const count =
          typeof user.totalScore === 'number'
            ? user.totalScore + flash.score
            : 0;
        dispatch({ type: 'user/score/update', payload: count });
      }
    } else {
      setActiveCheck('не верно');
      if (user) {
        const count =
          typeof user.totalScore === 'number'
            ? user.totalScore - flash.score
            : 0;
        dispatch({ type: 'user/score/update', payload: count });
      }
    }
  };

  return (
    <>
      <div
        className={
          activeCard ? styles.containerCard : styles.containerCardDisable
        }
        onClick={() => setActiveModal(!activeModal)}
      >
        <div className={styles.scoreCard}>{flash.score} </div>
      </div>
      <div>
        <div className={activeModal ? 'modals active' : 'modals'}>
          <div
            className={activeModal ? 'modals-content active' : 'modals-content'}
          >
            <div className="">{flash.question}</div>
            <input onChange={(e) => setValueModal(e.target.value)} required />
            <div className="">{activeCheck}</div>

            <div onClick={() => setDatails((prev) => !prev)}>
              {details ? (
                <button
                  className="waves-effect waves-light btn"
                  type="button"
                  onClick={() => {
                    setActiveModal(!activeModal);
                    setActiveCard((prev) => !prev);
                  }}
                >
                  Закрыть
                </button>
              ) : (
                <button
                  className="waves-effect waves-light btn"
                  type="button"
                  onClick={hendlerCheck}
                >
                  Проверить
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;

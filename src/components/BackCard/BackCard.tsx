import React, {useContext} from 'react';
import style from './BackCard.module.scss'
import BackCardPhoto from 'assets/images/bg-card-back.png'
import {CardContext} from "context";

export const BackCard = () => {
    const {state} = useContext(CardContext)
    return (
        <div className={style.backCard}>
            <img src={BackCardPhoto} className={style.backCard__backPhoto}/>
            <span className={style.backCard__cvc}>{state.cvc ? state.cvc : '***'}</span>
        </div>
    );
};
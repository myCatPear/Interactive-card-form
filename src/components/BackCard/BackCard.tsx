import React from 'react';
import style from './BackCard.module.scss'
import BackCardPhoto from 'assets/images/bg-card-back.png'

export const BackCard = () => {
    return (
        <div className={style.backCard}>
            <img src={BackCardPhoto} className={style.backCard__backPhoto}/>
        </div>
    );
};
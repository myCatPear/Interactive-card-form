import React from 'react';
import style from './FrontCard.module.scss'
import FrontCardPhoto from 'assets/images/bg-card-front.png'
import CardLogo from 'assets/images/card-logo.svg'

export const FrontCard = () => {
    return (
        <div className={style.frontCard}>
            <img src={FrontCardPhoto} />
            <img src={CardLogo} alt="" className={style.frontCard__cardLogo}/>
            <div className={style.frontCard__cardNumber}>0000 0000 0000 0000</div>
            <div className={style.frontCard__cardNameAndDate}>
                <span className={style.frontCard__cardName}>Denis Tavabilov</span>
                <span className={style.frontCard__cardDate}>00/00</span>
            </div>
        </div>
    );
};
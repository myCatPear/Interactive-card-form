import React, {useContext} from 'react';
import style from './FrontCard.module.scss'
import FrontCardPhoto from 'assets/images/bg-card-front.png'
import CardLogo from 'assets/images/card-logo.svg'
import { CardContext } from 'context';
import {
    DEFAULT_CARD_MONTH,
    DEFAULT_CARD_NAME,
    DEFAULT_CARD_NUMBER, DEFAULT_CARD_YEAR
} from "../../common/const";


export const FrontCard = () => {
    const {state} = useContext(CardContext)

    return (
        <div className={style.frontCard}>
            <img src={FrontCardPhoto} className={style.frontCard__cardIMG}/>
            <img src={CardLogo} alt="" className={style.frontCard__cardLogo}/>
            <div className={style.frontCard__cardNumber}>{state.number ? state.number : DEFAULT_CARD_NUMBER}</div>
            <div className={style.frontCard__cardNameAndDate}>
                <span className={style.frontCard__cardName}>{state.name ? state.name : DEFAULT_CARD_NAME}</span>
                <span className={style.frontCard__cardDate}>{state.month ? state.month : DEFAULT_CARD_MONTH}/{state.year ? state.year : DEFAULT_CARD_YEAR}</span>
            </div>
        </div>
    );
};
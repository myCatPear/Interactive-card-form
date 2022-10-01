import React, {useContext} from 'react';
import style from './FrontCard.module.scss'
import FrontCardPhoto from 'assets/images/bg-card-front.png'
import CardLogo from 'assets/images/card-logo.svg'
import { CardContext } from 'context';


export const FrontCard = () => {
    const {state} = useContext(CardContext)

    return (
        <div className={style.frontCard}>
            <img src={FrontCardPhoto} />
            <img src={CardLogo} alt="" className={style.frontCard__cardLogo}/>
            <div className={style.frontCard__cardNumber}>{state.number}</div>
            <div className={style.frontCard__cardNameAndDate}>
                <span className={style.frontCard__cardName}>{state.name}</span>
                <span className={style.frontCard__cardDate}>{state.month}/{state.year}</span>
            </div>
        </div>
    );
};
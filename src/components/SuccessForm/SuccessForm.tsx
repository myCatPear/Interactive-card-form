import React, {useContext, useReducer} from 'react';
import style from './SuccessForm.module.scss'
import IconComplete from 'assets/images/icon-complete.svg'
import {CardContext} from "context";
import {setIsValidForm} from "store";

export const SuccessForm = () => {

    const {state,dispatch} = useContext(CardContext)
    const onButtonClick = () => dispatch(setIsValidForm(false))
    return (
        <div className={style.successForm}>
            <img src={IconComplete} alt="iconComplete"/>
            <h2>THANK YOU!</h2>
            <p>We've added your details</p>
            <button className={style.successForm__button} onClick={onButtonClick}>Continue</button>
        </div>
    );
};
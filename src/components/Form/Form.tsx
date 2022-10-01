import React, {ChangeEvent, useContext} from 'react';
import style from './Form.module.scss'
import {
    setCardCVC,
    setCardMonth,
    setCardName,
    setCardNumber,
    setCardYear
} from "store";
import {CardContext} from "context";

export const Form = () => {
    const PLACEHOLDER_NAME = 'e.g. Denis Tavabilov';
    const PLACEHOLDER_CARD_NUMBER = 'e.g. 1234 5678 9876 0000';
    const PLACEHOLDER_CARD_MONTH = 'MM';
    const PLACEHOLDER_CARD_YEAR = 'YY';
    const PLACEHOLDER_CARD_CVC = 'e.g. 123';

    const {state, dispatch} = useContext(CardContext)

    const onInputNameChange = (event: ChangeEvent<HTMLInputElement>) => {
        dispatch(setCardName(event.currentTarget.value))
    }
    const onInputNumberChange = (event: ChangeEvent<HTMLInputElement>) => {
        dispatch(setCardNumber(event.currentTarget.value))
    }
    const onInputMonthChange = (event: ChangeEvent<HTMLInputElement>) => dispatch(setCardMonth(event.currentTarget.value))
    const onInputYearChange = (event: ChangeEvent<HTMLInputElement>) => dispatch(setCardYear(event.currentTarget.value))
    const onInputCvcChange = (event: ChangeEvent<HTMLInputElement>) => dispatch(setCardCVC(event.currentTarget.value))

    return (
        <form className={style.form}>
            <label className={style.label}>cardholder name
                <input className={style.input} placeholder={PLACEHOLDER_NAME}
                       onChange={onInputNameChange}/>
            </label>
            <label className={style.label}>card number
                <input className={style.input} placeholder={PLACEHOLDER_CARD_NUMBER}
                       onChange={onInputNumberChange}/>
            </label>
            <div className={style.form__dataCard}>
                <label className={`${style.label}`}>
                    <span className={`${style.span}`}>exp.date (mm/yy)</span>
                    <div className={style.label__date}>
                        <input className={style.input}
                               placeholder={PLACEHOLDER_CARD_MONTH}
                               onChange={onInputMonthChange}
                        />
                        <input className={style.input}
                               placeholder={PLACEHOLDER_CARD_YEAR}
                               onChange={onInputYearChange}/>
                    </div>
                </label>
                <label className={style.label}>cvc
                    <input className={style.input}
                           placeholder={PLACEHOLDER_CARD_CVC}
                           onChange={onInputCvcChange}/>
                </label>
            </div>
            <input type="submit" className={style.button} value={'Confirm'}/>
        </form>
    );
};

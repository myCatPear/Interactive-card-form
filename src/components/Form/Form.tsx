import React, {ChangeEvent, useContext, useState} from 'react';
import style from './Form.module.scss'
import {
    setCardCVC,
    setCardMonth,
    setCardName,
    setCardNumber,
    setCardYear, setIsCardNameError, setIsCardNumberError
} from "store";
import {CardContext} from "context";
import {checkForValidCardName} from "utils/checkForValidCardName";
import {
    CARD_NAME_ERROR_MESSAGE, CARD_NUMBER_ERROR_MESSAGE,
    DEFAULT_CARD_NAME, DEFAULT_CARD_NUMBER,
    PLACEHOLDER_CARD_CVC,
    PLACEHOLDER_CARD_MONTH, PLACEHOLDER_CARD_NUMBER,
    PLACEHOLDER_CARD_YEAR, PLACEHOLDER_NAME
} from './const';
import {checkForValidCardNumber} from "../../utils/checkForValidCardNumber";

export const Form = () => {
    const {state, dispatch} = useContext(CardContext)

    const onInputNameChange = (event: ChangeEvent<HTMLInputElement>) => {
        const symbol = event.currentTarget.value;
        if (state.name.length - 1 === 0) dispatch(setCardName(DEFAULT_CARD_NAME))

        if (checkForValidCardName(symbol)) {
            dispatch(setIsCardNameError(false))
            dispatch(setCardName(symbol))
        } else {
            dispatch(setIsCardNameError(true))
        }
    }

    const onInputNumberChange = (event: ChangeEvent<HTMLInputElement>) => {
        const symbol = event.currentTarget.value;
        if (state.number.length - 1 === 0) dispatch(setCardNumber(DEFAULT_CARD_NUMBER))
        if (checkForValidCardNumber(symbol)) {
            dispatch(setIsCardNumberError(false))
            dispatch(setCardNumber(symbol))
        } else {
            dispatch(setIsCardNumberError(true))
        }

    }
    const onInputMonthChange = (event: ChangeEvent<HTMLInputElement>) => dispatch(setCardMonth(event.currentTarget.value))
    const onInputYearChange = (event: ChangeEvent<HTMLInputElement>) => dispatch(setCardYear(event.currentTarget.value))
    const onInputCvcChange = (event: ChangeEvent<HTMLInputElement>) => dispatch(setCardCVC(event.currentTarget.value))

    return (
        <form className={style.form}>
            <label className={style.label}>cardholder name
                <input
                    className={`${style.input} ${state.isCardNameError && style.error}`}
                    placeholder={PLACEHOLDER_NAME}
                    onChange={onInputNameChange}
                />
                {state.isCardNameError &&
                    <span className={style.error__span}>{CARD_NAME_ERROR_MESSAGE}</span>}
            </label>
            <label className={style.label}>card number
                <input
                    className={`${style.input} ${state.isCardNumberError && style.error}`}
                    placeholder={PLACEHOLDER_CARD_NUMBER}
                    onChange={onInputNumberChange}
                    maxLength={16}
                />
                {state.isCardNumberError && <span
                    className={style.error__span}>{CARD_NUMBER_ERROR_MESSAGE}</span>}
            </label>
            <div className={style.form__dataCard}>
                <label className={`${style.label}`}>
                    <span className={`${style.span}`}>exp.date (mm/yy)</span>
                    <div className={style.label__date}>
                        <input className={style.input}
                               type="number"
                               placeholder={PLACEHOLDER_CARD_MONTH}
                               onChange={onInputMonthChange}
                        />
                        <input className={style.input}
                               type="number"
                               placeholder={PLACEHOLDER_CARD_YEAR}
                               onChange={onInputYearChange}
                        />
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

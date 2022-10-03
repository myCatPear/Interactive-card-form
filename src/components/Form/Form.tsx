import React, {ChangeEvent, MouseEventHandler, useContext, useState} from 'react';
import style from './Form.module.scss'
import {
    setCardCVC,
    setCardMonth,
    setCardName,
    setCardNumber,
    setCardYear, setIsCardCvcError, setIsCardMonthOrYearError,
    setIsCardNameError,
    setIsCardNumberError, setIsValidForm,
} from "store";
import {CardContext} from "context";
import {checkForValidCardName} from "utils/checkForValidCardName";
import {
    CARD_NAME_ERROR_MESSAGE, CARD_NUMBER_ERROR_MESSAGE,
    DEFAULT_CARD_NAME, DEFAULT_CARD_NUMBER,
    PLACEHOLDER_CARD_CVC,
    PLACEHOLDER_CARD_MONTH, PLACEHOLDER_CARD_NUMBER,
    PLACEHOLDER_CARD_YEAR, PLACEHOLDER_NAME
} from 'common/const';
import {checkForValidCardNumber} from "utils/checkForValidCardNumber";
import {EMPTY_STRING} from "common/const";
import {checkForMaxLengthString} from "utils/checkForMaxLengthString";

export const Form = () => {
    const {state, dispatch} = useContext(CardContext)

    const onInputNameChange = (event: ChangeEvent<HTMLInputElement>) => {
        const symbol = event.currentTarget.value;
        if (state.name.length - 1 === 0) dispatch(setCardName(EMPTY_STRING))

        if (checkForValidCardName(symbol)) {
            dispatch(setIsCardNameError(false))
            dispatch(setCardName(symbol))
        } else {
            dispatch(setIsCardNameError(true))
            dispatch(setCardName(symbol))
        }
    }

    const onInputNumberChange = (event: ChangeEvent<HTMLInputElement>) => {
        const symbol = event.currentTarget.value;
        if (state.number.length - 1 === 0) dispatch(setCardNumber(EMPTY_STRING))
        if (checkForValidCardNumber(symbol)) {
            dispatch(setIsCardNumberError(false))
            dispatch(setCardNumber(symbol))
        } else {
            dispatch(setCardNumber(symbol))
            dispatch(setIsCardNumberError(true))
        }

    }

    const onInputMonthChange = (event: ChangeEvent<HTMLInputElement>) => {
        const symbol = event.currentTarget.value;
        console.log(symbol)
        if (checkForMaxLengthString(state.month, 2)) {
            dispatch(setIsCardMonthOrYearError(false))
            dispatch(setCardMonth(symbol))
        }
    }

    const onInputYearChange = (event: ChangeEvent<HTMLInputElement>) => {
        const symbol = event.currentTarget.value;
        if (checkForMaxLengthString(state.year, 2)) {
            dispatch(setIsCardMonthOrYearError(false))
            dispatch(setCardYear(symbol))
            return;
        }
        return;
    }

    const onInputCvcChange = (event: ChangeEvent<HTMLInputElement>) => {
        const symbol = event.currentTarget.value;
        if (checkForMaxLengthString(state.cvc, 3)) {
            dispatch(setIsCardCvcError(false))
            dispatch(setCardCVC(symbol))
            return;
        }
        return;

    }

    const onSubmitFormClick = (event: React.MouseEvent<HTMLInputElement>) => {
        event.preventDefault()
        if (state.name.split(' ').length < 2) dispatch(setIsCardNameError(true))
        if (state.number.length < 16) dispatch(setIsCardNumberError(true))
        if (state.month.length < 2 || state.year.length < 2) dispatch(setIsCardMonthOrYearError(true))
        if (state.cvc.length < 3) dispatch(setIsCardCvcError(true))
        dispatch(setIsValidForm(true))
    }

    return (
        <form className={style.form}>
            <label className={style.label}>cardholder name
                <input
                    className={`${style.input} ${state.isCardNameError && style.error}`}
                    placeholder={PLACEHOLDER_NAME}
                    onChange={onInputNameChange}
                    value={state.name}
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
                    value={state.number}
                />
                {state.isCardNumberError && <span
                    className={style.error__span}>{CARD_NUMBER_ERROR_MESSAGE}</span>}
            </label>
            <div className={style.form__dataCard}>
                <label className={`${style.label}`}>
                    <span className={`${style.span}`}>exp.date (mm/yy)</span>
                    <div className={style.label__date}>
                        <input className={`${style.input} ${state.isCardMonthOrYearError && style.error}`}
                               type="number"
                               placeholder={PLACEHOLDER_CARD_MONTH}
                               onChange={onInputMonthChange}
                               value={state.month}
                        />
                        {state.isCardMonthOrYearError && <span
                            className={`${style.error__span} ${style.error__span_monthYear}`}>{CARD_NUMBER_ERROR_MESSAGE}</span>}
                        <input className={`${style.input} ${state.isCardMonthOrYearError && style.error}`}
                               type="number"
                               placeholder={PLACEHOLDER_CARD_YEAR}
                               onChange={onInputYearChange}
                               value={state.year}
                        />
                    </div>
                </label>
                <label className={style.label}>cvc
                    <input className={`${style.input} ${state.isCardCVCError && style.error}`}
                           placeholder={PLACEHOLDER_CARD_CVC}
                           onChange={onInputCvcChange}
                           value={state.cvc}
                           type="number"
                    />
                    {state.isCardCVCError && <span
                        className={style.error__span}>{CARD_NUMBER_ERROR_MESSAGE}</span>}
                </label>
            </div>
            <input
                type="submit"
                className={style.button}
                value={'Confirm'}
                onClick={onSubmitFormClick}
            />
        </form>
    );
};

import React from 'react';
import style from './Form.module.scss'

export const Form = () => {
    const PLACEHOLDER_NAME = 'e.g. Denis Tavabilov';
    const PLACEHOLDER_CARD_NUMBER = 'e.g. 1234 5678 9876 0000';
    const PLACEHOLDER_CARD_MONTH = 'MM';
    const PLACEHOLDER_CARD_YEAR = 'YY';
    const PLACEHOLDER_CARD_CVC = 'e.g. 123';

    return (
        <form className={style.form}>
            <label className={style.label}>cardholder name
                <input className={style.input} placeholder={PLACEHOLDER_NAME}/>
            </label>
            <label className={style.label}>card number
                <input className={style.input} placeholder={PLACEHOLDER_CARD_NUMBER}/>
            </label>
            <div className={style.form__dataCard}>
                <label className={`${style.label}`}>
                    <span className={`${style.span}`}>exp.date (mm/yy)</span>
                    <div className={style.label__date}>
                        <input className={style.input} placeholder={PLACEHOLDER_CARD_MONTH}/>
                        <input className={style.input} placeholder={PLACEHOLDER_CARD_YEAR}/>
                    </div>
                </label>
                <label htmlFor="cvc" className={style.label}>cvc
                    <input id="cvc" className={style.input} placeholder={PLACEHOLDER_CARD_CVC}/>
                </label>
            </div>
            <input type="submit" className={style.button} value={'Confirm'}/>
        </form>
    );
};

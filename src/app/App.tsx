import React from 'react';
import './App.module.scss';
import style from './App.module.scss'
import {Form, FrontCard} from "components";
import {BackCard} from "components";

const App = () => (
    <div className={style.app}>
        {/*<aside className={style.aside}>*/}
        {/*    <FrontCard/>*/}
        {/*</aside>*/}
        {/*<main className={style.main}>*/}
        {/*    <Form/>*/}
        {/*</main>*/}
        <div className={style.cards}>
            <FrontCard/>
            <BackCard/>
        </div>
        <Form/>
    </div>
);

export default App;

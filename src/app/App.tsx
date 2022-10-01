import React, {useReducer} from 'react';
import './App.module.scss';
import style from './App.module.scss'
import {Form, FrontCard} from "components";
import {BackCard} from "components";
import {cardReducer, initialState} from "store";
import { CardContext } from 'context';

const App = () => {
     const [state, dispatch] = useReducer(cardReducer, initialState)

    return (
        <CardContext.Provider value={{dispatch,state}}>
            <div className={style.app}>
                <div className={style.cards}>
                    <FrontCard/>
                    <BackCard/>
                </div>
                <Form/>
            </div>
        </CardContext.Provider>

    )
};

export default App;

const SET_CARD_NAME = 'CARD_REDUCER/SET_CARD_NAME';
const SET_CARD_NUMBER = 'CARD_REDUCER/SET_CARD_NUMBER';
const SET_CARD_MONTH = 'CARD_REDUCER/SET_CARD_MONTH';
const SET_CARD_YEAR = 'CARD_REDUCER/SET_CARD_YEAR';
const SET_CARD_CVC = 'CARD_REDUCER/SET_CARD_CVC';
const SET_IS_CARD_NAME_ERROR = 'CARD_REDUCER/SET_IS_CARD_NAME_ERROR';
const SET_IS_CARD_NUMBER_ERROR = 'CARD_REDUCER/SET_IS_CARD_NUMBER_ERROR';

export const initialState = {
    name:'Denis Tavabilov',
    number:'0000000000000000',
    month:'00',
    year:'00',
    cvc:'000',
    isCardNameError:false,
    isCardNumberError:false,
}

export type InitialStateType = typeof initialState
export type ActionType = setCardNameType | setCardNumberType | setCardMonthType | setCardYearType | setCardCVCType | setIsCardErrorType | setIsCardNumberErrorType

export const cardReducer = (state:InitialStateType, action:ActionType):InitialStateType => {
    switch (action.type) {
        case SET_CARD_NAME:
            return {...state, name: action.name}
        case SET_CARD_NUMBER:
            return {...state, number: action.number}
        case SET_CARD_MONTH:
            return {...state, month: action.month}
        case SET_CARD_YEAR:
            return {...state, year: action.year}
        case SET_CARD_CVC:
            return {...state, cvc: action.cvc}
        case SET_IS_CARD_NAME_ERROR:
            return {...state, isCardNameError: action.value}
        case SET_IS_CARD_NUMBER_ERROR:
            return {...state, isCardNumberError: action.value}
        default:
            return state
    }
}

export const setCardName = (name:string) => ({type:SET_CARD_NAME, name} as const)
type setCardNameType = ReturnType<typeof setCardName>

export const setCardNumber = (number:string) => ({type:SET_CARD_NUMBER, number} as const)
type setCardNumberType = ReturnType<typeof setCardNumber>

export const setCardMonth = (month:string) => ({type:SET_CARD_MONTH, month} as const)
type setCardMonthType = ReturnType<typeof setCardMonth>

export const setCardYear = (year:string) => ({type:SET_CARD_YEAR, year} as const)
type setCardYearType = ReturnType<typeof setCardYear>

export const setCardCVC = (cvc:string) => ({type:SET_CARD_CVC, cvc} as const)
type setCardCVCType = ReturnType<typeof setCardCVC>

export const setIsCardNameError = (value:boolean) => ({type:SET_IS_CARD_NAME_ERROR, value} as const)
type setIsCardErrorType = ReturnType<typeof setIsCardNameError>

export const setIsCardNumberError = (value:boolean) => ({type:SET_IS_CARD_NUMBER_ERROR, value} as const)
type setIsCardNumberErrorType = ReturnType<typeof setIsCardNumberError>
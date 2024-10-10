import { CHANGE_QUOTE, CHANGE_COLOR } from "./quoteActions";

const initialState = {
    randomQuote: null,
    currentColor: 'white'
}

const quoteReducer = (state=initialState, action) => {
    switch (action.type) {
        case CHANGE_QUOTE:
            return {
                ...state,
                randomQuote: action.payload
            };

        case CHANGE_COLOR:
            return{
                ...state,
                currentColor: action.payload
            }

        default:
            return state;
    }
}

export default quoteReducer;
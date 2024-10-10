import quotes from "../components/randomQuotes";

export const CHANGE_QUOTE = 'CHANGE_QUOTE';
export const CHANGE_COLOR = 'CHANGE_COLOR'

export const changeQuote = () => {
  return{
    type: CHANGE_QUOTE,
    payload:  quotes[Math.floor(Math.random()* quotes.length)]
  }
}

export const changeColor = (color) => ({
  type: CHANGE_COLOR,
  payload: color,
})
import { useEffect } from "react";
import React from "react";
import { useSelector,useDispatch } from "react-redux";
import {changeQuote} from "../redux/quoteActions";
import { changeColor } from "../redux/quoteActions";

const QuoteMaster = () => {
    const dispatch = useDispatch();
    const randomQuote = useSelector((state)=> state.quotes.randomQuote);
    const currentColor = useSelector((state) => state.quotes.currentColor);

    const colors = [ 
    '#16a085',
    '#27ae60',
    '#2c3e50',
    '#f39c12',
    '#e74c3c',
    '#9b59b6',
    '#FB6964',
    '#342224',
    '#472E32',
    '#BDBB99',
    '#77B1A9',
    '#73A857'
];

    //Generate a random quote when the component mounts
    useEffect(() => {
        dispatch(changeQuote());
        handleChangeColor();
    }, [dispatch]);
    

    const handleNewQuote = () => {
        dispatch(changeQuote());
        handleChangeColor();
    };
    

    const handleChangeColor = () => {
        const newColor = colors[Math.floor(Math.random() * colors.length)];
        dispatch(changeColor(newColor)); // Dispatch action to change color
        document.body.style.backgroundColor = newColor;
    };


    return (
        <div >
            <div id="quote-box">
                {randomQuote && (
                    <div style={{color: currentColor}}>
                        <div id="text" >
                          <i className="fa fa-quote-left quote-mark"  ></i>
                            <span >"{randomQuote.quote}"</span>  
                        </div>
                        <div id="author">
                          <p >-- {randomQuote.author}</p>  
                        </div>
                        
                    </div>
                )} 
                <button id="tweet-quote" style={{backgroundColor: currentColor}} >
                    <a href="twitter.com/intent/tweet"><i className="fab fa-twitter"></i></a>
                </button>
                <button id="new-quote" style={{backgroundColor: currentColor}}  onClick={handleNewQuote}>New Quote</button>

            </div>
            <div id="creator"><p >by Tyrese</p></div>
        </div>
    );
};

export default QuoteMaster;
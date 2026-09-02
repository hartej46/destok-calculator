import { useState } from 'react';
import "./Calculator.css"

function Calculator() {

    const [input, setInput] = useState("");

    const deleteNumber = () => {
        setInput((prev) => {
            if (prev.trim() !== ""){
                const parts = prev.split("")
                parts.splice(-1, 1)
                return parts.join("");
            }
            return "";
        } )
    }

    const clearCalculator = () => {
        setInput('');
    }


    const handleOperator = (item) => {
        
        const lastpart = input.slice(-1);
        const operators = ["*", "/", "-", "+"];

        if (["*", "/"].includes(item) && input === "" ) {
            return
        }

        if (operators.includes(lastpart)) {
            setInput((prev) => prev.slice(0, -1) + item);
            return;
        }

        setInput((prev) => prev + item);
    };


    const handleNumber = (item) => {
        setInput((prev) => prev + item)
    }

    const handleDecimal = (item) => {
        setInput((prev) => prev + item)
    }

    const calculate = () => {
        const evalResults = String(eval(input));
        setInput(evalResults);
    }

    const percentage = () => {
        setInput((prev) => prev + "* 0.01")
    }


    return (
        <div className="calculator">
        <div className="display">{input.replace('*', '×').replace('*0.01', '%').replace('/','÷')}</div>

        <div className="buttons">
            <button className="function" onClick={deleteNumber}>
            DEL
            </button>

            <button className="function" onClick={clearCalculator}>
            AC
            </button>

            <button className="function" onClick={percentage}>
            %
            </button>

            <button className="operator" onClick={() => handleOperator("/")}>
            ÷
            </button>

            <button onClick={() => handleNumber("7")}>7</button>
            <button onClick={() => handleNumber("8")}>8</button>
            <button onClick={() => handleNumber("9")}>9</button>

            <button className="operator" onClick={() => handleOperator("*")}>
            ×
            </button>

            <button onClick={() => handleNumber("4")}>4</button>
            <button onClick={() => handleNumber("5")}>5</button>
            <button onClick={() => handleNumber("6")}>6</button>

            <button className="operator" onClick={() => handleOperator("-")}>
            -
            </button>

            <button onClick={() => handleNumber("1")}>1</button>
            <button onClick={() => handleNumber("2")}>2</button>
            <button onClick={() => handleNumber("3")}>3</button>

            <button className="operator" onClick={() => handleOperator("+")}>
            +
            </button>

            <button className="zero" onClick={() => handleNumber("0")}>
            0
            </button>

            <button onClick={handleDecimal}>.</button>

            <button className="operator" onClick={calculate}>
            =
            </button>
        </div>
        </div>
    );
}

export default Calculator;
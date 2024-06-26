import { useState } from 'react'
import './App.css'

function App() {
    const [word, setWord] = useState("");

    const [colorbut, setcolorbut] = useState("Button Color - Yellow");
    const [handlecolor, sethandlecolor] = useState({
        backgroundColor: 'rgb(251, 198, 142)',

    });

    function printText(e) {
        setWord(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        // Add your logic for handling form submission here
    }

    function setupper() {
        setWord(word.toUpperCase());
    }
    function setlower() {
        setWord(word.toLowerCase());
    }
    function copytotext() {
        let copy = document.querySelector('#inputtext');
        copy.select();
        navigator.clipboard.writeText(copy.value);
        alert("Your text Copied");
    }
    function captailtext() {
        let captail = document.querySelector('#inputtext');
        captail.value = captail.value.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");


    }
    function handlebut() {
        if (handlecolor.backgroundColor === 'rgb(251, 198, 142)') {
            sethandlecolor({
                backgroundColor: 'rgb(251, 255, 35)',

            })
            setcolorbut("Button Color - Blue")
        } else if (handlecolor.backgroundColor === 'rgb(251, 255, 35)') {
            sethandlecolor({
                backgroundColor: 'rgb(93, 158, 244)',
                color: 'white'

            })
            setcolorbut("Button Color - Orange")

        } else {
            sethandlecolor({
                backgroundColor: 'rgb(251, 198, 142)',

            })
            setcolorbut("Button Color - yellow")

        }
    }
    function handleReset() {
        setWord("");
    }


    return (
        <>
           

                <div className='container2'>
                    <form className='formpt' onSubmit={handleSubmit}>
                        <div className='scrr'>
                            <h3>You can enter your text</h3>
                            <textarea onChange={printText} id='inputtext' value={word} className='statement' placeholder='Enter your statement' rows="15" cols="55" />

                        </div>
                        <div className="but">
                            <button type="submit" style={handlecolor} onClick={setupper} className="submit">Uppercase</button>
                            <button type="submit" style={handlecolor} onClick={setlower} className="submit">Lowercase</button>
                            <button type="button" style={handlecolor} onClick={handleReset} className="submit">Clear Text</button>
                            <button type="button" style={handlecolor} onClick={copytotext} className="submit">Copy-Text</button>
                            <button type="button" style={handlecolor} onClick={captailtext} className="submit">Captailize</button>
                            <button type="button" style={handlecolor} onClick={handlebut} className="submit">{colorbut}</button>
                        </div>

                    </form>
                </div>
                <div className="output_container">
                    <div className="cent">
                        <h2>Text Summery</h2>
                        <div className='state'>
                            <h4>Chracters Length :  {word.length}</h4>
                            <h4>Word :  {word.split(" ").length - 1}</h4>
                        </div>
                    </div>
                    <div className="scr">
                        <textarea value={word}></textarea>

                    </div>

                </div>
          
        </>
    );
}

export default App;
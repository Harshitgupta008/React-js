import { useState } from 'react';
import './App.css'
import Quiz from './Quiz';

function App() {
  const [index, setIndex] = useState(0);
  const [data, setData] = useState(Quiz[index]);
  const [lock, setLock] = useState(false);

  const [result, setResult] = useState(false);
  const [count, setCount] = useState(0);
  const [wrong, setWrong] = useState(0);
  const selectQuiz = (e, n) => {
    if (!lock) {

      if (data.ans === n) {
        setLock(true)
        setCount(count + 1)

        e.target.classList.add("correct");
      } else {
        setLock(true)
        setWrong(wrong + 1);
        e.target.classList.add("incorrect");
      }
    } else {
      alert('already submitted')
    }

  }


  const resetcolor = () => {
    const ans = document.querySelectorAll(".quiz-answers li");
    ans.forEach((ansh) => {
      ansh.classList.remove("incorrect")
      ansh.classList.remove("correct")
    })
  }
  const [num, setNum] = useState(1);
  const changeQuestion = (e) => {
    e.preventDefault();
    if (num < Quiz.length) {
      resetcolor();
      if (lock) {
        let newindex = index + 1;
        setIndex(newindex);
        setData(Quiz[newindex]);
        setLock(false);
        setNum(num + 1);
      } else {
        alert("attempt quiz")
      }
    } else {
      const choise = confirm("do you want to see your result")
      if(choise){

        setResult(true);
      }
    }

  }
  return (
    <>

      <div className="quiz-fullcontainer">
        <div className="quiz-container">
          {
            !result ? <>

              <div className="quiz-header">
                <div className="quiz-question"><span>Q.{index + 1} {data.question}</span> </div>
              </div>
              <ul className="quiz-answers">
                <li onClick={(e) => selectQuiz(e, 0)}>1. {data.answers[0]}</li>
                <li onClick={(e) => selectQuiz(e, 1)}>2. {data.answers[1]}</li>
                <li onClick={(e) => selectQuiz(e, 2)}>3. {data.answers[2]}</li>
                <li onClick={(e) => selectQuiz(e, 3)}>4. {data.answers[3]}</li>
              </ul>
              <div className="quiz-button">
                <button onClick={(e) => changeQuestion(e)} className="quiz-next-button" >Next</button>
                <h5 className="quiz-point"> Score : {count}/{Quiz.length}</h5>
              </div>
            </> :
              <>
                <div class="results">
                  <h1>You got: <span class='finalans'>{(count / Quiz.length) * 100}%</span></h1>
                  <h1>Number of Correct ans: <span class='finalans'>{count}</span></h1>
                  <h1>Number of Wrong ans: <span class='finalanswrong'>{wrong}</span></h1>
                </div>

              </>
          }
        </div>

      </div>

    </>
  )
}

export default App

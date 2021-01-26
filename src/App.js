import React, {useState, useEffect} from 'react'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField';
import Employee from './components/Employee'

function App() {
  const [points, setPoints] = useState(0);
  const [code, setCode] = useState("01")
  const [webDevAmount, setWebDevAmount] = useState(0)

  useEffect(() => {
    setPoints(points+webDevAmount)
    return () => {
    }
  })

  if (points === 0) {
    return (
      <div onKeyDown={()=>setPoints(points+5)} className="main" style={{textAlign: 'center'}}>
            <h1>STARTUP</h1>
            <h2>Type in the prompt to start coding and making money! Hire employees to help you profit!</h2>
            <h1>Cash: {points}</h1>
            <Button onClick={() => setPoints(points + 5)} variant="contained" color="primary">
                Start Game
            </Button>
      </div>
    );
  } else {
    return (
      <div className="main" style={{textAlign: 'center'}}>
        <h1>STARTUP</h1>
        <h1>Cash: ${Math.round(points)}</h1>
        <h1>Cash per second: ${Math.round((webDevAmount*100))}</h1>
        <TextField id="outlined-password-input" label="Code" type="text" variant="outlined" rows="5" cols="2000" multiline onKeyDown={()=>{setPoints(points+55); setCode(code+"01")}} value={code} onChange={()=>{}} style={{width: '300px', height: '150px'}}/>
        <Employee type="Web Developer" cost="10000" gain="100" points={points} setPoints={setPoints} webDevAmount={webDevAmount} setWebDevAmount={setWebDevAmount}/>
      </div>
    )
  }
}


export default App;

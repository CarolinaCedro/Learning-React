import React from 'react'
import { useState } from 'react';

import { Container } from './style'

const Page = () => {

  const [counter,setCounter] = useState(0);

  function Counter (){
    setCounter(counter + 1);
     
  }

 
  
  return(
    <Container>

      <div className="Container">

        <div className="Check">



        <h2>Click on your Interesting</h2>


        <div className="checkbox">

        <div><input type="checkbox" id="checkbox1" name="name" onClick={Counter} value="1"/> Javascript</div>
        <div><input type="checkbox" id="checkbox2" name="name" onClick={Counter}/> React</div>
        <div><input type="checkbox" id="checkbox3" name="name" onClick={Counter}/> Angular</div>
        <div><input type="checkbox" id="checkbox4" name="name" onClick={Counter}/> Typescript</div>
        <div><input type="checkbox" id="checkbox5" name="name" onClick={Counter}/> Bootstrap</div>
        <div id="checkcount"></div>
        </div>
        


        
        </div>

        <h3>Contador</h3>
        <h1>{counter}</h1>
      </div>
    
    </Container>
  )  
  
}

export default Page;

// export default Page
// const [counter,setCounter] = useState(0);

// function increment(){
//   setCounter(counter + 1);
// }

import React, { useState } from 'react'
import './Component.css'


export default function Component1() {
       const [text, settext]=useState("Enter Text here");
       const click = (event)=>{
        // settext('You clicked')
        
        if (text === "") {
            return null
        }
        if (text === text.toUpperCase()) {
            alert('Text is Already UpperCase')
        }
        else{
            settext(text.toUpperCase())
        }
       }
       const lower = (event)=>{
        // settext('You clicked')
       
        if (text === "") {
            return null
        }
        if (text === text.toLowerCase()) {
            alert('Text is Already LowerCase')
        }
        else{
            settext(text.toLowerCase())
        }
        

       }
       const change = (event)=>{
        settext(event.target.value)
       }
       const clear =()=>{
        settext("")
       }


       return (
         <>
         <div className='main-div'> 
              <div className='container mt-4'>
              
                  <div className="mb-3">
                    <div className='txt'>
                    <label for="exampleFormControlTextarea1" className="form-label
                     new">LowerCase & UpperCase <span>Converter</span></label>
         
                    </div>
                    
                     <textarea 
                     className="form-control text" 
                     id="exampleFormControlTextarea1" 
                     rows="3"
                     value={text}
                     onChange={change}>
                     </textarea>
         
                  </div>
          <div className='buttons'>
          <button type='button' className='btn btn-success'
                  onClick={click}>Conert to UpperCase</button>

                  <button type='button' className='two btn btn-success'
                  onClick={lower}>Conert to LowerCase</button>
         
                  <button type='button' class="btn btn-dark btn2"
                  onClick={clear}>Clear All</button>
          </div>
                 
 
              </div>
              <div className='container sec-div'>
                <h1>Your Text Summery</h1>
                <p>{text.split(" ").length} Words & {text.length} Character</p>
              </div>
         </div>
         
       
         </>
       )
}

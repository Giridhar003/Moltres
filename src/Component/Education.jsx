import React,{useState}from 'react'
import "./Education.css";
import Logo1 from '../assets/Logo.png'
export default function Education() {
  const [showInfo,setShowInfo]=useState(false)
  const [showInfo1,setShowInfo1]=useState(false)
  const [showInfo2,setShowInfo2]=useState(false)
  const [showDisc,setShowDisc]=useState(true)
  const toggleState=()=>{
    setShowDisc(false)
    setShowInfo(true)
  } 
  const toggleState1=()=>{
    setShowDisc(false)
    setShowInfo1(true)
  } 
  const toggleState2=()=>{
    setShowDisc(false)
    setShowInfo2(true)
  } 
  const retoggleState= ()=>{
    setShowDisc(true)
    setShowInfo(false)
    setShowInfo1(false)
    setShowInfo2(false)
  } 
  return (
    <div>
       {showDisc && ( 
        <>
        <h1 className="Education-Head">Education</h1>
        <div className="Education-Card">
            <div className="Education-subcard" style={{ backgroundImage: `url(${Logo1})` }} onClick={toggleState}>
                <p >
                  First response
                </p>
            </div>
            <div className="Education-subcard"  style={{ backgroundImage: `url(${Logo1})` }} onClick={toggleState1}>
                <p >
                  First response
                </p>
            </div>
            <div className="Education-subcard"  style={{ backgroundImage: `url(${Logo1})` }} onClick={toggleState2}>
                <p>
                  First response
                </p>
            </div>
        </div>
        </>
      )}
      {
        showInfo &&(
          <div className="info-container">
              <button onClick={retoggleState}>X</button>
              <p>hello0</p>
          </div>
        )
      }
      {
        showInfo1 &&(
          <div className="info-container">
              <button onClick={retoggleState}>X</button>
              <p>hello1</p>
          </div>
        )
      }
      {
        showInfo2 &&(
          <div className="info-container">
              <button onClick={retoggleState}>X</button>
              <p>hello2</p>
          </div>
        )
      }
    </div>
  )
}
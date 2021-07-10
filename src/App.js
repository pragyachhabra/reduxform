import React,{useState} from 'react';
import './App.css';
import{connect} from 'react-redux'

function App(props) {
  const[name,setName]=useState('');
  const[name2,setName2]=useState('');
  
  return (

    <div className="App">
      <h1>redux form</h1>
      <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}}/>
      <input type="text" value={name2} onChange={(e)=>{setName2(e.target.value)}}/>
      <button onClick={()=>{props.submit(name,name2)}}>Submit</button>
     
    </div>
  );
}
const mapDispatchToProps=(dispatch)=>{
  return{
    submit:(name,name2)=>{dispatch({type:'SUBMIT',payload:{firstName:name,secondName:name2}})}
  }
}
export default connect(null,mapDispatchToProps)(App);

import React,{Component} from 'react';
import AutoCompleteText from "./components/AutoCompleteText";
import locations from './locations'; 

export default class App extends Component {
    render(){
      return(
        <div className = "App">
          <AutoCompleteText items = {locations}/>
        </div>
      )
    }
  
} 

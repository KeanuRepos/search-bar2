import React,{Component} from 'react';
import AutoCompleteSummary from '../hoc/AutoCompleteSummary'

class AutoCompleteText extends Component{
    constructor (props){
        console.log('0',props);
        super(props);
        
        this.state = {
            suggestions :[],
            text:'',
        };
        console.log('2',this.state);
    }

    onTextChanged = (e) => {//sets state
        console.log('3',e);
        const {items} = this.props;//destructuring
        console.log('7',this.props);
        const value = e.target.value;
        let suggestions = [];
        if (value.length > 0) {
            const regex = new RegExp(`^${value}`,'i');
            suggestions = items.filter(v => regex.test(v))
        }
        console.log('6',suggestions);
        this.setState(() => ({ suggestions ,text:value }));
    }
    suggestionSelected (value){//sets state
        console.log('4',value);
        this.setState(() => ({
            text:value,
            suggestions :[],
        }) )
    }

    renderSuggestions (){//creates ul
        console.log('5',this.state)
        const {suggestions} = this.state;
        if (suggestions.length === 0){
            return null;
        }
        return(
            <ul>
                {suggestions.map((item) =><li onClick={()=> this.suggestionSelected(item)}>{item}</li>)}
            </ul>
        )
    }

    render() {//outputs changed data
        const {text} = this.state
        return (
            <div >
                <input value ={text} className = "form-control my-0 py-1" type = "text" placeholder = "Search" aria-label = "Search"  onChange={this.onTextChanged}/>
                {this.renderSuggestions()}
            </div>
        )
        
    }
}
export default AutoCompleteSummary(AutoCompleteText)
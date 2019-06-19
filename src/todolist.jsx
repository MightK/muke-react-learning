import React, { Component ,Fragment} from 'react';
class Todolist extends Component {
    constructor(props){
        super(props)
        this.state={
            inputValue:"",
            list:[]
        }
    }
  handleInputChange=(e)=>{
    this.setState({inputValue:e.target.value})
    console.log(this.state.inputValue)
    }
    render() { 
        return (
            <Fragment>
                <div>
                    <input onChange={this.handleInputChange} value={this.state.inputValue}/>
                    <button>提交</button>
                </div> 
                <ul>
                    <li>kobe</li>
                    <li>wade</li>
                </ul>
            </Fragment>
            );
        }
    }
export default Todolist;
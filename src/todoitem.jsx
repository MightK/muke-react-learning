import React, { Component } from 'react';
class Todoitem extends Component {
     deleteIt=()=>{
        this.props.deleteItem(this.props.index);
     }
    render() { 
        return ( 
            <li onClick={this.deleteIt}>{this.props.item}</li>
         );
    }
}
export default Todoitem;
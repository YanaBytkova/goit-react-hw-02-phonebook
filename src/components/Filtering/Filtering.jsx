import React, { Component } from 'react';

import css from './Filtering.module.css';

export class Filtering extends Component {
  state = {
    contacts: [],
    filter: '',
  }
handleInputFilter = event => {
    const value = event.target.value;
    this.setState({filter: value});
    this.props.getFilteredContacts(value);
   
    
  };
  
 
  render() {
 
    return (
        
        <div>
            <p className={css.labelText}>Find contacts by name</p>
            <input type="text" value={this.state.filter} required onChange={this.handleInputFilter}/>
        </div>
          
       
    );
  }

}
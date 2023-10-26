import React, { Component } from 'react';

import css from './Filtering.module.css';

export class Filtering extends Component {
    state = {
        contacts: [],
        filter: '',
      }


handleInputFilter = event => {
    const value = event.target.value;
    
    this.setState({ filter: value });
    const filterInput = value;
    console.log("filter input", filterInput);
    this.props.getFilteredContacts(filterInput);
    
  };
  
 
  render() {
 
    return (
        
        <div>
            <p className={css.labelText}>Find contacts by name</p>
            <input type="text" required onChange={this.handleInputFilter}/>
        </div>
          
       
    );
  }

}
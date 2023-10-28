import React, { Component } from 'react';

import css from './Filtering.module.css';

export class Filtering extends Component {

handleInputFilter = event => {
    const value = event.target.value;
    this.props.setFilter(value);
    // console.log(`Filtering'': ${value}`);
    
  };
  
 
  render() {
 
    return (
        
        <div>
            <p className={css.labelText}>Find contacts by name</p>
            <input type="text" value={this.props.filter} required onChange={this.handleInputFilter}/>
        </div>
          
       
    );
  }

}
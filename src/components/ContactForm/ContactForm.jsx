
import React, { Component } from 'react';

import css from './ContactForm.module.css';

export class ContactForm extends Component {
    state = {
        contacts: [],
        // filter: '',
        name: '',
        // number: ''
      }

  handleSubmit = event => {
    event.preventDefault();

    const contactData = {
      name: this.state.name,
    };
    console.log("contactData", contactData);
    this.props.handleAddProduct(contactData);
  };

  handleInputChange = event => {
    const value = event.target.value;

    const name = event.target.name; // 'price'

    this.setState({
      [name]: value,
    });
    
  };

  render() {
    return (
        
      <form onSubmit={this.handleSubmit} className={css.form}>
        <label className={css.formLabel}>
          <p className={css.labelText}>Name</p>
          <input type="text" name="name" required onChange={this.handleInputChange}/>
        </label>
        <button type="submit">Add contact</button>
      </form>
    );
  }

}
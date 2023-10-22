import { Component } from 'react';
import { nanoid } from 'nanoid';

import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
export class App extends Component {
  state = {
        contacts: [],
        // filter: '',
        // name: '',
        // number: ''
      }
      
//   state = {
//     products: productsData,
//   };

//   handleDeleteProduct = productId => {
//     // "3"
//     // [{id: "1"}, {id: "2"}, {id: "3"}]
//     // [{id: "1"}, {id: "2"}]
//     this.setState({
//       products: this.state.products.filter(product => product.id !== productId),
//     });
//   };
handleAddProduct = contactData => {
  console.log("1", this.state.contacts);
      const isExist = this.state.contacts.some(
        contact => contact.name === contactData.name
      );
  
      if (isExist) {
        alert(`${contactData.name} is already in contacts.`);
        return
      }
  
      const finalNames = { // Object.assign({ id: nanoid() }, productData)
        ...contactData,
        id: nanoid(),
      };
      console.log(finalNames);
      this.setState(prevState => ({
        contacts: [...prevState.contacts, finalNames],
      }));
    
      console.log(this.state.contacts);
    };


  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm handleAddProduct={this.handleAddProduct}/>

        <h2>Contacts</h2>
        {/* <Filter filter={this.state.filter} /> */}
       {/* <ContactList contacts={this.state.contacts} /> */}
     </div>
    );
  }
}

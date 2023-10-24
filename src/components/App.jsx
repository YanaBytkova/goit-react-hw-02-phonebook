import { Component } from 'react';
import { nanoid } from 'nanoid';
import { Filtering } from 'components/Filtering/Filtering';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';

export class App extends Component {
  state = {
        contacts: [],
        filter: '',
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
      const isExist = this.state.contacts.some(
        contact => contact.name === contactData.name
      );
  
      if (isExist) {
        alert(`${contactData.name} is already in contacts.`);
        return
      }
  
      const finalNames = {
        ...contactData,
        id: nanoid(),
      };
      console.log(finalNames);
      this.setState(prevState => ({
        contacts: [...prevState.contacts, finalNames],
      }));
  
    };

    // handleDeleteProduct = productId => {
    //   // "3"
    //   // [{id: "1"}, {id: "2"}, {id: "3"}]
    //   // [{id: "1"}, {id: "2"}]
    //   this.setState(prevState => ({
    //     contacts: prevState.contacts.filter(
    //       contact => contact.id!== productId
    //     ),
    //   }));
    // };
    // handleInputFilter = event => {
    //   const value = event.target.value;
    //   console.log("filter", value);
      
    //   this.setState({ filter: value });
    //   const filterInput = this.state.filter;
    //   this.props.handleFilterContacts(filterInput);
    //   // const filterInput = value;
      
      
    // };
     
  filterContacts = (filterInput) => {
    // const filter =  this.setState(({
    //   filter: filterInput,
    // }));
    const filter = filterInput;
    this.setState(
      // {contacts: newContact,
      {filter: filterInput},
    );
    const  contacts = this.state.contacts;
    console.log("allContacts", contacts);
    console.log("filterContacts", contacts, "filter",filter);
    const newContact = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
    console.log("newC", newContact);
    // this.setState(
    //   {contacts: newContact},
    // );
    return newContact;
    
  }
  
    
  render() {
      // const contacts = this.state;
      // const filteredContacts = this.filterContacts;
      console.log(this.filterContacts);
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm handleAddProduct={this.handleAddProduct}/>
        <h2>Contacts</h2>
        
          <Filtering contacts={this.filterContacts} filterContacts={this.filterContacts}/>

       <ContactList contacts={this.state.contacts} />
     </div>
    );
  }
}

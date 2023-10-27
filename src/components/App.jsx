import { Component } from 'react';
import { nanoid } from 'nanoid';
import { Filtering } from 'components/Filtering/Filtering';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';

export class App extends Component {
  state = {
        contacts: [],
        filter: '',
  
      }
      

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

      this.setState(prevState => ({
        contacts: [...prevState.contacts, finalNames],
      }));
  
    };

    handleDeleteContacts = contactId => {
      
      this.setState(prevState => ({
        contacts: prevState.contacts.filter(
          contact => contact.id!== contactId
        ),
      }));
    };
    
  
     
  getFilteredContacts = (filterInput) => {
    const filter = filterInput;
    // this.setState(prevState => ({
    //   filter: [prevState.filter + filterInput]
    // }));
    // this.setState({ filter: filterInput });
    const contacts = this.state.contacts;
    // const filter = this.state.filter;
    // console.log("Contacts", contacts, "filter",filter);
    if (filter) {
      return contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
      );
    }
       
   
  }
  
  render() {

    const filteredContacts =  this.getFilteredContacts();
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm handleAddProduct={this.handleAddProduct}/>
        <h2>Contacts</h2>
        
        <Filtering getFilteredContacts={this.getFilteredContacts} />
        {/* {filteredContacts ? (<ContactList contacts={filteredContacts} handleDeleteContacts={this.handleDeleteContacts}/>) : (<ContactList contacts={this.state.contacts} handleDeleteContacts={this.handleDeleteContacts}/>) } */}
        <ContactList contacts={this.filteredContacts()} handleDeleteContacts={this.handleDeleteContacts}/>
     </div>
    );
  }
}

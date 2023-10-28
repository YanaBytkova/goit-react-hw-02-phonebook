
import { Component } from 'react';
import { nanoid } from 'nanoid';
import { Filtering } from 'components/Filtering/Filtering';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import css from './App.module.css';

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
    
    setFilter=(value)=>{
      this.setState({filter: value});
    }
     
  getFilteredContacts = () => {
    const filter = this.state.filter;
    const contacts = this.state.contacts;
    if (filter) {
      return contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
      );
    } 
    return contacts
  }

  
  
  render() {
    const filteredContacts =  this.getFilteredContacts();
    return (
      <div className={css.container}>
        <h1>Phonebook</h1>
        <ContactForm handleAddProduct={this.handleAddProduct}/>
        <h2>Contacts</h2>
        <Filtering  filter={this.state.filter} setFilter={this.setFilter} />
        <ContactList contacts={filteredContacts} handleDeleteContacts={this.handleDeleteContacts}/>
     </div>
    );
  }
}


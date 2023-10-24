// import React, { Component } from 'react';

// import css from './ContactList.module.css';

import css from './ContactList.module.css';
export const ContactList = ({ contacts }) => (
    
    <div>
        
        <ul className={css.list}>
          {contacts.map(contact => (
            <li key={contact.id} className={css.item}>
              <span className={css.name}>{contact.name}</span>
              <span className={css.number}>{contact.number}</span>
            </li>
          ))}
        </ul>
      </div>
);



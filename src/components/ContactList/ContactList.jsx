import React from 'react';
import Contact from '../Contact/Contact'
import styles from './ContactList.module.css'



const ContactList = ({ contacts}) => {
    
    return (
        <ul className={styles.contacts}>
      {contacts.map(contact => (
          <li key={contact.id}>
          <Contact
            name={contact.name}
            number={contact.number}
          />
          <button className={styles.delete}>Delete</button>
         <div>
            📞
            👤

    </div>

        </li>
      ))}
        </ul>
        
    );
};

export default ContactList;
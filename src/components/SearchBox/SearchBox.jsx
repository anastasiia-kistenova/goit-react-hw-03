import React from 'react';
import styles from './SearchBox.module.css'

function SearchBox({ value, onChange }) {
    return (
        <div>
      <h2 className={styles.findContacts}>Find contacts by name:</h2>
      <input
      className={styles.search}
      type="text"
      placeholder="Search by name..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
            />
            </div>
  );
}


export default SearchBox;
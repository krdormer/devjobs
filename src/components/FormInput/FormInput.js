import React from 'react';
import './FormInput.styles.css';

const FormInput = () => {
  return (
    <form className="Form-Input">
      <input
        type="text"
        className="keyword-search"
        placeholder="Filter by title, companies, expertise..."
      />
      <div className="keyword-divider" />
      <input
        type="text"
        className="location-search"
        placeholder="Filter by location..."
      />
      <div className="location-divider" />
      <div className="check-submit-container">
        <div className="checkbox-container">
          <input name="check-ft" type="checkbox" className="check-ft" />
          <label for="check-ft" className="check-ft-label">
            Full Time Only
          </label>
        </div>
        <input type="submit" className="search-submit" value="Search" />
      </div>
    </form>
  );
};

export default FormInput;

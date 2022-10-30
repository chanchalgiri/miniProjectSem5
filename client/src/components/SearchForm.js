import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Header, Icon } from 'semantic-ui-react'
import '../styles/CustomStyle.css';

function SearchForm(props) {
  return (
    <div className="custom-content">
      <Header as='h1'>Jobb</Header>
      <Header as='h2'>Find your next job here!</Header>
    <form className="landingForm">
      <div className="search-form">
        <input
          onChange={props.handleInputChange}
          value={props.value}
          name="search"
          type="text"
          className="form-field"
          placeholder="Job title or keyword"
          id="search"
        />

        <Link 
              className="searchBtn "
              to={`/searchResults/${props.value}`}
            >
              Search Jobs
            </Link>
      </div>
    </form>
    </div>
  );
}

export default SearchForm;
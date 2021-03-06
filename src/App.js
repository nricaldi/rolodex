import { Component } from 'react';
import './App.css';

import { CardList } from './components/card-list/card-list';
import { SearchBar } from './components/search-bar/search-bar';
class App extends Component {

  constructor() {
    super();
    
    this.state = {
      contacts: [],
      searchField: "",
      query: ''
    };

    // this.handleChange = this.handleChange.bind(this);
  }

  // calls as soon as this component is rendered
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(users => this.setState({ contacts: users }))
  }

  handleChange = e => {
    this.setState({ searchField: e.target.value, query: e.target.value });
  }

  render() {
    const { contacts, searchField, query } = this.state;
    const filteredContacts = contacts.filter(contact => 
      contact.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return(
      <div className="App">
        

        <h1>Contact Rolodex</h1>
        <SearchBar 
          placeholder="Search rolodex" 
          handleChange={this.handleChange}
          />
        <h3>Showing results for "{query}"</h3>
        <CardList contacts={filteredContacts} /> 

      </div>
    );

  }
}

export default App;
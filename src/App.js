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
    this.setState({ searchField: e.target.value });
  }

  render() {
    const { contacts, searchField } = this.state;
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
        <CardList contacts={filteredContacts} /> 

      </div>
    );

  }
}

export default App;
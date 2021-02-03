import { Component } from 'react';
import './App.css';

import { CardList } from './components/card-list/card-list';

class App extends Component {

  constructor() {
    super();
    
    this.state = {
      contacts: [],
      searchField: "",
    };
  }

  // calls as soon as this component is rendered
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(users => this.setState({ contacts: users }))
  }

  render() {

    const { contacts, searchField } = this.state;
    const filteredContacts = contacts.filter(contact => 
      contact.name.toLowerCase().includes(searchField.toLowerCase())
    );


    return(
      <div className="App">

        <h1>Contact Rolodex</h1>
        <input type="search" 
               placeholder="Search rolodex" 
               className="search-field" 
               onChange={ e => this.setState({ searchField: e.target.value })}
        />
        <CardList contacts={filteredContacts} /> 

      </div>
    );

  }
}


export default App;
import { Component } from 'react';
import './App.css';

import { CardList } from './components/card-list/card-list';

class App extends Component {

  constructor() {
    super();
    
    this.state = {
      contacts: []
    };
  }

  // calls as soon as this component is rendered
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(users => this.setState({ contacts: users }))
  }

  render() {
    return(
      <div className="App">

        <CardList contacts={this.state.contacts} /> 

      </div>
    );

  }
}


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;

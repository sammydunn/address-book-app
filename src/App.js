
import { Component } from 'react';
import axios from 'axios'
import './App.css';
import Contacts from './components/Contacts';


class App extends Component {

  constructor(){
    super()
    this.state = {
      listOfContacts : []
    }
  }

  componentDidMount(){
    axios('https://randomuser.me/api?results=25')
    .then(res => {
      const listOfContacts = res.data.results
      this.setState({listOfContacts})
      console.log(listOfContacts)
    })
  }

  render (){
    return (
      <div className="App">
          <Contacts list={this.state.listOfContacts} />
      </div>
    );

  }
}

export default App;

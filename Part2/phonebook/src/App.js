import React from 'react';
import NewEntryForm from './components/NewEntryForm';
import ViewEntry from './components/ViewEntry';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      persons: [
        {
          name: 'Arto Hellas',
          number: '045 1234 567'  }
      ],
      newName: '', 
      newNumber: ''
    }
    this.addContact = this.addContact.bind(this);
    this.handleNameInput = this.handleNameInput.bind(this);
    this.handleNumberInput = this.handleNumberInput.bind(this);
  }
  //handles adding the name to list
  addContact = (event) =>{
    event.preventDefault()
    //const nameObject = 
    if(this.validateNumberInput(this.state.newNumber)){
      if(this.validateNameInput(this.state.newName)){
        const personObject = {name: this.state.newName, 
                              number: this.state.newNumber}
        const persons = this.state.persons.concat(personObject)
        this.setState({
          persons, 
          newName: '',
          newNumber: ''
        })
      }
    }
    
  }
    
  //updates the changes to state from input field
  handleNameInput = (event) =>{
    console.log(event.target.value)
    this.setState({newName: event.target.value, newNumber: this.state.newNumber})
  }
  handleNumberInput = (event) =>{
    console.log(event.target.value)
    this.setState({newName: this.state.newName, newNumber: event.target.value})
  }

  validateNameInput = (temp) => {
    let people = this.state.persons
    if(people.map(p => p.name).includes(temp)){
      alert('Tämän niminen henkilö löytyy jo.')
    }
    return true
  }
  validateNumberInput = (temp) => {
    let people = this.state.persons
    if(people.map(p => p.number).includes(temp)){
      alert('Tämä numero löytyy jo')
      return false
    }
    else{
      return true
    }
  }

  render() {
    return (
      <div>
        <NewEntryForm />
        <ViewEntry list={this.persons.this.state}/>
        
      </div>
    )
    
  }
  
}

export default App

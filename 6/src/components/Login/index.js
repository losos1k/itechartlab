import React, { Component } from 'react'
import { connect } from 'react-redux'

@connect((store) => {
  return {
    login: store.user.login,
    password: store.user.password,
  };
})
export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      login: '',
      password: ''
    };
  }

  handleLogin = (e) => {
    const loginVal = e.target.value;
    this.setState({ login: loginVal });
  }

  handlePassword = (e) => {
    const passwordVal = e.target.value;
    this.setState({ password: passwordVal });
  }

  handleSubmit = (e) => {
    var userData = this.state;
    this.props.onHandleData(userData);
    console.log(userData);
    console.log('success!');
  }

  render() {
    return (
      <div className="Login">
        <input placeholder="Login" className="dataInput" value={this.state.value} onChange={this.handleLogin} />
        <input placeholder="Password" className="dataInput" value={this.state.value} onChange={this.handlePassword} />
        <input type="Submit" defaultValue="Submit" onClick={this.handleSubmit} />
      </div>
    );
  }
}


// var Search = React.createClass({

//   getInitialState: function () {
//     return {
//       searchValue: ''
//     };
//   },


//   handleSearch: function (event) {
//     var searchQuery = event.target.value.toLowerCase();
//     // Передаем введенные данные в родительский компонент.
//     this.props.onHandleSearch(searchQuery);
//     this.setState({
//       searchValue: event.target.value
//     });
//   },

//   render: function () {

//     return (
//       <input type="text" className="search" onChange={this.handleSearch} value={this.state.searchValue} />
//     );

//   }

// });

// var NotesApp = React.createClass({

//   getInitialState: function () {
//     return {
//       notes: [],
//       searchValue: '',
//     }
//   },

//   // Передаем этот метод в компонент Search.
//   // Именно так можно передать данные из дочернего компонента в родительский.
//   handleSearch: function (value) {
//     this.setState({ searchValue: value });
//   },

//   render: function () {
//     // данные фильтруем здесь
//     var filteredNotes;
//     if (this.state.searchValue !== '') {
//       filteredNotes = this.state.notes.filter(note => note.text.toLowerCase().indexOf(this.state.searchValue.toLowerCase()) !== -1);
//     } else {
//       filteredNotes = this.state.notes;
//     }

//     return (
//       <div className="notes-app">
//         <h2 className="app-header">NotesApp</h2>
//         <Search onHandleSearch={this.handleSearch} />
//         <NoteEditor onNoteAdd={this.handleNodeAdd} />
//         <NotesGrid notes={filteredNotes} onNoteDelete={this.handleNodeDelete} />
//       </div>
//     );
//   }

// });
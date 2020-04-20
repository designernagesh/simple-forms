import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      title: "Mr.",
      name: 'ReactJS',
      email: "nagesh@gmail.com",
      aboutMe: "yes",
      agree: true
    };
  }
  /*changeName = (e) => {
    this.setState({
      name: e.target.value
    })
  }
  changeEmail = (e) => {
    this.setState({
      email: e.target.value
    })
  }
  changeAbout = (e) => {
    this.setState({
      aboutMe: e.target.value
    })
  }
  changeTitle = (e) => {
    this.setState({
      title : e.target.value
    })
  }
  agreeTerms = (e) => {
    this.setState({
      agree : e.target.checked
    })
  }
  submitForm = (e) => {    
    console.log( this.state )
  }*/

  changeHandler = (e) => {
    let key = e.target.name
    let value = e.target.value
    let checked = e.target.checked
    let isCheckBox =  e.target.type === "checkbox"
    this.setState({
      [key]: isCheckBox ? checked : value
    })    
  }

  submitForm = (e) => {    
    console.log( this.state )
  }
  render() {
    return (
      <div>
        <Hello pageTitle={this.state.name} />
        <table width="100%" border="1" cellPadding="5" cellSpacing="0">
          <tbody>
              <tr>
                  <th>Title</th> 
                  <td>
                    <select name="title" 
                    value={ this.state.title } 
                    onChange={ this.changeHandler }>
                    <option value="Sri">Sri</option>
                    <option value="Mr.">Mr.</option>
                    <option value="Mrs.">Mrs.</option>
                    </select>
                  </td>
              </tr>
              <tr>
                  <th>Name</th> 
                  <td><input name="name" type="text" 
                  value={ this.state.name }
                  onChange={ this.changeHandler } /></td>
              </tr>
              <tr>
                  <th>Email</th> 
                  <td><input name="email" type="text" 
                  value={ this.state.email }
                  onChange={ this.changeHandler } /></td>
              </tr>
              <tr>
                  <th>About Me</th> 
                  <td><textarea name="aboutMe"
                  value={ this.state.aboutMe } 
                  onChange={ this.changeHandler } ></textarea></td>
              </tr>
              <tr>
                  <th>I Agree the above</th> 
                  <td><input name="agree" type="checkbox" 
                  checked={ this.state.agree }
                  onChange={ this.changeHandler } /></td>
              </tr>
              <tr>
                  <td colSpan="2" style={{textAlign: "center"}}>
                  <input type="submit" value="Submit"
                  onClick={ this.submitForm } /> </td>
              </tr>                     
              </tbody>
          </table>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));

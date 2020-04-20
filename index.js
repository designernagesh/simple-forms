import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      title: "Mr.",
      name: 'React',
      email: "nagesh@gmail.com",
      aboutMe: "yes",
      agree: true
    };
  }
  changeName = (e) => {
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
    let value = e.target.value
    let key = e.target.name
    console.log( this.state )
  }
  render() {
    return (
      <div>
        <Hello name={this.state.name} />
        <table width="100%" border="1" cellPadding="5" cellSpacing="0" style={{ borderCcollapse: "collapse" }}>
          <tbody>
              <tr>
                  <th>Title</th> 
                  <td>
                    <select name="title" value={ this.state.title } onChange={ this.changeTitle }>
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
                  onChange={ this.changeName } /></td>
              </tr>
              <tr>
                  <th>Email</th> 
                  <td><input name="email" type="text" 
                  value={ this.state.email }
                  onChange={ this.changeEmail } /></td>
              </tr>
              <tr>
                  <th>About Me</th> 
                  <td><textarea name="aboutMe"
                  value={ this.state.aboutMe } 
                  onChange={ this.changeAbout } ></textarea></td>
              </tr>
              <tr>
                  <th>I Agree the above</th> 
                  <td><input name="agree" type="checkbox" 
                  checked={ this.state.agree }
                  onChange={ this.agreeTerms } /></td>
              </tr>
              <tr>
                  <td colspan="2" style={{textAlign: "center"}}>
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

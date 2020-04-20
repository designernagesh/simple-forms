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
  submitForm = () => {
    console.log( this.state )
  }
  render() {
    return (
      <div>
        <Hello name={this.state.name} />
        <table width="100%" border="0" cellPadding="5" cellSpacing="0">
          <tbody>
              <tr>
                  <th>Title</th> 
                  <td>
                    <select value={ this.state.title } onChange={ this.changeTitle }>
                    <option value="Sri">Sri</option>
                    <option value="Mr.">Mr.</option>
                    <option value="Mrs.">Mrs.</option>                    
                    </select>
                  </td>
              </tr>
              <tr>
                  <th>Name</th> 
                  <td><input type="text" 
                  value={ this.state.name }
                  onChange={ this.changeName } /></td>
              </tr>
              <tr>
                  <th>Email</th> 
                  <td><input type="text" 
                  value={ this.state.email }
                  onChange={ this.changeEmail } /></td>
              </tr>
              <tr>
                  <th>About Me</th> 
                  <td><textarea 
                  value={ this.state.aboutMe } 
                  onChange={ this.changeAbout } ></textarea></td>
              </tr>
              <tr>
                  <th>I Agree the above</th> 
                  <td><input type="checkbox" 
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

import React from 'react';
import {
    Row,
    Col
} from 'reactstrap';
import '../auth/auth.css';

function login(username, password) {
  const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password })
  };

  return fetch('/login.php', requestOptions)
      .then(handleResponse)
      .then(user => {
          // login successful if there's a user in the response
          if (user) {
              // store user details and basic auth credentials in local storage 
              // to keep user logged in between page refreshes
              user.authdata = window.btoa(username + ':' + password);
              localStorage.setItem('user', JSON.stringify(user));
              alert('logged in');
          }

          return user;
      });
}

function logout() {
  // remove user from local storage to log user out
  localStorage.removeItem('user');
}



function handleResponse(response) {
  return response.text().then(text => {
      const data = text && JSON.parse(text);
      if (!response.ok) {
          if (response.status === 401) {
              // auto logout if 401 response returned from api
              logout();
            //  location.reload(true);
          }

          const error = (data && data.message) || response.statusText;
          return Promise.reject(error);
      }

      return data;
  });
}
var  doPost = function() {



  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ title: 'React Hooks POST Request Example' })
};

fetch('/post.php')
  .then(response => response.json())
  .then(data => alert(data.action));


 
    
      
 


  }
  function preventSubmit(evt) { 
    evt.preventDefault();
  
  };

  class Meeting extends React.Component {

  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

 
render() {
    return (
        <div>
        
            <Row>
                <Col sm={8}>

                 <center> <h1>Connexion</h1></center>
                 <center><p>Veuillez entrer vos indentifiants pour acceder au platforme</p></center> 
                  <br></br>
                <form onSubmit={preventSubmit}>
  <div className="form-group row">
    <label for="email" className="col-4 col-form-label">Email</label> 
    <div className="col-8">
      <input id="email" name="email" type="text" className="form-control" />
    </div>
  </div>
  <div className="form-group row">
    <label for="password" className="col-4 col-form-label">Mot de passe</label> 
    <div className="col-8">
      <input id="password" name="password" type="password" className="form-control" />
    </div>
  </div> 
  <div className="form-group row">
    <div className="offset-4 col-8">
      <button  onClick={login} name="submit" type="submit" className="btn btn-primary">Connexion</button>
    </div>
  </div>
</form>
                </Col>
            </Row>
            
        </div>
    );
}
}

export default Meeting;

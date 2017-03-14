import React from 'react';
import { Link } from 'react-router';

class Greeting extends React.Component {


  render() {
    const {currentUser} = this.props;

    if (currentUser){
      return (


        <div>
          <header className="greeting">Welcome, {currentUser.username}</header>
          <button onClick={this.props.logout}>logout</button>

        </div>
      );
    }else{
      return (
        <nav className='login-signup'>
          <Link to="/login" activeClassName="current">Login</Link>&nbsp;or&nbsp;
          <Link to="/signup" activeClassName="current">Sign up!</Link>
        </nav>
      );
    }
  }
}

export default Greeting;

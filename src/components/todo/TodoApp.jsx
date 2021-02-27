import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { Navbar } from "../../components/header/navbar";
import { Footer } from "../footer/footer";
import { LoginComponent } from "../login/login";


class TodoApp extends Component {

  render() {
    return (
      <div className="todoApp">

        <Router>
          <Navbar />
          <Switch>
            <Route path="/" exact component={LoginComponent} />
            <Route path="/login" component={LoginComponent} />
            <Route path="/logout" component={LogoutComponent} />
            <Route path="/welcome/:name" component={WelcomeComponent} />
            <Route path="/todos" component={ListTodosComponent} />
            <Route component={ErrorComponent} />
          </Switch>
          <Footer/>
        </Router>

      </div>
    );
  }
}

class ListTodosComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        {
          id: 1,
          description: "Learn React",
          done: false,
          targetDate: new Date(),
        },
        {
          id: 2,
          description: "Learn VueJs",
          done: false,
          targetDate: new Date(),
        },
        {
          id: 3,
          description: "Learn Angular",
          done: false,
          targetDate: new Date(),
        },
      ],
    };
  }

  render() {
    return (
      <div>
        <h1>List Todos</h1>
        <table className="table table-inverse table-responsive table-hover">
          <thead>
            <tr>
              <th>Id</th>
              <th>Description</th>
              <th>Target Date</th>
              <th>Is Complete</th>
            </tr>
          </thead>
          <tbody>
            {this.state.todos.map((todo) => (
              <tr key={todo.id}>
                <td>{todo.id}</td>
                <td>{todo.description}</td>
                <td>{todo.targetDate.toDateString()}</td>
                <td>{todo.done.toString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

class WelcomeComponent extends Component {
  render() {
    return (
      <div>
        <div>Welcome {this.props.match.params.name}</div>
        <Link to="/todos">Go to todos page</Link> <br />
        <button
          onClick={() => {
            this.props.history.goBack();
          }}
        >
          Go Back
        </button>
      </div>
    );
  }
}

class ErrorComponent extends Component {
  render() {
    return (
      <div>
        <div>404 NOT FOUND</div>
        <button
          onClick={() => {
            this.props.history.goBack();
          }}
        >
          Go Back
        </button>
      </div>
    );
  }
}

class LogoutComponent extends Component {
  render() {
    return (
      <div>
        <h1>You are logged out</h1>
        <div className="container">
          Thank you
        </div>
      </div>
    );
  }
}



// function ShowInvalidCredetials(props) {
//     if (props.hasLoginFailed) {
//         return <div>Invalid Credentials</div>
//     } else {
//         return null;
//     }
// }

// function ShowLoginSuccessful(props) {
//     if (props.showSuccessMessage) {
//         return <div>Login Successful</div>
//     } else {
//         return null;
//     }
// }

export default TodoApp;

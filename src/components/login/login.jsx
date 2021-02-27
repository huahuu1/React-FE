import React, { Component } from "react";

export class LoginComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "huahuu1",
      password: "123",
      hasLoginFailed: false,
      showSuccessMessage: false,
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  // handlePasswordChange = (event) => {
  //     this.setState({
  //         password: event.target.value
  //     });
  // };

  loginClicked = () => {
    if (this.state.username === "huahuu1" && this.state.password === "123") {
      this.props.history.push(`/welcome/${this.state.username}`);
      // this.setState({showSuccessMessage:true});
      // this.setState({hasLoginFailed:false});
    } else {
      this.setState({ showSuccessMessage: false });
      this.setState({ hasLoginFailed: true });
    }
  };

  render() {
    return (
      <div>
        {/* <ShowInvalidCredetials hasLoginFailed={this.state.hasLoginFailed}/>
                  <ShowLoginSuccessful showSuccessMessage={this.state.showSuccessMessage}/> */}
        <section className="py-50">
          <div className="container">
            <div className="row justify-content-center no-gutters">
              <div className="col-lg-5 col-md-5 col-12">
                <div className="box box-body">
                  <div className="content-top-agile pb-0 pt-20">
                    <h2 className="text-primary">Let's Get Started</h2>
                    <p className="mb-0">Sign in to continue to Joblly.</p>
                  </div>
                  <div className="p-40">
                    {this.state.showSuccessMessage && (
                      <div className="alert alert-warning">
                        Login Successful
                      </div>
                    )}
                    {this.state.hasLoginFailed && (
                      <div className="alert alert-warning">
                        Wrong username or password!!!
                      </div>
                    )}
                    {/* <form action="index.html" method="post"> */}
                    <div className="form-group">
                      <div className="input-group mb-15">
                        <div className="input-group-prepend">
                          <span className="input-group-text bg-transparent">
                            <i className="ti-user"></i>
                          </span>
                        </div>
                        <input
                          type="text"
                          name="username"
                          className="form-control pl-15 bg-transparent"
                          placeholder="Username"
                          value={this.state.username}
                          onChange={this.handleChange}
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="input-group mb-15">
                        <div className="input-group-prepend">
                          <span className="input-group-text  bg-transparent">
                            <i className="ti-lock"></i>
                          </span>
                        </div>
                        <input
                          type="password"
                          name="password"
                          className="form-control pl-15 bg-transparent"
                          placeholder="Password"
                          value={this.state.password}
                          onChange={this.handleChange}
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-6">
                        <div className="checkbox ml-5">
                          <input type="checkbox" id="basic_checkbox_1" />
                          <label htmlFor="basic_checkbox_1">Remember Me</label>
                        </div>
                      </div>
                      {/* /.col */}
                      <div className="col-6">
                        <div className="fog-pwd text-right">
                          <a href="#" className="hover-warning">
                            <i className="ion ion-locked"></i> Forgot pwd?
                          </a>
                          <br></br>
                        </div>
                      </div>
                      {/* /.col */}
                      <div className="col-12 text-center">
                        <button
                          type="submit"
                          className="btn btn-info btn-block mt-15"
                          onClick={this.loginClicked}
                        >
                          SIGN IN
                        </button>
                      </div>
                      {/* /.col */}
                    </div>
                    {/* </form> */}
                    <div className="text-center">
                      <p className="mt-15 mb-0">
                        Don't have an account?{" "}
                        <a href="register.html" className="text-warning ml-5">
                          Register
                        </a>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="text-center">
                  <p className="mt-20">- Login With -</p>
                  <p className="d-flex gap-items-2 mb-0 justify-content-center">
                    <a
                      className="btn btn-social-icon btn-round btn-facebook"
                      href="#"
                    >
                      <i className="fa fa-facebook"></i>
                    </a>
                    <a
                      className="btn btn-social-icon btn-round btn-twitter"
                      href="#"
                    >
                      <i className="fa fa-twitter"></i>
                    </a>
                    <a
                      className="btn btn-social-icon btn-round btn-instagram"
                      href="#"
                    >
                      <i className="fa fa-instagram"></i>
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}


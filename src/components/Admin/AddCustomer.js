import Axios from "axios";
import React, { Component, Fragment } from "react";
import LeftAdmin from "./LeftAdmin";

export default class AddCustomer extends Component {
  constructor(props) {
    super(props);

    this.onChangeFirstName = this.onChangeFirstName.bind(this);
    this.onChangeLastName = this.onChangeLastName.bind(this);
    this.onChangeGender = this.onChangeGender.bind(this);
    this.onChangeUserEmail = this.onChangeUserEmail.bind(this);
    this.onChangeAadharNo = this.onChangeAadharNo.bind(this);
    this.onChangePhoneNo = this.onChangePhoneNo.bind(this);
    this.onChangeAddress = this.onChangeAddress.bind(this);
    this.onChangeAcountNo = this.onChangeAcountNo.bind(this);
    this.onChangePin = this.onChangePin.bind(this);
    this.onChangeOpeningBalnce = this.onChangeOpeningBalnce.bind(this);

    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      first_name: "",
      last_name: "",
      gender: "",
      email: "",
      aadhar_no: "",
      phone_no: "",
      address: "",
      acount_no: "",
      pin: "",
      opening_balnce: "",
    };
  }

  onChangeFirstName(e) {
    this.setState({ first_name: e.target.value });
  }
  onChangeLastName(e) {
    this.setState({ last_name: e.target.value });
  }
  onChangeGender(e) {
    this.setState({ gender: e.target.value });
  }
  onChangeUserEmail(e) {
    this.setState({ email: e.target.value });
  }

  onChangeAadharNo(e) {
    this.setState({ aadhar_no: e.target.value });
  }
  onChangePhoneNo(e) {
    this.setState({ phone_no: e.target.value });
  }
  onChangeAddress(e) {
    this.setState({ address: e.target.value });
  }
  onChangeAcountNo(e) {
    this.setState({ acount_no: e.target.value });
  }
  onChangePin(e) {
    this.setState({ pin: e.target.value });
  }
  onChangeOpeningBalnce(e) {
    this.setState({ opening_balnce: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    const userObject = {
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      gender: this.state.gender,
      email: this.state.email,
      aadhar_no: this.state.aadhar_no,
      phone_no: this.state.phone_no,
      address: this.state.address,
      acount_no: this.state.acount_no,
      pin: this.state.pin,
      opening_balnce: this.state.opening_balnce,
    };
    Axios.post("http://localhost:8000/myCustomer", userObject)
      .then((res) => {
        console.log(res.data);
        alert(res.data.message);
      })
      .catch((error) => {
        console.log(error);
      });

    this.setState({
      first_name: "",
      last_name: "",
      gender: "",
      email: "",
      aadhar_no: "",
      phone_no: "",
      address: "",
      acount_no: "",
      pin: "",
      opening_balnce: "",
    });
  }

  render() {
    return (
      <Fragment>
        <div className="row">
          <div className="col-2">
            <LeftAdmin />
          </div>
          <div className="col-10">
            <div className="row">
              <div className="col-2"></div>

              <div className="col-8">
                <div className="card text-center col-10 m-3 p-3 card_section">
                  <div className="card-header col-12 text-info">
                    <h3>Please Fill in the following details...</h3>
                  </div>
                  <div className="card-body m-2 p-2">
                    <form onSubmit={this.onSubmit}>
                      <div className="form-row">
                        <div className="col">
                          <input
                            type="text"
                            className="form-control"
                            name="first_name"
                            value={this.state.first_name}
                            onChange={this.onChangeFirstName}
                            placeholder="First name"
                            required
                          />
                        </div>
                        <div className="col">
                          <input
                            type="text"
                            className="form-control"
                            name="last_name"
                            placeholder="Last name"
                            value={this.state.last_name}
                            onChange={this.onChangeLastName}
                            required
                          />
                        </div>
                      </div>
                      <div className="row m-1 p-1">
                        <label className="form-check-label m-2">
                          {" "}
                          Gender :{" "}
                        </label>{" "}
                        <br />
                        <div className="form-check-inline" required>
                          <label className="form-check-label">
                            <input
                              type="radio"
                              className="form-check-input"
                              value="Male"
                              checked={this.state.gender === "Male"}
                              onChange={this.onChangeGender}
                              name="gender"
                            />{" "}
                            Male
                          </label>
                        </div>
                        <div className="form-check-inline">
                          <label className="form-check-label">
                            <input
                              type="radio"
                              className="form-check-input"
                              value="Female"
                              checked={this.state.gender === "Female"}
                              onChange={this.onChangeGender}
                              name="gender"
                            />{" "}
                            Female
                          </label>
                        </div>
                        <div className="form-check-inline ">
                          <label className="form-check-label">
                            <input
                              type="radio"
                              className="form-check-input"
                              value="Other"
                              checked={this.state.gender === "Other"}
                              onChange={this.onChangeGender}
                              name="gender"
                            />{" "}
                            Other
                          </label>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col">
                          <input
                            type="email"
                            placeholder="Email Address"
                            name="email"
                            value={this.state.email}
                            onChange={this.onChangeUserEmail}
                            class="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            required
                          />
                        </div>
                        <div class="col">
                          <input
                            type="text"
                            className="form-control"
                            name="phone_no"
                            value={this.state.phone_no}
                            onChange={this.onChangePhoneNo}
                            placeholder="Phone Number"
                            maxLength="10"
                            required
                          />
                        </div>
                      </div>
                      <br />
                      <div className="form-group">
                        <textarea
                          className="form-control"
                          rows="3"
                          name="address"
                          value={this.state.address}
                          onChange={this.onChangeAddress}
                          placeholder="Address.. "
                          id="comment"
                          required
                        ></textarea>
                      </div>
                      <div className="form-row">
                        <div className="col">
                          <input
                            type="text"
                            className="form-control"
                            maxLength="12"
                            name="aadhar_no"
                            value={this.state.aadhar_no}
                            onChange={this.onChangeAadharNo}
                            placeholder="Aadhar Number"
                            required
                          />
                        </div>
                        <div className="col">
                          <input
                            type="text"
                            className="form-control"
                            maxLength="3"
                            name="opening_balnce"
                            value={this.state.opening_balnce}
                            onChange={this.onChangeOpeningBalnce}
                            placeholder="Opening Balance"
                            required
                          />
                        </div>
                      </div>{" "}
                      <br />
                      <div className="form-row">
                        <div className="col">
                          <input
                            type="text"
                            className="form-control"
                            name="acount_no"
                            value={this.state.acount_no}
                            onChange={this.onChangeAcountNo}
                            placeholder="Account Number"
                          />
                        </div>
                        <div className="col">
                          <input
                            type="text"
                            name="pin"
                            maxLength="4"
                            class="form-control"
                            value={this.state.pin}
                            onChange={this.onChangePin}
                            placeholder="Enter ur PIN (4 Digit) "
                          />
                        </div>
                      </div>{" "}
                      <br />
                      <div className="card-footer text-left">
                        <button type="submit" className="btn btn-outline-info">
                          {" "}
                          Add Customer{" "}
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="col-2"></div>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

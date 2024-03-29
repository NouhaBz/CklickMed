import React, { Component } from "react";
import patientsDataService from "../services/patient.service";

export default class AddTpatient extends Component {
  constructor(props) {
    super(props);
    this.onChangename = this.onChangename.bind(this);
    this.onChangeage = this.onChangeage.bind(this);
    this.onChangeadress = this.onChangeadress.bind(this);
    this.onChangemail= this.onChangemail.bind(this);
    this.onChangetel = this.onChangetel.bind(this);
    this.onChangecdiseases = this.onChangecdiseases.bind(this);
    this.onChangencard= this.onChangencard.bind(this);
    this.savepatient = this.savepatient.bind(this);
    this.newpatient = this.newpatient.bind(this);

    this.state = {
      id: null,
      name: "",
      age: 0, 
      adress :"",
      mail :"",
      tel :"",
      cdiseases :"",
      ncard :"",

      submitted: false
    };
  }

  onChangename(e) {
    this.setState({
      name: e.target.value
    });
  }
  onChangeage(e) {
    this.setState({
      age: e.target.value
    });
  }
  onChangeadress(e) {
    this.setState({
      adress: e.target.value
    });
  }
  onChangetel(e) {
    this.setState({
      tel: e.target.value
    });
  }
  onChangemail(e) {
    this.setState({
      mail: e.target.value
    });
  }
  onChangencard(e) {
    this.setState({
      ncard: e.target.value
    });
  }

  onChangecdiseases(e) {
    this.setState({
      cdiseases: e.target.value
    });
  }

  savepatient () {
    var data = {
      name: this.state.name,
      age: this.state.age,
      adress: this.state.adress,
      tel: this.state.tel,
      mail: this.state.mail,
      ncard: this.state.ncard,
      cdiseases: this.state.cdiseases
    };

    patientsDataService.create(data)
      .then(response => {
        this.setState({
          id: response.data.id,
          name: response.data.name,
          age: response.data.age,
          adress: response.data.adress,
          tel: response.data.tel,
          mail: response.data.mail,
          ncard: response.data.ncard,
          cdiseases: response.data.cdiseases,
          submitted: true,
          
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  newpatient() {
    this.setState({
      id: null,
      name: "",
      age: 0, 
      adress :"",
      mail :"",
      tel :"",
      cdiseases :"",
      ncard :"",

      submitted: false
    });
  }

  render() {
    return (
      <div className="submit-form">
        {this.state.submitted ? (
          <div>
            <h4>You submitted successfully!</h4>
            <button className="btn btn-success" onClick={this.newTutorial}>
              Add patient
            </button>
          </div>
        ) : (
          <div>
            <div className="form-group">
              <label htmlFor="name">name</label>
              <input
                type="text"
                className="form-control"
                
                required
                value={this.state.name}
                onChange={this.onChangename}
                name="name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="age">age</label>
              <input
                type="text"
                className="form-control"
            
                required
                value={this.state.age}
                onChange={this.onChangeage}
                name="age"
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="adress">adress</label>
              <input
                type="text"
                className="form-control"
            
                required
                value={this.state.adress}
                onChange={this.onChangeadress}
                name="adress"
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="tel">tel</label>
              <input
                type="text"
                className="form-control"
            
                required
                value={this.state.tel}
                onChange={this.onChangetel}
                name="tel"
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="mail">mail</label>
              <input
                type="text"
                className="form-control"
            
                required
                value={this.state.mail}
                onChange={this.onChangemail}
                name="mail"
              />
            </div>

            <div className="form-group">
              <label htmlFor="numbercard">carde </label>
              <input
                type="text"
                className="form-control"
            
                required
                value={this.state.ncard}
                onChange={this.onChangencard}
                name="ncard"
              />
            </div>
            <div className="form-group">
              <label htmlFor="cdiseases">diseases </label>
              <input
                type="text"
                className="form-control"
            
                required
                value={this.state.cdiseases}
                onChange={this.onChangecdiseases}
                name="diseases"
              />
            </div>

            <button onClick={this.savepatient} className="btn btn-success">
              Submit
            </button>
          </div>
        )}
      </div>
    );
  }
}

import React, { Component } from "react";
import patientsDataService from "../services/patient.service";

export default class patient extends Component {
  constructor(props) {
    super(props);
    this.onChangename = this.onChangename.bind(this);
    this.onChangeage = this.onChangeage.bind(this);
    this.onChangeadress = this.onChangeadress.bind(this);
    this.onChangemail= this.onChangemail.bind(this);
    this.onChangetel = this.onChangetel.bind(this);
    this.onChangecdiseases = this.onChangecdiseases.bind(this);
    this.onChangencard= this.onChangencard.bind(this);
    this.getpatient = this.getpatient.bind(this);
    this.updatepatient = this.updatepatient.bind(this);
    this.deletepatient = this.deletepatient.bind(this);

    this.state = {
      currentpatient : {
        id: null,
        name: "",
      age: 0, 
      adress :"",
      mail :"",
      tel :"",
      cdiseases :"",
      ncard :"",
      },
      message: ""
    };
  }

  componentDidMount() {
    this.getpatient(this.props.match.params.id);
  }

  onChangename(e) {
    const name = e.target.value;

    this.setState(function(prevState) {
      return {
        currentpatient: {
          ...prevState.patient ,
          name : name 
        }
      };
    });
  }

  onChangeage(e) {
    const age  = e.target.value;

    this.setState(function(prevState) {
      return {
        currentpatient: {
          ...prevState.currentpatient,
          age : age 
        }
      };
    });
  }
  onChangeadress(e) {
    const adress= e.target.value;

    this.setState(function(prevState) {
      return {
        currentpatient: {
          ...prevState.currentpatient,
          adress :adress 
        }
      };
    });
  }
  onChangetel(e) {
    const tel = e.target.value;

    this.setState(function(prevState) {
      return {
        currentpatient: {
          ...prevState.currentpatient,
          tel :  tel 
        }
      };
    });
  }
  onChangemail(e) {
    const mail= e.target.value;
 
    this.setState(function(prevState) {
      return {
        currentpatient: {
          ...prevState.currentpatient,
          mail : mail 
        }
      };
    });
  }
  onChangencard(e) {
    const ncard = e.target.value;

    this.setState(function(prevState) {
      return {
        currentpatient: {
          ...prevState.currentpatient,
          ncard : ncard
        }
      };
    });
  }

  onChangecdiseases(e) {
    const cdiseases = e.target.value;

    this.setState(function(prevState) {
      return {
        currentpatient: {
          ...prevState.currentpatient,
          cdiseases: cdiseases
        }
      };
    });
  }

  getpatient(id) {
    patientsDataService.get(id)
      .then(response => {
        this.setState({
          currentpatient: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  

  updatepatient() {
    patientsDataService.update(
      this.state.currentpatient.id,
      this.state.currentpatient)

      .then(response => {
        console.log(response.data);
        this.setState({
          message: "The patient was updated successfully!"
        });
      })
      .catch(e => {
        console.log(e);
      });
  }

  deletepatient() {    
    patientsDataService.delete(this.state.currentpatient.id)
      .then(response => {
        console.log(response.data);
        this.props.history.push('/patients')
      })
      .catch(e => {
        console.log(e);
      });
  }

  render() {
    const { currentpatient } = this.state;

    return (
      <div>
        {currentpatient ? (
          <div className="edit-form">
            <h4>patient</h4>
            <form>
              <div className="form-group">
                <label htmlFor="name">name</label>
                <input
                  type="text"
                  className="form-control"
                  
                  value={currentpatient.name}
                  onChange={this.onChangename}
                />
              </div>
              <div className="form-group">
                <label htmlFor="tel">tel</label>
                <input
                  type="text"
                  className="form-control"
                  

                  value={currentpatient.tel}
                  onChange={this.onChangetel}
                />
              </div>
            </form>
            <button
              className="badge badge-danger mr-2"
              onClick={this.deletepatient}
            >
              Delete
            </button>

            <button
              type="submit"
              className="badge badge-success"
              onClick={this.updatepatient}
            >
              Update
            </button>
            <p>{this.state.message}</p>
          </div>
        ) : (
          <div>
            <br />
            <p>Please click on a patient's name...</p>
          </div>
        )}
      </div>
    );
  }
}

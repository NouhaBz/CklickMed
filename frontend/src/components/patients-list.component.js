import React, { Component } from "react";
import patientsDataService from "../services/patient.service";
import { Link } from "react-router-dom";

export default class patientsList extends Component {
  constructor(props) {
    super(props);
    this.onChangeSearchname = this.onChangeSearchname.bind(this);
    this.retrievepatients = this.retrievepatients.bind(this);
    this.refreshList = this.refreshList.bind(this);
    this.setActivepatient = this.setActivepatient.bind(this);
    this.removeAllpatients = this.removeAllpatients.bind(this);
    this.searchname = this.searchname.bind(this);

    this.state = {
      patients: [],
      currentpatient: null,
      currentIndex: -1,
      searchname: ""
    };
  }

  componentDidMount() {
    this.retrievepatients();
  }

  onChangeSearchname(e) {
    const searchname = e.target.value;

    this.setState({
      searchname:searchname
    });
  }

  retrievepatients() {
    patientsDataService.getAll()
      .then(response => {
        this.setState({
          patients: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  refreshList() {
    this.retrievepatients();
    this.setState({
      currentpatient: null,
      currentIndex: -1
    });
  }

  setActivepatient(patient, index) {
    this.setState({
      currentpatient: patient,
      currentIndex: index
    });
  }

  removeAllpatients() {
    patientsDataService.deleteAll()
      .then(response => {
        console.log(response.data);
        this.refreshList();
      })
      .catch(e => {
        console.log(e);
      });
  }
  

  searchname() {
    this.setState({
      currentpatient: null,
      currentIndex: -1
    });

    patientsDataService.findByname(this.state.searchname)
      .then(response => {
        this.setState({
          patients: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  render() {
    const { searchname,patients, currentpatient, currentIndex } = this.state;

    return (
      <div className="list row">
        <div className="col-md-8">
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Search by name"
              value={searchname}
              onChange={this.onChangeSearchname}
            />
            <div className="input-group-append">
              <button
                className="btn btn-outline-secondary"
                type="button"
                onClick={this.searchname}
              >
                Search
              </button>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <h4>patients List</h4>

          <ul className="list-group">
            {patients &&
              patients.map((patient, index) => (
                <li
                  className={
                    "list-group-item " +
                    (index === currentIndex ? "active" : "")
                  }
                  onClick={() => this.setActivepatient(patient, index)}
                  key={index}
                >
                  {patient.name}
                </li>
              ))}
          </ul>

          <button
            className="m-3 btn btn-sm btn-danger"
            onClick={this.removeAllpatients}
          >
            Remove All
          </button>
        </div>
        <div className="col-md-6">
          {currentpatient ? (
            <div>
              <h4>patient</h4>
              <div>
                <label>
                  <strong>name:</strong>
                </label>{" "}
                {currentpatient.name}
              </div>
              <div>
                <label>
                  <strong>tel:</strong>
                </label>{" "}
                {currentpatient.tel}
              </div>
             
              <Link
                to={"/patients/" + currentpatient.id}
                className="badge badge-warning"
              >
                Edit
              </Link>
            </div>
          ) : (
            <div>
              <br />
              <p>Please click on a patient...</p>
            </div>
          )}
        </div>
      </div>
    );
  }
}

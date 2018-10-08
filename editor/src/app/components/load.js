import React, { Component, Fragment } from "react";
import { getRemoteYmlFromIssue } from "../utils/calls";
import queryString from 'query-string'
import { Redirect } from 'react-router-dom'
import { connect } from "react-redux";

const mapStateToProps = state => {
  return {
    load: state.load
  };
};

const mapDispatchToProps = dispatch => {
  return {
    show: data => dispatch(show(data)),
    hide: () => dispatch(hide())
  };
};

@connect(
  mapStateToProps,
  mapDispatchToProps
)

export default class Load extends Component {
  constructor(props) {
    super(props)
    this.state = {
      owner: "",
      repo: "",
      path: "",
    }
  }

  render() {

    const values = queryString.parse(this.props.location.search)
    this.setState({
      owner: values.owner,
      repo: values.repo,
      path: values.path,
    });


    return(
      <Redirect to='/' />
    )
  }
}


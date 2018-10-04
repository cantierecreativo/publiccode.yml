import React, { Component, Fragment } from "react";
import { getRemoteYmlFromIssue } from "../utils/calls";
import queryString from 'query-string'

export default class Load extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    const values = queryString.parse(this.props.location.search)
    console.log(getRemoteYmlFromIssue(values.owner, values.repo, values.path))
  }

  render() {
    return( 
      <div>ciao</div>
    )
  }
}


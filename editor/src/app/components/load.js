import React, { Component, Fragment } from "react";
import { getRemoteYmlFromIssue } from "../utils/calls";
import queryString from "query-string";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { setUrl } from "../store/load";

const mapStateToProps = state => {
  return {
    url: state.load.url
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setUrl: data => dispatch(setUrl(data))
  };
};

@connect(
  mapStateToProps,
  mapDispatchToProps
)
export default class Load extends Component {
  componentWillMount() {
    const params = queryString.parse(this.props.location.search);
    //console.log("LOAD PARAMS", params);
    const url = getRemoteYmlFromIssue(params);
    this.props.setUrl({ url });
  }

  render() {
    const { url } = this.props;
    // return <div>{url}</div>;

    //http://localhost:3000/load?owner=teamdigitale&repo=daf-models&path=pubbliccode.yml

    return (
      <div>
        {url && (
          <Redirect
            to={{
              pathname: "/",
              state: { url }
            }}
          />
        )}
        {!url && <div>Loading...</div>}
      </div>
    );
  }
}

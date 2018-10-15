import React, { Component } from "react";
import { connect } from "react-redux";
import { show } from "../store/infobox";
import { injectIntl, formatMessage, FormattedMessage } from "react-intl";

const ReadMore = props => {
  if (!props.description) return null;
  let partial = ellipsis(props.description);
  return <small className="form-text text-muted">{partial}</small>;
};

const ellipsis = descr => {
  let partial = descr;
  if (descr.length > MAX_LEN) {
    partial = descr.substring(0, MAX_LEN - 1) + "...";
  }
  return partial;
};

const MAX_LEN = 100;

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    show: data => dispatch(show(data))
  };
};

@connect(
  mapStateToProps,
  mapDispatchToProps
)
class InfoBox extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { intl } = this.props;
    if (!(this.props.title || this.props.description)) return null;
    let { title, description } = this.props;
    const text = intl.formatMessage({ id: description });
    let partial = ellipsis(text);
    return (
      <div className="field_info">
        <small className="form-text text-muted">
          <span>{partial}</span>
          {partial.length > MAX_LEN && (
            <span>
              <a
                href="#"
                className="link"
                onClick={() => {
                  this.props.show({ title, description });
                }}
              >
                <FormattedMessage id={"action_read_more"} />
              </a>
            </span>
          )}
        </small>
      </div>
    );
  }
}
export default injectIntl(InfoBox);

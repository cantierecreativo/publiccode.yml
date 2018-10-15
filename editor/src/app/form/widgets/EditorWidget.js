import React, { Component } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { Field } from "redux-form";
import RichTextEditor from "react-rte";
import Info from "../../components/Info";
import { FormattedMessage } from "react-intl";

const emptyVal = RichTextEditor.createEmptyValue();

class MyEditor extends Component {
  constructor(props) {
    super(props);
    //let value = this.props.value  ? RichTextEditor.createValueFromString(this.props.value, "html") : emptyVal;
    let text = emptyVal;
    if (this.props.value) {
      text = RichTextEditor.createValueFromString(this.props.value, "html");
    }
    this.state = {
      text,
      reset: false
    };
    this.onChange = this.onChange.bind(this);
  }

  onChange(val) {
    let { text } = this.state;
    console.log("onChange");
    if (this.props.onChange) {
      if (val == null) this.props.onChange("");
      else this.props.onChange(val.toString("html"));
    }

    this.setState({ text: val });
  }

  componentWillReceiveProps(next) {
    if (!next.value) {
      console.log("RESET  ");
      this.setState({ text: emptyVal, reset: true });
    } else {
      if (next.pristine && next.initial) {
        console.log("INITIAL  ");

        let next_html = RichTextEditor.createValueFromString(
          next.initial,
          "html"
        );
        this.setState({ text: next_html });
      }
    }
  }

  render() {
    return (
      <RichTextEditor
        className="editor__component"
        toolbarClassName="editor__toolbar"
        editorClassName="editor__content"
        value={this.state.text}
        onChange={this.onChange}
      />
    );
  }
}

const renderInput = field => {
  const className = classNames([
    "form-group editor__widget",
    { "has-error": field.meta.touched && field.meta.error }
  ]);

  return (
    <div className={className}>
      <label className="control-label" htmlFor={"field-" + field.name}>
        <FormattedMessage id={field.label} /> {field.required ? "*" : ""}
      </label>
      <div className="form-control editor__wrapper">
        <MyEditor

          pristine={field.meta.pristine}
          initial={field.meta.initial}
          {...field.input}
          id={"field-" + field.fieldName}
          required={field.required}
          placeholder={field.placeholder}
        />
      </div>
      {field.meta.touched &&
        field.meta.error && (
          <span className="help-block">{field.meta.error}</span>
        )}
       {field.description && <Info title={field.label?field.label:field.name} description={field.description} />}
    </div>
  );
};

const editorWidget = props => {
  return (
    <Field
      component={renderInput}
      label={props.label}
      name={props.fieldName}
      required={props.required}
      id={"field-" + props.fieldName}
      placeholder={props.schema.default}
      description={props.schema.description}
    />
  );
};

editorWidget.propTypes = {
  schema: PropTypes.object.isRequired,
  fieldName: PropTypes.string,
  label: PropTypes.string,
  theme: PropTypes.object,
  multiple: PropTypes.bool,
  required: PropTypes.bool
};

export default editorWidget;

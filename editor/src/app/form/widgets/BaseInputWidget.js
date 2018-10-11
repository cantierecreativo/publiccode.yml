import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { Field } from "redux-form";
import Info from "../../components/Info";
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';

const renderInput = field => {
  const className = classNames([
    "form-group",
    { "has-error": field.meta.touched && field.meta.error }
  ]);

  // let type = field.type;
  // if (field.schema.widget) {
  //   console.log("WIDGET", field.schema.widget);
  // }

  return (
    <div className={className}>
      {field.showLabel && (
        <label className="control-label" htmlFor={field.id}>
          {field.label} {field.required ? "*" : ""}
        </label>
      )}

      <input
        {...field.input}
        type={field.type}
        required={field.required}
        className="form-control"
        placeholder={field.placeholder}
      />
      {field.meta.touched &&
        field.meta.error && (
          <span className="help-block">{field.meta.error}</span>
        )}
      {field.description && (
        <Info
          title={field.label ? field.label : field.name}
          description={field.description}
        />
      )}
    </div>
  );
};

const BaseInputWidget = props => {

  if (props.type == 'date') {
    return (
      <TextField
        margin='dense'
        id={"field-" + props.fieldName}
        type="date"
        label={props.label}
        name={props.fieldName}
        required={props.required}
        description={props.schema.description}
        placeholder={props.schema.default}
        normalize={props.normalizer}
        InputLabelProps={{
          shrink: true
        }}
      />
    )
  } else {
    return (
      <TextField
        margin='dense'
        id={"field-" + props.fieldName}
        type={props.type}
        label={props.label}
        name={props.fieldName}
        required={props.required}
        description={props.schema.description}
        placeholder={props.schema.default}
        normalize={props.normalizer}
      />
    )
  }

    // <Field
    //   component={renderInput}
    //   label={props.label}
    //   name={props.fieldName}
    //   required={props.required}
    //   id={"field-" + props.fieldName}
    //   placeholder={props.schema.default}
    //   description={props.schema.description}
    //   type={props.type}
    //   normalize={props.normalizer}
      // {...props}
    // />
};

BaseInputWidget.propTypes = {
  schema: PropTypes.object.isRequired,
  type: PropTypes.string.isRequired,
  required: PropTypes.bool,
  fieldName: PropTypes.string,
  label: PropTypes.string,
  normalizer: PropTypes.func,
  description: PropTypes.string
};

export default BaseInputWidget;

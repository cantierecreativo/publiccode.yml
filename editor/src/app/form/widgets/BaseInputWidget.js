import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { Field } from "redux-form";
import Info from "../../components/Info";
import { FormattedMessage } from "react-intl";
import { TextField, InputLabel } from "@material-ui/core";

const Input = field => {

  let error = field.meta.touched && field.meta.error != null;
  const className = classNames([
    "form-group",
    { "has-error": error }
  ]);
  const label = field.showLabel ? <FormattedMessage id={field.label} /> : null;

  return (
    <div 
      className={className}
    >
      <TextField
        margin="dense"
        type={field.type}
        label={label}
        name={field.fieldName}
        required={field.required}
        placeholder={field.schema.default}
        error={error}
        InputLabelProps={field.type == "date" ? { shrink: true } : {}}
        {...field.input}
      />
      <div>
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
    </div>
  );
};

const BaseInputWidget = props => {
  return (
    <Field
      component={Input}
      name={props.fieldName}
      id={"field-" + props.fieldName}
      description={props.schema.description}
      {...props}
    />
  );
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

import React, { Component, Fragment } from "react";
import { Field, reduxForm } from "redux-form";
import { DefaultTheme as Widgets } from "../form";
import { APP_FORM } from "../contents/constants";
import renderField from "../form/renderField";
import CountrySwitcher from "./countrySwitcher";
import Collapse, { Panel } from "rc-collapse";
import img_x from "../../asset/img/x.svg";
import img_accordion_open from "../../asset/img/accordion-open.svg";
import img_accordion_closed from "../../asset/img/accordion-closed.svg";
import { getFieldByTitle } from "../contents/data";
import { FormattedMessage } from "react-intl";

// const renderBlocksSimple = blocks => {
//   return blocks.map((block, i) => (
//     <div className="block__wrapper" key={`block_${i}`}>
//       <div className="block_heading">
//         <div className="block_heading_oval">{block.index}</div>
//         <div className="block_heading_title">{block.title}</div>
//       </div>
//       <div className="block collapse">{renderBlockItems(block.items, i)}</div>
//     </div>
//   ));
// };

let currentSection = 0;

const renderBlockItems = (items, id) => {
  return items.map((item, i) => {
    // getField(item);
    let cn = item.cn ? item.cn : "block__item";
    if (item.type === "object") cn = "block__object";
    return (
      <div className={cn} key={`block_${id}_item_${i}`}>
        {renderField(item, item.title, Widgets, "", {}, item.required === true)}
      </div>
    );
  });
};

const renderHeader = props => {
  console.log("currentSection", currentSection);
  let img_arrow = img_accordion_closed;
  if (currentSection == props.block.index - 1) {
    img_arrow = img_accordion_open;
  }
  return (
    <span className={`clearfix ${props.hasError ? "error" : ""}`}>
      <img src={img_arrow} /> {props.block.index}. {props.block.title}
      {props.hasError && (
        <span className="float-right error-info">
          <img src={img_x} />
        </span>
      )}
    </span>
  );
};

const renderBlocks = (blocks, countryProps, sectionsWithErrors) => {
  return blocks.map((block, i) => {
    let last = blocks.length === i + 1;
    let hasError = sectionsWithErrors.indexOf(i) >= 0;
    let c = {
      showArrow: false
    };
    if (hasError) {
      c.headerClass = "rc-collapse-header-error";
    }
    return (
      <Panel
        className={`block__wrapper section_${i}`}
        id={`section_${i}`}
        key={i}
        {...c}
        header={renderHeader({ block, hasError })}
      >
        {last && <CountrySwitcher {...countryProps} />}
        <div className="block">{renderBlockItems(block.items, i)}</div>
      </Panel>
    );
  });
};

const EditForm = props => {
  const {
    handleSubmit,
    pristine,
    reset,
    submitting,
    data,
    errors,
    activeSection,
    setSection,
    country,
    switchCountry,
    allFields,
    submitFailed
  } = props;

  let countryProps = { country, switchCountry };

  let params = {
    // accordion: true,
    defaultActiveKey: Array.from(Array(data.length).keys(), x => x.toString())
  };

  if (setSection && activeSection) {
    params.activeKey = activeSection == -1 ? "0" : activeSection;
    currentSection = params.activeKey;
  }
  currentSection = activeSection;

  let sectionsWithErrors = [];
  //submitFailed &&
  if (submitFailed && errors) {
    sectionsWithErrors = Object.keys(errors).reduce((s, e) => {
      let field = getFieldByTitle(allFields, e);
      if (s.indexOf(field.section) < 0) {
        s.push(field.section);
      }
      return s;
    }, []);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Collapse
          onChange={index => {
            props.onAccordion(index);
            currentSection = index == null ? -1 : index;
          }}
          {...params}
        >
          {renderBlocks(data, countryProps, sectionsWithErrors)}
        </Collapse>
      </form>
    </div>
  );
};

export default reduxForm({
  form: APP_FORM
})(EditForm);

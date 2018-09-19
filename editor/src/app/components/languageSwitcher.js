import React, { Component } from "react";
import available_languages, {langs_names} from "../contents/langs";

import img_close from "../../asset/img/close.svg";

export default class languageSwitcher extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let { languages, currentLanguage, search } = this.props;
    //console.log(error);
    let results = available_languages;
    if (search)
      results = available_languages.filter(name => name.indexOf(search) > -1);

    return (
      <div className="language-switcher">
        {languages.map( (lng, index) => {
          let cn = "language-switcher__item";
          if (lng == currentLanguage) {
            cn += " language-switcher__item--selected";
          }
          return (
            <div key={lng} className={cn}>
              <a onClick={() => this.props.switchLang(lng)}>{langs_names[index]}</a>
              <img src={img_close} onClick={() => this.props.removeLang(lng)} />
            </div>
          );
        })}
        <div className="dropdown language-filter__dropdown">
          <div
            className="language-switcher__item"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <a> + Add Language </a>
          </div>
          <div
            className="dropdown-menu language-filter"
            aria-labelledby="dropdownMenuButton"
          >
            <div className="form-group">
              <input
                type="text"
                name="search"
                className="form-control language-filter__input"
                placeholder="Search"
                onChange={e => this.props.onSearch(e.target.value)}
              />
            </div>

            <div className="language-filter__content">
              {results.map( (lng, index) => (
                <a
                  key={lng}
                  className="dropdown-item language-filter__content__item"
                  onClick={() => this.props.switchLang(lng)}
                >
                  {langs_names[index]}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

import React, { Component } from "react";
import { render } from "react-dom";
import store from "./store/index";
import { Provider } from "react-redux";
import Layout from "./components/_layout";
// import Index from "./components/index";
import Index from "./components/editor";
import Load from "./components/load";
import { IntlProvider } from "react-intl";
import { getLocale } from "./components/locale"
import { addLocaleData, defineMessages, FormattedMessage } from 'react-intl';
import en from 'react-intl/locale-data/en';
import it from 'react-intl/locale-data/it';
import * as messages from "./locales";
import {
  BrowserRouter,
  Route,
  Switch,
  Link,
  Redirect,
} from "react-router-dom";

addLocaleData([...en, ...it]);

import "bootstrap";
import $ from "jquery";
window.jQuery = $;
window.$ = $;

export default class App extends Component {

  constructor() {
    super()
    this.state = {locale: null}
  }

  async componentWillMount() {
    const locale = await getLocale()
    this.setState({locale})
  }

  render() {
    if (!this.state.locale) return null
    const { locale } = this.state
    return (
      <IntlProvider locale={locale} messages={messages[locale]}>
        <Provider store={store}>
          <Layout>
            <BrowserRouter>
              <Switch>
                <Route exact path='/' component={Index} />
                <Route path='/load' component={Load} />
              </Switch>
            </BrowserRouter>
          </Layout>
        </Provider>
      </IntlProvider>
    );
  }
}

render(<App />, document.getElementById("app"));


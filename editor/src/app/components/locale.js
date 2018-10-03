import React, { Component } from "react";

export const getLocale = () => {
  return new Promise( (resolve, reject) => {
    let locale = (navigator.languages[0] || navigator.language || navigator.browserLanguage || 'it').substr(0,2)
    resolve(locale)
  })
}

const ecosistemi_list = [
  "sanita",
  "welfare",
  "finanza-pubblica",
  "scuola",
  "istruzione-superiore-ricerca",
  "difesa-sicurezza-soccorso-legalita",
  "giustizia",
  "infrastruttura-logistica",
  "sviluppo-sostenibilita",
  "beni-culturali-turismo",
  "agricoltura",
  "italia-europa-mondo"
];

const it = [
  {
    section: 6,
    group: "it",
    title: "spid",
    label: "spid",
    type: "boolean",
    description: "spid_description"
  },
  {
    section: 6,
    group: "it",
    title: "cie",
    label: "cie",
    type: "boolean",
    description: "cie_description"
  },
  {
    section: 6,
    group: "it",
    title: "anpr",
    label: "anpr",
    type: "boolean",
    description: "anpr_description"
  },
  {
    section: 6,
    group: "it",
    title: "pagopa",
    label: "pagopa",
    type: "boolean",
    description: "pagopa_description"
  },
  {
    section: 6,
    group: "it",
    title: "conforme",
    label: "conforme",
    type: "object",
    properties: {
      accessibile: {
        title: "accessibile",
        label: "accessibile",
        type: "boolean",
        description: "accessibile_description"
      },
      interoperabile: {
        title: "interoperabile",
        label: "interoperabile",
        type: "boolean",
        description: "interoperabile_description"
      },
      sicuro: {
        title: "sicuro",
        label: "sicuro",
        type: "boolean",
        description: "sicuro_description"
      },
      privacy: {
        title: "privacy",
        label: "privacy",
        type: "boolean",
        description: "privacy_description"
      }
    }
  },

  {
    section: 6,
    group: "it",
    title: "riuso",
    label: "riuso",
    type: "object",
    properties: {
      codiceIPA: {
        title: "codiceIPA",
        label: "codice_ipa",
        type: "string",
        description: "codice_ipa_description"
      },
      ecosistemi: {
        type: "array",
        title: "ecosistemi",
        label: "ecosistemi",
        description: "ecosistemi_description",
        items: {
          title: "ecosistema",
          label: "ecosistema",
          type: "string",
          enum: ecosistemi_list
        },
        section: 6
      }
    }
  },
  {
    section: 6,
    group: "it",
    title: "designKit",
    label: "design_kit",
    type: "object",
    properties: {
      seo: {
        title: "seo",
        label: "seo",
        type: "boolean",
        description: "seo_description"
      },
      ui: {
        title: "ui",
        label: "ui",
        type: "boolean",
        description: "ui_description"
      },
      web: {
        title: "web",
        label: "web",
        type: "boolean",
        description: "web_description"
      },
      content: {
        title: "content",
        label: "content",
        type: "boolean",
        description: "content_description"
      }
    }
  }
];
export default it;

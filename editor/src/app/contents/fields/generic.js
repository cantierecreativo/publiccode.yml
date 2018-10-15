import { getReleases } from "../../utils/calls";
import { versionsUrl } from "../constants";
import tags from "../tags";

const tag_names = tags.map(t => t.tag);
const tag_descrs = tags.map(t => t.descr);
const developmentStatus_list = [
  "concept",
  "development",
  "beta",
  "stable",
  "obsolete"
];
const softwareType_list = [
  "standalone",
  "addon",
  "library",
  "configurationFiles"
];

let versions = null;

const fields = async () => {
  if (!versions) {
    console.log("get versions");
    try {
      versions = await getReleases(versionsUrl);
    } catch (e) {
      versions = ["development", "0.1"];
    }
  } else {
    versions = await Promise.resolve(versions);
  }

  return [
    {
      title: "publiccode-yaml-version",
      label: "publiccode_yaml_version",
      description: "publiccode_yaml_version_description",
      type: "string",
      items: {
        type: "string"
      },
      section: 0,
      required: true,
      enum: versions,
      widget: "choice-expanded"
    },
    {
      title: "name",
      label: "name_of_the_software",
      description: "name_of_the_software_description",
      type: "string",

      section: 0,
      required: true
    },
    {
      title: "releaseDate",
      label: "release_date",
      description: "release_date_description",
      type: "string",

      section: 0,
      required: true,
      widget: "date"
    },
    {
      title: "url",
      label: "repository_url",
      description: "repository_url_description",
      type: "string",

      widget: "url",
      section: 0,
      required: true
    },
    {
      title: "applicationSuite",
      label: "application_suite",
      description: "application_suite_description",
      type: "string",

      section: 0
    },
    {
      type: "string",
      title: "landingURL",
      label: "landing_page_url",
      description: "landing_page_url_description",

      section: 1,
      widget: "url"
    },
    {
      title: "localisedName",
      label: "localised_name",
      description: "localised_name_description",
      type: "string",
      section: 2,
      group: "description"
    },
    {
      title: "shortDescription",
      label: "short_description",
      description: "short_description_description",
      type: "string",

      section: 0,
      group: "description",
      required: true
    },
    {
      title: "longDescription",
      label: "long_description",
      description: "long_description_description",
      type: "string",

      section: 3,
      group: "description",
      widget: "editor",
      required: true,
      cn: "block__item--full"
    },
    {
      title: "documentation",
      label: "documentation",
      description: "documentation_description",
      type: "string",

      section: 1,
      group: "description"
    },
    {
      title: "apiDocumentation",
      label: "api_documentation",
      description: "api_documentation_description",
      section: 3,
      group: "description",
      type: "string"
    },
    {
      title: "freeTags",
      label: "free_tags",
      description: "free_tags_description",
      section: 1,
      group: "description",
      type: "array",

      items: {
        title: "tag",
        type: "string"
      }
    },
    {
      title: "featureList",
      label: "feature_list",
      description: "feature_list_description",
      type: "array",

      items: {
        type: "string",
        title: "feature"
      },
      section: 1,
      group: "description"
    },
    {
      title: "screenshots",
      label: "screenshots",
      description: "screenshots_description",
      type: "array",

      items: {
        type: "string",
        title: "screenshot"
      },
      section: 2,
      group: "description"
    },
    {
      title: "videos",
      label: "videos",
      description: "videos_description",
      type: "array",

      items: {
        type: "string",
        title: "video"
      },
      section: 2,
      group: "description"
    },
    {
      title: "awards",
      label: "awards",
      description: "awards_description",
      type: "array",

      items: {
        type: "string",
        title: "award"
      },
      section: 2,
      group: "description"
    },
    {
      title: "isBasedOn",
      label: "is_based_on",
      description: "is_based_on_description",
      type: "string",

      section: 0,
      widget: "url"
    },

    {
      type: "string",
      title: "softwareVersion",
      label: "software_version",
      description: "software_version_description",

      section: 1
    },
    {
      title: "roadmap",
      label: "roadmap",
      description: "roadmap_description",
      type: "string",
      section: 1,
      widget: "url"
    },
    {
      type: "string",
      title: "logo",
      label: "logo",
      description: "logo_description",

      section: 2
    },
    {
      type: "string",
      title: "monochromeLogo",
      label: "logo_monochrome",
      description: "logo_monochrome_description",

      section: 2
    },

    {
      title: "developmentStatus",
      label: "development_status",
      description: "development_status_description",

      type: "string",

      enum: developmentStatus_list,
      section: 1,
      required: true,
      widget: "choice-expanded"
    },
    {
      title: "softwareType",
      label: "software_type",
      description: "software_type_description",
      type: "string",

      enum: softwareType_list,
      section: 1,
      required: true,
      widget: "choice-expanded"
    },

    {
      type: "array",
      title: "platforms",
      label: "platforms",
      description: "platforms_description",

      examples: ["android", "ios"],
      items: {
        type: "string",
        enum: ["web", "windows", "mac", "linux", "ios", "android"]
      },
      section: 1,
      widget: "tags"
    },
    {
      type: "string",
      title: "license",
      label: "license",
      description: "license_description",

      section: 4,
      group: "legal",
      required: true
    },
    {
      type: "string",
      title: "mainCopyrightOwner",
      label: "main_copyright_owner",
      description: "main_copyright_owner_description",

      section: 4,
      group: "legal"
    },
    {
      type: "string",
      title: "repoOwner",
      label: "repository_owner",
      description: "repository_owner_description",

      section: 0,
      group: "legal",
      required: true
    },
    {
      title: "authorsFile",
      label: "authors_file",
      description: "authors_file_description",
      type: "string",

      section: 4,
      group: "legal"
    },
    {
      title: "tags",
      label: "tags",
      description: "tags_description",

      type: "array",
      items: {
        type: "string",
        title: "tag",
        enum: tag_names,
        enum_titles: tag_descrs
      },
      section: 3,
      required: true,
      widget: "tags"
    },
    {
      title: "onlyFor",
      label: "only_for",
      description: "only_for_description",
      type: "array",

      items: {
        type: "string"
      },
      section: 3,
      group: "intendedAudience"
    },
    {
      title: "countries",
      label: "countries",
      description: "countries_description",
      type: "array",

      items: {
        title: "item",
        type: "string"
      },
      section: 3,
      group: "intendedAudience"
    },
    {
      title: "unsupportedCountries",
      label: "unsupported_countries",
      description: "unsupported_countries_description",
      type: "array",

      items: {
        title: "item",
        type: "string"
      },
      section: 3,
      group: "intendedAudience"
    },
    {
      title: "usedBy",
      label: "used_by",
      description: "used_by_description",

      type: "array",
      items: {
        type: "string"
      },
      section: 1
    },

    {
      title: "inputTypes",
      label: "input_types",
      description: "input_types_description",

      type: "array",
      items: {
        type: "string"
      },
      section: 1
    },
    {
      title: "outputTypes",
      label: "output_types",
      description: "output_types_description",

      type: "array",
      items: {
        type: "string"
      },
      section: 1
    },
    {
      title: "localisationReady",
      label: "localisation_ready",
      description: "localisation_ready_description",
      type: "boolean",

      section: 3,
      group: "localisation"
    },
    {
      title: "availableLanguages",
      label: "available_languages",
      description: "available_languages_description",
      type: "array",

      items: {
        type: "string"
      },
      section: 3,
      group: "localisation"
    },
    {
      title: "type",
      label: "maintenance_type",
      description: "maintenance_type_description",
      type: "array",

      items: {
        type: "string"
      },
      uniqueItems: true,
      enum: ["internal", "contract", "community", "none"],
      widget: "choice-expanded",
      section: 5,
      group: "maintenance"
    },
    {
      title: "contacts",
      label: "contacts",
      description: "contacts_description",
      type: "array",

      items: {
        title: "contact",
        label: "contact",
        description: "contact_description",

        type: "object",
        properties: {
          name: {
            type: "string",
            title: "name",
            label: "contact_name",
            description: "contact_name_description"
          },
          email: {
            type: "string",
            title: "Email",
            label: "email",
            description: "email_description",
            widget: "email"
          },
          phone: {
            type: "string",
            title: "phone",
            label: "phone",
            description: "phone_description"
          },
          affiliation: {
            type: "string",
            title: "affiliation",
            label: "affiliation",
            description: "affiliation_description"
          }
        },
        required: ["name"]
      },
      section: 5,
      group: "maintenance",
      cn: "block__item--full",
      required: true
    },
    {
      title: "contractors",
      label: "contractors",
      description: "contractors_description",
      type: "array",

      items: {
        title: "contractor",
        label: "contractor",
        description: "contractor_description",

        type: "object",
        properties: {
          name: {
            type: "string",
            title: "name",
            label: "contractor_name",
            description: "contractor_name_description"
          },
          until: {
            type: "string",
            title: "until",
            label: "until",
            description: "until_description",

            widget: "date"
          },
          website: {
            type: "string",
            title: "website",
            label: "website",
            description: "website_description",

            widget: "url"
          }
        },
        required: ["name", "until"]
      },
      section: 5,
      group: "maintenance",
      cn: "block__item--full"
    },

    {
      title: "dependsOn",
      label: "depends_on",
      description: "depends_on_description",

      type: "array",
      items: {
        title: "dependency",
        label: "dependency",
        description: "dependency_description",

        type: "object",
        properties: {
          type: {
            title: "type",
            label: "type",
            description: "type_description",
            type: "array",
            items: {
              type: "string"
            },
            enum: ["open", "proprietary", "hardware"],
            uniqueItems: true,
            widget: "choice-expanded"
          },
          name: {
            title: "name",
            label: "dependency_name",
            description: "dependency_name_description",
            type: "string"
          },
          versionMin: {
            type: "string",
            title: "versionMin",
            label: "version_range_min",
            description: "version_range_min_description"
          },
          versionMax: {
            type: "string",
            title: "versionMax",
            label: "version_range_max",
            description: "version_range_max_description"
          },
          version: {
            type: "string",
            title: "version",
            label: "exact_version",
            description: "exact_version_description"
          },
          optional: {
            title: "optional",
            label: "optional",
            description: "optional_description",
            type: "boolean"
          }
        },
        required: ["name", "type"]
      },
      section: 4,
      cn: "block__item--full"
    }
  ];
};
export default fields;

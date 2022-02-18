import React from "react";
import flatten from "lodash/flatten";
import find from "lodash/find";

export const categorizedRoutes = [
  {
    category: "JSON",
    content: [
      {
        label: "格式化",
        path: "/json-to-formatter",
        title: "Transform | Json Formatter."
      },
      {
        label: "React PropTypes",
        path: "/json-to-proptypes",
        title: "Transform | All important transforms at one place."
      },
      {
        label: "TypeScript",
        path: "/json-to-typescript",
        packageUrl: "https://www.npmjs.com/package/json_typegen_wasm",
        packageName: "json_typegen_wasm"
      },
      {
        label: "MySQL表结构",
        path: "/json-to-mysql",
        packageName: "generate-schema",
        packageUrl: "https://github.com/nijikokun/generate-schema"
      },
      {
        label: "Go 结构体",
        path: "/json-to-go",
        packageName: "json-to-go",
        packageUrl: "https://github.com/mholt/json-to-go"
      },
      {
        label: "YAML",
        path: "/json-to-yaml",
        packageName: "json2yaml",
        packageUrl: "https://github.com/jeffsu/json2yaml"
      },
      {
        label: "JSON Schema",
        path: "/json-to-json-schema",
        packageUrl: "https://www.npmjs.com/package/json_typegen_wasm",
        packageName: "json_typegen_wasm"
      },
      {
        label: "TOML",
        path: "/json-to-toml",
        packageUrl: "https://www.npmjs.com/package/@iarna/toml",
        packageName: "@iarna/toml"
      },
      {
        label: "Protobuf 结构体",
        path: "json-to-protobuf",
        packageName: "json-protobuf",
        packageUrl: "https://github.com/okdistribute/jsonschema-protobuf"
      }
    ]
  },
  {
    category: "Others",
    iconName: "",
    content: [
      {
        label: "XML to JSON",
        path: "/xml-to-json",
        packageName: "xml-js",
        packageUrl: "https://github.com/nashwaan/xml-js"
      },
      {
        label: "YAML to JSON",
        path: "/yaml-to-json",
        packageName: "yaml",
        packageUrl: "https://github.com/tj/js-yaml"
      },
      {
        label: "YAML to TOML",
        path: "/yaml-to-toml"
      },
      {
        label: "Markdown to HTML",
        path: "/markdown-to-html",
        packageName: "markdown",
        packageUrl: "https://github.com/evilstreak/markdown-js"
      },
      {
        label: "TOML to JSON",
        path: "/toml-to-json",
        packageUrl: "https://www.npmjs.com/package/@iarna/toml",
        packageName: "@iarna/toml"
      },
      {
        label: "TOML to YAML",
        path: "/toml-to-yaml"
      }
    ]
  }
];

export interface Route {
  path: string;
  label: string;
  desc: string;
}

export const routes = flatten(
  categorizedRoutes.map(a =>
    // @ts-ignore
    a.content.map(x => {
      const _label =
        a.category.toLowerCase() !== "others"
          ? `${a.category} ${x.label}`
          : x.label;
      return {
        ...x,
        category: a.category,
        searchTerm: _label,
        desc: x.desc || `An online playground to convert ${_label}`
      };
    })
  )
);

export function activeRouteData(
  pathname
): {
  label: string;
  path: string;
  searchTerm: string;
  desc: string;
  packageUrl?: string;
  packageName?: string;
} {
  return find(routes, o => o.path === pathname);
}

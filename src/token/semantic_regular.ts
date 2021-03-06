import { tokenColorCode as color } from "../common/colors.js";

export interface semanticRule {
  [propName: string]: { foreground?: string; fontStyle?: string; __italic?: boolean };
}

export const semanticRules: semanticRule = {
  variable: /* ..................... */ { foreground: color.GrayC5 },
  "variable.readonly": /* .......... */ { foreground: color.Thunderbird },
  "variable.defaultLibrary": /* .... */ { foreground: color.Mariner },
  property: /* ..................... */ { foreground: color.ChelseaGem, __italic: true },
  parameter: /* .................... */ { foreground: color.GrayE5, __italic: true },
  function: /* ..................... */ { foreground: color.Brown, __italic: true },
  "function.declaration": /* ....... */ { foreground: color.Cerulean },
  "function.defaultLibrary": /* .... */ { foreground: color.Cerulean, __italic: true },
  method: /* ....................... */ { foreground: color.Brown, __italic: true },
  "method.declaration": /* ......... */ { foreground: color.Cerulean },
  "method.defaultLibrary": /* ...... */ { foreground: color.Cerulean, __italic: true },
  keyword: /* ...................... */ { foreground: color.DeepMagenta },
  namespace: /* .................... */ { foreground: color.Mariner, __italic: true },
  "namespace.defaultLibrary": /* ... */ { foreground: color.Mariner, __italic: true },
  class: /* ........................ */ { foreground: color.Mariner, __italic: true },
  "class.defaultLibrary": /* ....... */ { foreground: color.Mariner, __italic: true },
  struct: /* ....................... */ { foreground: color.Mariner, __italic: true },
  type: /* ......................... */ { foreground: color.Mariner },
  "type.defaultLibrary": /* ........ */ { foreground: color.Mariner, __italic: true },
  operator: /* ..................... */ { foreground: color.ElectricPurple },
  string: /* ....................... */ { foreground: color.VerdunGreen },
};

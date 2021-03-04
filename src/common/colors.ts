import chroma from "chroma-js";

function hexAlphaToDec(alpha: string): number {
  return parseInt(alpha, 16) / 255;
}

function mix(alpha: string): string {
  return chroma.mix("#fcf8e8", "#000000", hexAlphaToDec(alpha), "rgb").toString();
}

function backgroundMix(alpha: string): string {
  return chroma.mix("#fcf8e8", "#505050", hexAlphaToDec(alpha), "rgb").toString();
}

function accentBackgroundMix(alpha: string): string {
  return chroma.mix("#0fbda8", "#000000", hexAlphaToDec(alpha), "rgb").toString();
}

// color names by
// https://chir.ag/projects/name-that-color/
// https://www.color-blindness.com/color-name-hue/

export const tokenColorCode = {
  Blue: /* ............. */ "#0000ff",
  Brown: /* ............ */ "#9e4200",
  Cerulean: /* ......... */ "#007aa3",
  ChelseaGem: /* ....... */ "#956a04",
  DarkViolet: /* ....... */ "#a100d6",
  DeepMagenta: /* ...... */ "#c20aac",
  ElectricPurple: /* ... */ "#981aff",
  Gray44: /* ........... */ mix("44"),
  Gray77: /* ........... */ mix("77"),
  GrayAA: /* ........... */ mix("aa"),
  GrayC5: /* ........... */ mix("c5"),
  GrayE5: /* ........... */ mix("e5"),
  Mariner: /* .......... */ "#2059cb",
  Thunderbird: /* ...... */ "#c91d1d",
  VerdunGreen: /* ...... */ "#3b7203",
};

export const workbenchColors = {
  background: backgroundMix("0"),
  background11: backgroundMix("11"),
  background22: backgroundMix("22"),
  background25: backgroundMix("25"),
  background33: backgroundMix("33"),
  background44: backgroundMix("44"),
  background55: backgroundMix("55"),
  background66: backgroundMix("66"),
  background77: backgroundMix("77"),
  background88: backgroundMix("88"),
  background99: backgroundMix("99"),
  backgroundaa: backgroundMix("aa"),
  backgroundbb: backgroundMix("bb"),
  backgroundc5: backgroundMix("c5"),
  backgroundcc: backgroundMix("cc"),
  backgrounddd: backgroundMix("dd"),
  backgrounde5: backgroundMix("e5"),
  backgroundee: backgroundMix("ee"),

  accentBackground: accentBackgroundMix("0"),
  accentBackground11: accentBackgroundMix("11"),
  accentBackground22: accentBackgroundMix("22"),
  accentBackground25: accentBackgroundMix("25"),
  accentBackground33: accentBackgroundMix("33"),
  accentBackground44: accentBackgroundMix("44"),
  accentBackground55: accentBackgroundMix("55"),
  accentBackground66: accentBackgroundMix("66"),
  accentBackground77: accentBackgroundMix("77"),
  accentBackground88: accentBackgroundMix("88"),
  accentBackground99: accentBackgroundMix("99"),
  accentBackgroundaa: accentBackgroundMix("aa"),
  accentBackgroundbb: accentBackgroundMix("bb"),
  accentBackgroundc5: accentBackgroundMix("c5"),
  accentBackgroundcc: accentBackgroundMix("cc"),
  accentBackgrounddd: accentBackgroundMix("dd"),
  accentBackgrounde5: accentBackgroundMix("e5"),
  accentBackgroundee: accentBackgroundMix("ee"),

  contrastBackground: "#fbf5df",

  activeIndentGuideBackground: /* .... */ "#6547b8",
  editorErrorForeground: /* .......... */ "#ff7575",
  editorInfoForeground: /* ........... */ "#02cad4",
  editorWarningBackground: /* ........ */ "#d9d326",
  progressBarBackground: /* .......... */ "#6547b8",
  statusBarBackground: /* ............ */ accentBackgroundMix("0"),
  statusBarDebuggingBackground: /* ... */ "#9b2c2c",
  statusBarDebuggingBorder: /* ....... */ "#770000",
  statusBarDebuggingForeground: /* ... */ "#fdf7f7",
  statusBarForeground: /* ............ */ accentBackgroundMix("ee"),
  statusBarNoFolderBackground: /* .... */ "#6547b8",
  statusBarNoFolderForeground: /* .... */ "#ede9f6",
  statusBarRemoteBackground: /* ...... */ "#f04257",
  statusBarRemoteForeground: /* ...... */ chroma.mix("#f04257", "#ffffff", hexAlphaToDec("d5"), "rgb").toString(),
  textLinkForeground: /* ............. */ "#6547b8",
  buttonHoverBackground: /* .......... */ chroma.mix("#f04257", "#000000", hexAlphaToDec("11"), "rgb").toString(),
};

export const terminalColors = {
  ansiBrightBlack: /* ..... */ "#888b92",
  ansiBrightBlue: /* ...... */ "#80bfff",
  ansiBrightCyan: /* ...... */ "#0fa5d7",
  ansiBrightGreen: /* ..... */ "#89b971",
  ansiBrightMagenta: /* ... */ "#f28ca6",
  ansiBrightRed: /* ....... */ "#ef7b6d",
  ansiBrightWhite: /* ..... */ chroma.mix("#f8ecc2", "#ffffff", hexAlphaToDec("ee"), "rgb").toString(),
  ansiBlack: /* ........... */ "#353a45",
  ansiBlue: /* ............ */ "#859dc3",
  ansiBrightYellow: /* .... */ "#f5d780",
  ansiGreen: /* ........... */ "#85c3ab",
  ansiMagenta: /* ......... */ "#c385bc",
  ansiRed: /* ............. */ "#ff7575",
  ansiWhite: /* ........... */ "#c5c6c9",
  ansiYellow: /* .......... */ "#d9d326",
};

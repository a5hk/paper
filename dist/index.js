import fs from "fs";
import { textmateRules } from "./token/textmate_regular.js";
import { semanticRules } from "./token/semantic_regular.js";
import { commonWorkbenchColors as commonColors } from "./ui/workbench_common.js";
import { regularWorkbenchColors as regularColors } from "./ui/workbench_regular.js";
import { contrastWorkbenchColors as contrastColors } from "./ui/workbench_contrast.js";
function themePath(name) {
    return "./themes/" + name.toLowerCase().replace(/ /g, "-") + "-color-theme.json";
}
function __italicReject(theme) {
    return JSON.stringify(theme, (k, v) => {
        if (k === "__italic") {
            return undefined;
        }
        return v;
    });
}
function textmateItalic(theme) {
    return theme.map((r) => {
        if (r.settings.__italic) {
            r.settings.fontStyle = "italic";
        }
        return r;
    });
}
function semanticItalic(theme) {
    var _a;
    for (const k in theme) {
        if ((_a = theme[k]) === null || _a === void 0 ? void 0 : _a.__italic) {
            theme[k] = Object.assign(Object.assign({}, theme[k]), { fontStyle: "italic" });
        }
    }
    return theme;
}
function themeWriter(name, ui, semantic, textmate) {
    const theme = __italicReject({
        $schema: "vscode://schemas/color-theme",
        type: "dark",
        semanticHighlighting: true,
        name: name,
        colors: ui,
        semanticTokenColors: semantic,
        tokenColors: textmate,
    });
    fs.writeFile(themePath(name), theme, (err) => {
        if (err) {
            throw err;
        }
        console.log(`${name} generated.`);
    });
}
function paperRegular() {
    themeWriter("Paper", Object.assign(Object.assign({}, commonColors), regularColors), semanticRules, textmateRules);
}
function paperRegularItalic() {
    themeWriter("Paper Italic", Object.assign(Object.assign({}, commonColors), regularColors), semanticItalic(semanticRules), textmateItalic(textmateRules));
}
function paperContrast() {
    themeWriter("Paper Contrast", Object.assign(Object.assign({}, commonColors), contrastColors), semanticRules, textmateRules);
}
function paperContrastItalic() {
    themeWriter("Paper Contrast Italic", Object.assign(Object.assign({}, commonColors), contrastColors), semanticItalic(semanticRules), textmateItalic(textmateRules));
}
paperRegular();
paperContrast();
paperRegularItalic();
paperContrastItalic();

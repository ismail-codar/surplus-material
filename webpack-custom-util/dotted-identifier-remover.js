
module.exports = function dottedIdentifierRemove(str, opt) {
    const matched = str.match(/(<[a-z])\w+\.+([A-Z])\w+(>| )/g);
    if (matched == null || matched.length == 0)
        return str;
    matched.filter((item, index, arr) => {
        return arr.indexOf(item) == index
    }).map((item) => {
        const idx = item.indexOf(".")
        return { variable: item.substr(1, idx - 1), classname: item.substr(idx + 1, item.length - idx - 2) }
    }).forEach((tag) => {
        const variableDecl = tag.variable + " = ";
        const variableDeclIndex = str.indexOf(variableDecl);
        if (variableDeclIndex != -1) {
            const variableDeclStart = variableDeclIndex + variableDecl.length;
            const variableDeclRequire = str.substr(variableDeclStart, str.indexOf("\")", variableDeclStart) - variableDeclStart) + "\")";
            const replacedVariableName = tag.variable[0].toUpperCase() + tag.variable.substr(1) + tag.classname;
            str = str.replace(variableDecl + variableDeclRequire, replacedVariableName + " = " + variableDeclRequire + "." + tag.classname)
            str = str.replace(new RegExp(tag.variable + "." + tag.classname, "g"), replacedVariableName)
        }
    })
    return str;
};

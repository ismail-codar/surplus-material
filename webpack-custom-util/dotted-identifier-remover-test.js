const dottedIdentifierRemove = require("./dotted-identifier-remover")

const str1 = `
const button_1 = require("md-components/button");
const button_2 = require("md-components/button");
module.exports = function (ctrl) {
    return <div>
        <button_1.MdButton>Button 1</button_1.MdButton>;
        <button_2.MdButton>Button 2</button_2.MdButton>;
    </div>
};`

const str2 = `"use strict";
const Surplus = require("surplus");
Surplus;
const button_1 = require("../components/button");
module.exports = (ctrl) => <section className="hero">
        <button className="mdc-button button">Flat</button>
        <button className="mdc-button mdc-button--raised button mdc-button--primary">Raised</button>
        <button_1.MdcButton raised={() => true}>Raised</button_1.MdcButton>
    </section>;
`

const str3 = `"use strict";
const Surplus = require("surplus");
Surplus;
const button_1 = require("../components/button");
module.exports = (ctrl) => <section className="hero">
        <button_1.MdcButton>Flat</button_1.MdcButton>
    </section>;
`

console.log(dottedIdentifierRemove(str3))

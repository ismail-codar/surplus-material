import * as Surplus from 'surplus';
Surplus;
import { S } from "surplus";
import { DataSignal } from "s-js";
import { MdcTextField, MdcTextField_Helper } from "../components/textfield";
import onmouse from "surplus-mixins/mouse";
import { mdcDateTimePicker } from "../components/_utils";
import { Moment } from "moment/moment";

const datePast:Moment = null
const dialog = mdcDateTimePicker({ type: "date", trigger: document.body })
console.log(dialog)

document.body.addEventListener("onOk", ()=>{
    console.log(dialog.time)
})

export = (ctrl: any) => {
    return <div>
        <section className="hero">
            <MdcTextField {...onmouse({
                click: () => {
                    dialog.toggle()
                }
            }) } autocomplete="email" label="Text Field"></MdcTextField>
        </section>
        <section className="example">
            <MdcTextField autocomplete="email" label="Email Address" required={true} />
            <MdcTextField_Helper persistent={true} useAsValidation={true}>Help Text (possibly validation message)</MdcTextField_Helper>
        </section>
        <section className="example">
            <MdcTextField multiline={{ rows: 8, cols: 40 }} label="Email Address" />
            <MdcTextField_Helper persistent={true} useAsValidation={true}>Help Text (possibly validation message)</MdcTextField_Helper>
        </section>
    </div>
}
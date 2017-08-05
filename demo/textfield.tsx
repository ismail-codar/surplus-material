import * as Surplus from 'surplus';
Surplus;
import { S } from "surplus";
import { DataSignal } from "s-js";
import { MdcTextField, MdcTextField_Helper } from "../components/textfield";

export = (ctrl: any) => {
    return <div>
        <section className="hero">
            <MdcTextField autocomplete="email" label="Text Field"></MdcTextField>
        </section>
        <section className="example">
            <MdcTextField autocomplete="email" label="Email Address" required={true} />
            <MdcTextField_Helper persistent={true} useAsValidation={true}>Help Text (possibly validation message)</MdcTextField_Helper>
        </section>
        <section className="example">
            <MdcTextField multiline={{rows:8, cols:40}} label="Email Address" />
            <MdcTextField_Helper persistent={true} useAsValidation={true}>Help Text (possibly validation message)</MdcTextField_Helper>
        </section>
    </div>
}
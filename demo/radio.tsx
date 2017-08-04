import * as Surplus from 'surplus';
Surplus;
import { S } from "surplus";
import { DataSignal } from "s-js";
import { MdcRadio } from "../components/radio";

export = (ctrl: any) => {
    return <div>
        <section className="hero">
            <MdcRadio name="cssonly1" checked={true} cssOnly={true} />
            <MdcRadio name="cssonly1" cssOnly={true} />
        </section>
        <section className="example">
            <h2>With Javascript</h2>
            <MdcRadio name="js1" checked={true} label="Label 1" />
            <MdcRadio name="js1" label="Label 2" />
        </section>
        <hr />
    </div>
}
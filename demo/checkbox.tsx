import * as Surplus from 'surplus';
Surplus;
import { S } from "surplus";
import { DataSignal } from "s-js";
import { MdcCheckbox } from "../components/checkbox";

export = (ctrl: any) => {
    return <section className="hero">
        <MdcCheckbox></MdcCheckbox>
        <label id="hero-checkbox-label">Checkbox</label>
    </section>
}
import * as Surplus from 'surplus';
Surplus;
import { S } from "surplus";
import { DataSignal } from "s-js";
import classes from "surplus-mixins/class";
import { mdcTypography } from "../components/_utils";

export = (ctrl: any) => {
    return <section className="hero">
        <h1 {...classes({
            [mdcTypography("display4")]: true,
            [mdcTypography("adjust-margin")]: true
        }) }>Display 4</h1>
    </section>
}
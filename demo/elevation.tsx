import * as Surplus from 'surplus';
Surplus;
import { S } from "surplus";
import { DataSignal } from "s-js";
import classes from "surplus-mixins/class";
import { elevation } from "../components/base";


export = (ctrl: any) => {
    for (let i = 0; i < 24; i++) {

    }
    return <div><section className="hero">
        <figure {...classes({
            "demo-surface": true,
            [elevation(0)]: true
        }) }>
            <figcaption>FLAT 0dp</figcaption>
        </figure>
        <figure {...classes({
            "demo-surface": true,
            [elevation(1)]: true
        }) }>
            <figcaption>FLAT 1dp</figcaption>
        </figure>
    </section>
        <section className="demo-surfaces">
            {
                Array.from(Array(25).keys()).map(i =>
                    <figure {...classes({ "demo-surface": true, [elevation(i as any)]: true }) }>
                        <figcaption>0dp (<code>mdc-elevation--z{i}</code>)</figcaption>
                    </figure>)
            }
        </section>
    </div>
}
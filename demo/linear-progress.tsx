import * as Surplus from 'surplus';
Surplus;
import { S } from "surplus";
import { DataSignal } from "s-js";
import { MdcLinearProgress } from "../components/linear-progress";

export = (ctrl: any) => {
    return <section>
        <fieldset>
            <legend className="mdc-typography--title">Linear Progress Indicators</legend>
        <figure className="linear-progress-demo">
            <MdcLinearProgress progress={0.6}></MdcLinearProgress>
            <figcaption>Determinate</figcaption>
        </figure>

        <figure className="linear-progress-demo">
            <MdcLinearProgress indeterminate={true}></MdcLinearProgress>
            <figcaption>Indeterminate</figcaption>
        </figure>

        <figure className="linear-progress-demo">
            <MdcLinearProgress progress={0.5} buffer={0.75}></MdcLinearProgress>
            <figcaption>Buffer</figcaption>
        </figure>

        <figure className="linear-progress-demo">
            <MdcLinearProgress progress={0.5} reversed={true}></MdcLinearProgress>
            <figcaption>Reversed</figcaption>
        </figure>

        <figure className="linear-progress-demo">
            <MdcLinearProgress indeterminate={true} reversed={true}></MdcLinearProgress>
            <figcaption>Indeterminate Reversed</figcaption>
        </figure>

        <figure className="linear-progress-demo">
            <MdcLinearProgress reversed={true} progress={0.5} buffer={0.75}></MdcLinearProgress>
            <figcaption>Buffer Reversed</figcaption>
        </figure> 

        <figure className="linear-progress-demo">
            <MdcLinearProgress accent={true} progress={0.5}></MdcLinearProgress>
            <figcaption>Accent</figcaption>
        </figure>
        </fieldset>
    </section>
}
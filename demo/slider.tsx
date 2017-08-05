import * as Surplus from 'surplus';
Surplus;
import { S } from "surplus";
import { DataSignal } from "s-js";
import { MdcSlider } from "../components/slider";

export = (ctrl: any) => {
    return <section className="hero">
        <div id="hero-slider-wrapper">
            <MdcSlider />
        </div>
    </section>
}
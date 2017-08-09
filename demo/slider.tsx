import * as Surplus from 'surplus';
Surplus;
import { S } from "surplus";
import { DataSignal } from "s-js";
import { MdcSlider } from "../components/slider";

const sliderValue = S.data(30)
const changeValue = S.data(sliderValue())

export = (ctrl: any) => {
    return <div>
        <section className="hero">
            <div id="hero-slider-wrapper">
                <MdcSlider value={sliderValue} />
            </div>
        </section>
        <section id="slider-example" className="example">
            <h2>Continuous Slider</h2>
            <div className="slider-example">
                <p id="example-cs-label">Select Value:</p>

                <div className="example-slider-wrapper">
                    <MdcSlider discrete={true} value={sliderValue} onChange={(value) => {
                        changeValue(value)
                    }} />
                </div>

                <p>
                    Value from <code>MDCSlider:input</code> event: <span id="continuous-slider-value">{sliderValue()}</span>
                </p>
                <p>
                    Value from <code>MDCSlider:change</code> event: <span id="continuous-slider-committed-value">{changeValue()}</span>
                </p>
            </div>
        </section>
    </div>
}
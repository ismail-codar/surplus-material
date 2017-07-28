import * as Surplus from 'surplus';
Surplus;
import { MdcButton, MdcButtonProps, MdcIntentitonType } from "../components/button";
import S from "s-js"
import { DataSignal } from "s-js";

const button1: MdcButtonProps = {
    raised: () => true,
    intention: (): MdcIntentitonType => "accent"
}

const btnHidden = S.data(false)
const bntRaised = S.data(true)

setTimeout(() => {
    btnHidden(true)
    setTimeout(() => {
        btnHidden(false)
    }, 2000)
}, 2000)

const extraClasses = S.data("mdc-button--raised")

export = (ctrl: any) =>
    <div>
        <section className="hero">
            <MdcButton mouseEvents={{
                click: () => {
                    alert("click")
                }
            }} hidden={btnHidden}>Flat</MdcButton>
            <MdcButton raised={bntRaised} intention={() => "primary"} hidden={btnHidden}>Raised Primary</MdcButton>
            <MdcButton {...button1} >Raised Accent</MdcButton>
        </section>
        <section className="mdc-theme--dark">
            <fieldset>
                <legend className="mdc-typography--title">Dark Theme - Buttons</legend>
                <MdcButton>Flat</MdcButton>
                <MdcButton raised={() => true} intention={() => "primary"} >Raised Primary</MdcButton>
                <MdcButton {...button1} >Raised Accent</MdcButton>
            </fieldset>
        </section>
    </div>
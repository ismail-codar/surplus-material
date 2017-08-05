import * as Surplus from 'surplus';
Surplus;
import { MdcButton, MdcButtonProps } from "../components/button";
import S from "s-js"
import { DataSignal } from "s-js";
import { MdcIntentitonType } from "../components/_base";

const button1: MdcButtonProps = {
    raised: () => true,
    intention: (): MdcIntentitonType => "accent"
}

export = (ctrl: any) =>
    <div>
        <section className="hero">
            <MdcButton mouseEvents={{
                click: () => {
                    alert("click")
                }
            }} >Flat</MdcButton>
            <MdcButton raised={true} intention="primary" >Raised Primary</MdcButton>
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
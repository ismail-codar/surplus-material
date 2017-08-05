import * as Surplus from 'surplus';
Surplus;
import { S } from "surplus";
import { DataSignal } from "s-js";
import { MdcTabs, MdcTab_Item } from "../components/tabs";

export = (ctrl: any) => {
    return <div>
        <section className="hero">
            <MdcTabs>
                <MdcTab_Item href="#one">Item One</MdcTab_Item>
                <MdcTab_Item href="#two">Item Two</MdcTab_Item>
                <MdcTab_Item href="#three">Item Three</MdcTab_Item>
            </MdcTabs>
        </section>
        <section className="examples">
            <fieldset>
                <legend className="mdc-typography--title">Icon Tab Labels</legend>
                <MdcTabs>
                    <MdcTab_Item href="#one" materialIcon="phone">Item One</MdcTab_Item>
                    <MdcTab_Item href="#two">Item Two</MdcTab_Item>
                    <MdcTab_Item href="#three">Item Three</MdcTab_Item>
                </MdcTabs>
            </fieldset>
            <section>
                <div className="demo-tabs__scroller">
                    <h2 className="mdc-typography--title demo-title">Tab Bar with Scroller</h2>
                    <MdcTabs scrollable={true}>
                        <MdcTab_Item href="#one">Item One</MdcTab_Item>
                        <MdcTab_Item href="#two">Item Two</MdcTab_Item>
                        <MdcTab_Item href="#three">Item Three</MdcTab_Item>
                        <MdcTab_Item href="#three">Item Four</MdcTab_Item>
                        <MdcTab_Item href="#three">Item Five</MdcTab_Item>
                        <MdcTab_Item href="#three">Item Six</MdcTab_Item>
                        <MdcTab_Item href="#three">Item Seven</MdcTab_Item>
                        <MdcTab_Item href="#three">Item Eight</MdcTab_Item>
                        <MdcTab_Item href="#three">Item Nine</MdcTab_Item>
                    </MdcTabs>
                </div>
            </section>
        </section>
    </div>
}
import * as Surplus from 'surplus';
Surplus;
import { S } from "surplus";
import { DataSignal } from "s-js";
import { MdcDialog } from "../components/dialog";
import { MdcButton } from "../components/button";
import onmouse from "surplus-mixins/mouse";

const scrolllableDialogOpen = S.data(false)

export = (ctrl: any) => {
    return <div><section className="hero">
    </section>
        <MdcDialog open={scrolllableDialogOpen} extraButtons={[
            {
                children: "Button 1", mouseEvents: {
                    click: () => {
                        alert("Button 1 click...")
                        scrolllableDialogOpen(false)
                    }
                }
            },
            { children: "Button 2" }
        ]} headerText="Choose a Ringtone" scrollable={true} >
            <ul className="mdc-list">
                <li className="mdc-list-item">None</li>
                <li className="mdc-list-item">Callisto</li>
                <li className="mdc-list-item">Ganymede</li>
                <li className="mdc-list-item">Luna</li>
                <li className="mdc-list-item">Marimba</li>
                <li className="mdc-list-item">Schwifty</li>
                <li className="mdc-list-item">Callisto</li>
                <li className="mdc-list-item">Ganymede</li>
                <li className="mdc-list-item">Luna</li>
                <li className="mdc-list-item">Marimba</li>
                <li className="mdc-list-item">Schwifty</li>
            </ul>
        </MdcDialog>
        <section className="example">
            <MdcButton {...onmouse({
                click: () => {
                    scrolllableDialogOpen(true)
                }
            }) } intention="primary" raised={true}>Show Scrolling Dialog</MdcButton>
        </section>
    </div>
}
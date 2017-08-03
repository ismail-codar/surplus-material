import * as Surplus from 'surplus';
Surplus;
import { S } from "surplus";
import { DataSignal } from "s-js";
import { MdcDialog } from "../components/dialog";
import { MdcButton } from "../components/button";
import onmouse from "surplus-mixins/mouse";
import { MdcList, MdcList_Item } from "../components/list";

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
            <MdcList>
                <MdcList_Item>None</MdcList_Item>
                <MdcList_Item>Callisto</MdcList_Item>
                <MdcList_Item>Ganymede</MdcList_Item>
                <MdcList_Item>Luna</MdcList_Item>
                <MdcList_Item>Marimba</MdcList_Item>
                <MdcList_Item>Schwifty</MdcList_Item>
                <MdcList_Item>Callisto</MdcList_Item>
                <MdcList_Item>Ganymede</MdcList_Item>
                <MdcList_Item>Marimba</MdcList_Item>
                <MdcList_Item>Schwifty</MdcList_Item>
            </MdcList>
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
import * as Surplus from 'surplus';
Surplus;
import { S } from "surplus";
import { DataSignal } from "s-js";
import { MdcSimpleMenu, MdcSimpleMenu_Item, MdcSimpleMenu_Anchor } from "../components/simple-menu";
import { MdcButton } from "../components/button";
import onmouse from "surplus-mixins/mouse";

const openMenu = S.data(false)

export = (ctrl: any) => {
    return <div><section className="hero">
        <MdcSimpleMenu cssOnly={true}>
            <MdcSimpleMenu_Item>Back</MdcSimpleMenu_Item>
            <MdcSimpleMenu_Item>Forward</MdcSimpleMenu_Item>
            <MdcSimpleMenu_Item>Reload</MdcSimpleMenu_Item>
            <MdcSimpleMenu_Item />
            <MdcSimpleMenu_Item>Save As...</MdcSimpleMenu_Item>
        </MdcSimpleMenu>
    </section>
        <div className="demo-content">
            <MdcSimpleMenu_Anchor>
                <MdcButton raised={true} intention="primary"
                    {...onmouse(
                        {
                            click: () => {
                                openMenu(true)
                            }
                        })
                    }>Reveal Menu</MdcButton>
                <MdcSimpleMenu open={openMenu}>
                    <MdcSimpleMenu_Item>Back</MdcSimpleMenu_Item>
                    <MdcSimpleMenu_Item>Forward</MdcSimpleMenu_Item>
                    <MdcSimpleMenu_Item>Reload</MdcSimpleMenu_Item>
                    <MdcSimpleMenu_Item />
                    <MdcSimpleMenu_Item>Save As...</MdcSimpleMenu_Item>
                </MdcSimpleMenu>
            </MdcSimpleMenu_Anchor>
        </div>
    </div>
}
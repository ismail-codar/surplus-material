import * as Surplus from 'surplus';
Surplus;
import { S } from "surplus";
import { DataSignal } from "s-js";
import { MdcToolbar } from "../../components/toolbar";
import { MdcList, MdcList_Item } from "../../components/list";
import mixins from "surplus-mixins/all";
import { MdcDrawerProps, MdcTemporaryDrawer } from "../../components/drawer";

export = (ctrl: any) => {
    const drawer: MdcDrawerProps = {
        header: <div>Header Test 1</div>,
        open: S.data(false)
    }
    return <section fn={mixins({
        styles: {
            zIndex: "99",
            marginTop: "-66px",
            position: "relative"
        }
    }) }>
        <MdcToolbar items={[
            {
                sections: [
                    {
                        type: "start", items: [
                            {
                                type: "menuicon", mouseEvents: {
                                    click: () => {
                                        (drawer.open as DataSignal<boolean>)(true)
                                    }
                                }
                            },
                            { type: "title", text: "Toolbar" }
                        ]
                    }
                ]
            }
        ]} />
        <MdcTemporaryDrawer {...drawer}>
            <MdcList>
                <MdcList_Item startDetail={<i className="material-icons">inbox</i>}>Inbox</MdcList_Item>
                <MdcList_Item startDetail={<i className="material-icons">star</i>}>Star</MdcList_Item>
            </MdcList>
        </MdcTemporaryDrawer>
        <main className="demo-main mdc-toolbar-fixed-adjust">
            <h1 className="mdc-typography--display1">Drawer</h1>
            <p className="mdc-typography--body1">Click the menu icon above to open.</p>
        </main>
    </section>
}
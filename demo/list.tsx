import * as Surplus from 'surplus';
Surplus;
import { S } from "surplus";
import { DataSignal } from "s-js";
import { MdcList, MdcList_Item } from "../components/list";
import mixins from "surplus-mixins/all";

export = (ctrl: any) => {
    return <div>
        <section className="hero">
            <MdcList avatar={true} towLine={true} classes={{ "two-line-avatar-text-icon-demo": true }}>
                <MdcList_Item
                    startDetail={<span className="grey-bg"><i className="material-icons">folder</i></span>}
                    endDetail={<a href="#" className="material-icons" aria-label="View more information" title="More info" >info</a>}
                    primaryText={<span>Photos</span>}
                    secondaryText={<span>Jan 9, 2014</span>}
                />
                <MdcList_Item
                    startDetail={<span className="grey-bg"><i className="material-icons">folder</i></span>}
                    endDetail={<a href="#" className="material-icons" aria-label="View more information" title="More info" >info</a>}
                    primaryText={<span>Recipes</span>}
                    secondaryText={<span>Jan 17, 2014</span>}
                />
                <MdcList_Item
                    startDetail={<span className="grey-bg"><i className="material-icons">folder</i></span>}
                    endDetail={<a href="#" className="material-icons" aria-label="View more information" title="More info" >info</a>}
                    primaryText={<span>Work</span>}
                    secondaryText={<span>Jan 28, 2014</span>}
                />
            </MdcList>
        </section>
        <div id="demo-wrapper">
            <section>
                <h2>Single-Line List</h2>
                <section>
                    <h3>Text only</h3>
                    <MdcList rippleEffect={false}>
                        <MdcList_Item>Single-line item</MdcList_Item>
                        <MdcList_Item>Single-line item</MdcList_Item>
                        <MdcList_Item>Single-line item</MdcList_Item>
                    </MdcList>
                </section>
            </section>
            <section className="mdc-theme--dark">
                <h3>Start Detail Example - Icon with Text (Dark)</h3>
                <MdcList>
                    <MdcList_Item startDetail={<i className="material-icons">network_wifi</i>}>Wi-Fi</MdcList_Item>
                    <MdcList_Item startDetail={<i className="material-icons">bluetooth</i>}>Bluetooth</MdcList_Item>
                    <MdcList_Item startDetail={<i className="material-icons">data_usage</i>}>Data Usage</MdcList_Item>
                </MdcList>
            </section>
            <section>
                <h3>Example - Avatar with Text and icon</h3>
                <MdcList {...mixins({ attrs: { id: "avatar-text-icon-demo-list" } }) } avatar={true}>
                    <MdcList_Item
                        startDetail={<img className="grey-bg" src="/demo/images/animal3.svg" width="56" height="56" alt="Brown Bear" />}
                        endDetail={<a className="material-icons" href="#">favorite</a>}
                    >
                        Brown Bear
                    </MdcList_Item>
                    <MdcList_Item
                        startDetail={<img className="grey-bg" src="/demo/images/animal1.svg" width="56" height="56" alt="Brown Bear" />}
                        endDetail={<a className="material-icons" href="#">favorite_border</a>}
                    >
                        Panda
                    </MdcList_Item>
                    <MdcList_Item
                        startDetail={<img className="grey-bg" src="/demo/images/animal2.svg" width="56" height="56" alt="Brown Bear" />}
                        endDetail={<a className="material-icons" href="#">favorite_border</a>}
                    >
                        Sleuth
                    </MdcList_Item>
                </MdcList>
            </section>
        </div>
    </div>
}
import * as Surplus from 'surplus';
Surplus;
import { S } from "surplus";
import { DataSignal } from "s-js";
import { MdcGridList, MdcGridList_Item, MdcGridList_Item_Primary, MdcGridList_Item_Secondary, MdcGridList_Item_Secondary_Title, MdcGridList_Item_Secondary_SupportText, MdcGridList_Item_Secondary_Icon } from "../components/grid-list";

export = (ctrl: any) => {
    return <div><section className="hero">
        <MdcGridList>
            <MdcGridList_Item>
                <MdcGridList_Item_Primary />
            </MdcGridList_Item>
            <MdcGridList_Item>
                <MdcGridList_Item_Primary />
            </MdcGridList_Item>
            <MdcGridList_Item>
                <MdcGridList_Item_Primary />
            </MdcGridList_Item>
            <MdcGridList_Item>
                <MdcGridList_Item_Primary />
            </MdcGridList_Item>
            <MdcGridList_Item>
                <MdcGridList_Item_Primary />
            </MdcGridList_Item>
            <MdcGridList_Item>
                <MdcGridList_Item_Primary />
            </MdcGridList_Item>
            <MdcGridList_Item>
                <MdcGridList_Item_Primary />
            </MdcGridList_Item>
            <MdcGridList_Item>
                <MdcGridList_Item_Primary />
            </MdcGridList_Item>
            <MdcGridList_Item>
                <MdcGridList_Item_Primary />
            </MdcGridList_Item>
            <MdcGridList_Item>
                <MdcGridList_Item_Primary />
            </MdcGridList_Item>
            <MdcGridList_Item>
                <MdcGridList_Item_Primary />
            </MdcGridList_Item>
            <MdcGridList_Item>
                <MdcGridList_Item_Primary />
            </MdcGridList_Item>
        </MdcGridList>
    </section>
        <section className="example examples">
            <h2>Grid List (Default): tile aspect ratio 1x1 with oneline footer caption</h2>
            <MdcGridList headerCaption={false}>
                <MdcGridList_Item>
                    <MdcGridList_Item_Primary>
                        <img src="/demo/images/1-1.jpg" />
                    </MdcGridList_Item_Primary>
                    <MdcGridList_Item_Secondary>
                        <MdcGridList_Item_Secondary_Title>Single Very Long Grid Title Line</MdcGridList_Item_Secondary_Title>
                    </MdcGridList_Item_Secondary>
                </MdcGridList_Item>
                <MdcGridList_Item>
                    <MdcGridList_Item_Primary>
                        <img src="/demo/images/1-1.jpg" />
                    </MdcGridList_Item_Primary>
                    <MdcGridList_Item_Secondary>
                        <MdcGridList_Item_Secondary_Title>Single Very Long Grid Title Line</MdcGridList_Item_Secondary_Title>
                    </MdcGridList_Item_Secondary>
                </MdcGridList_Item>
                <MdcGridList_Item>
                    <MdcGridList_Item_Primary>
                        <img src="/demo/images/1-1.jpg" />
                    </MdcGridList_Item_Primary>
                    <MdcGridList_Item_Secondary>
                        <MdcGridList_Item_Secondary_Title>Single Very Long Grid Title Line</MdcGridList_Item_Secondary_Title>
                    </MdcGridList_Item_Secondary>
                </MdcGridList_Item>
                <MdcGridList_Item>
                    <MdcGridList_Item_Primary>
                        <img src="/demo/images/1-1.jpg" />
                    </MdcGridList_Item_Primary>
                    <MdcGridList_Item_Secondary>
                        <MdcGridList_Item_Secondary_Title>Single Very Long Grid Title Line</MdcGridList_Item_Secondary_Title>
                    </MdcGridList_Item_Secondary>
                </MdcGridList_Item>
            </MdcGridList>
            <h2>Grid List: tile aspect ratio 1x1 with twoline footer caption and icon at end of the caption</h2>
            <MdcGridList twoLineCaption={true} align={"end"}>
                <MdcGridList_Item>
                    <MdcGridList_Item_Primary>
                        <img src="/demo/images/1-1.jpg" />
                    </MdcGridList_Item_Primary>
                    <MdcGridList_Item_Secondary>
                        <MdcGridList_Item_Secondary_Title>Single Very Long Grid Title Line</MdcGridList_Item_Secondary_Title>
                        <MdcGridList_Item_Secondary_SupportText>Support text</MdcGridList_Item_Secondary_SupportText>
                        <MdcGridList_Item_Secondary_Icon>star_border</MdcGridList_Item_Secondary_Icon>
                    </MdcGridList_Item_Secondary>
                </MdcGridList_Item>
            </MdcGridList>
            <h2>Grid List: use div's background instead of img tag (useful when image ratio cannot be ensured)</h2>
            <MdcGridList headerCaption={true} aspect="16x9">
                <MdcGridList_Item>
                    <MdcGridList_Item_Primary>
                        <div className="demo-grid-tile-content"></div>
                    </MdcGridList_Item_Primary>
                    <MdcGridList_Item_Secondary>
                        <MdcGridList_Item_Secondary_Title>Single Very Long Grid Title Line</MdcGridList_Item_Secondary_Title>
                    </MdcGridList_Item_Secondary>
                </MdcGridList_Item>
            </MdcGridList>
        </section>
    </div>
}
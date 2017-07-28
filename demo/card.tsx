import * as Surplus from 'surplus';
Surplus;
import { S } from "surplus";
import { DataSignal } from "s-js";
import { SStyleType } from "surplus-mixins/style";

import { MdcCard, MdcCard_Actions, MdcCard_Media, MdcCard_Primary, MdcCard_Title, MdcCard_SubTitle, MdcCard_HorizontalBlock, MdcCard_MediaItem } from "../components/card";
import { MdcButton } from "../components/button";

export = (ctrl: any) => {
    return <div>
        <section className="hero">
            <MdcCard classes={{ "demo-card": true }}>
                <MdcCard_Media classes={{ "demo-card__16-9-media": true }} />
                <MdcCard_Primary>
                    <MdcCard_Title text={() => "Title goes here"} />
                    <MdcCard_SubTitle text={() => "Subtitle here"} />
                </MdcCard_Primary>
                <MdcCard_Actions>
                    <MdcButton>Action 1</MdcButton>
                    <MdcButton>Action 2</MdcButton>
                </MdcCard_Actions>
            </MdcCard>
        </section>
        <section className="demo-typography--section mdc-typography" id="demo-wrapper">
            <MdcCard dark={() => true} classes={{ "demo-card": true, "demo-card--bg-demo": true }}>
                <MdcCard_Primary>
                    <MdcCard_Title text={() => "Title goes here"} />
                    <MdcCard_SubTitle text={() => "Subtitle here"} />
                </MdcCard_Primary>
                <MdcCard_Actions>
                    <MdcButton dark={() => true} rippleEffect={() => false}>Action 1</MdcButton>
                    <MdcButton dark={() => true} rippleEffect={() => false}>Action 2</MdcButton>
                </MdcCard_Actions>
            </MdcCard>
            <div>
                <MdcCard classes={{ "demo-card": true }}>
                    <MdcCard_HorizontalBlock>
                        <MdcCard_MediaItem size={() => "3x"} src={()=>"images/1-1.jpg"}/>
                        <MdcCard_Actions vertical={()=>true}>
                            <MdcButton>A 1</MdcButton>
                            <MdcButton>A 2</MdcButton>
                        </MdcCard_Actions>
                    </MdcCard_HorizontalBlock>
                </MdcCard>
            </div>
        </section>
    </div>
}
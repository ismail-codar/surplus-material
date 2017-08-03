import * as Surplus from 'surplus';
Surplus;
import { S } from "surplus";
import { DataSignal } from "s-js";
import { MdcFab } from "../components/fab";
import mixins from "surplus-mixins/all";

export = (ctrl: any) => {
    return <div>
        <section className="hero">
            <MdcFab icon="favorite_border" label="Favorite" />
        </section>
        <section>
            <fieldset>
                <legend>Normal FABs</legend>
                <MdcFab icon="favorite_border" label="Favorite" mini={true} />
                <MdcFab icon="favorite_border" label="Favorite" mini={true} plain={true} />
            </fieldset>
        </section>
        <MdcFab {...mixins({
            attrs:{
                id:"demo-absolute-fab"
            }
        })} icon="favorite_border" label="Favorite" />
    </div>
}
import * as Surplus from 'surplus';
Surplus;
import { S } from "surplus";
import { DataSignal } from "s-js";
import { MdcLayoutGrid, MdcLayoutGrid_Cell } from "../components/layout-grid";

export = (ctrl: any) => {
    return <div><section className="hero">
        <MdcLayoutGrid classes={{ "demo-grid": true }}>
            <MdcLayoutGrid_Cell classes={{ "demo-cell": true }} cellSpan={4}></MdcLayoutGrid_Cell>
            <MdcLayoutGrid_Cell classes={{ "demo-cell": true }} cellSpan={4}></MdcLayoutGrid_Cell>
            <MdcLayoutGrid_Cell classes={{ "demo-cell": true }} cellSpan={4}></MdcLayoutGrid_Cell>
        </MdcLayoutGrid>
    </section>
        <section className="examples">
            <div className="demo-grid-legend">Grid of items with tweaks at different screen sizes</div>
            <MdcLayoutGrid classes={{ "demo-grid": true }}>
                <MdcLayoutGrid_Cell classes={{ "demo-cell": true }} cellSpan={{ "": 6, tablet: 8 }}>6 (8 tablet)</MdcLayoutGrid_Cell>
                <MdcLayoutGrid_Cell classes={{ "demo-cell": true }} cellSpan={{ "": 4, tablet: 6 }}>4 (6 tablet)</MdcLayoutGrid_Cell>
                <MdcLayoutGrid_Cell classes={{ "demo-cell": true }} cellSpan={{ "": 2, phone: 4 }}>2 (4 phone)</MdcLayoutGrid_Cell>
            </MdcLayoutGrid>
        </section>
    </div>
}
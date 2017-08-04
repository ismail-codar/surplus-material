import * as Surplus from 'surplus';
Surplus;
import { S } from "surplus";
import { DataSignal } from "s-js";
import { MdcSelect, MdcSelect_Item } from "../components/select";
import { selectElement } from "../components/_utils";

export = (ctrl: any) => {
    return <div>
        <section className="hero">
            <MdcSelect selectedText="Pick a food group">
                <MdcSelect_Item group>Pick a food group</MdcSelect_Item>
                <MdcSelect_Item>Bread, Cereal, Rice, and Pasta</MdcSelect_Item>
                <MdcSelect_Item group>Vegetables</MdcSelect_Item>
                <MdcSelect_Item>Fruit</MdcSelect_Item>
            </MdcSelect>
        </section>

        <section className="example">
            <h2 className="mdc-typography--title">CSS Only</h2>
            <select className="mdc-select">
                <option value="" default selected>Pick a food group</option>
                <option value="grains">Bread, Cereal, Rice, and Pasta</option>
                <option value="vegetables" disabled>Vegetables</option>
                <option value="fruit">Fruit</option>
                <option value="dairy">Milk, Yogurt, and Cheese</option>
                <option value="meat">Meat, Poultry, Fish, Dry Beans, Eggs, and Nuts</option>
                <option value="fats">Fats, Oils, and Sweets</option>
            </select>
        </section>

        <section className="example">
            <h2>Select Multiple - CSS Only</h2>
            {
                selectElement(<select multiple size={8}>
                <optgroup label="Fats, Oils, &amp; Sweets">
                    <option>Olive Oil</option>
                    <option>Brown Sugar</option>
                    <option>Ice Cream</option>
                </optgroup>
                <option disabled />
                <optgroup label="Dairy">
                    <option>Milk</option>
                    <option>Cheese</option>
                    <option>More Cheese</option>
                </optgroup>
            </select>)
            }
        </section>
    </div>
}
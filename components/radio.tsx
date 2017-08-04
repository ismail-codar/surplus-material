import * as Surplus from 'surplus';
Surplus;
import S from "s-js";
import { DataSignal } from "s-js";
import { MdcBaseProps, sDataValue } from "./_base";
import onmouse from "surplus-mixins/mouse";
import styles from "surplus-mixins/style";
import classes from "surplus-mixins/class";
import attrs from "surplus-mixins/attribute";

export interface MdcRadioProps extends MdcBaseProps {
    name: DataSignal<string> | string
    checked?: DataSignal<boolean> | boolean
    cssOnly?: DataSignal<boolean> | boolean
    label?: DataSignal<string> | string
}

export const MdcRadio = (props: MdcRadioProps) => {
    const id = Math.random().toString(36).substr(2, 10),
        cssOnly = props.cssOnly != undefined && sDataValue(props.cssOnly),
        dom = <div className="mdc-form-field">
            <div className="mdc-radio">
                <input id={id} className="mdc-radio__native-control" type="radio" checked={sDataValue(props.checked)} name={sDataValue(props.name)} />
                <div className="mdc-radio__background">
                    <div className="mdc-radio__outer-circle"></div>
                    <div className="mdc-radio__inner-circle"></div>
                </div>
            </div>
            {props.label ? <label {...attrs({ for: id }) }>{sDataValue(props.label)}</label> : null}
        </div>;
    if (!cssOnly) {
        const formField = new window["mdc"].formField.MDCFormField(dom),
            radio = new window["mdc"].radio.MDCRadio(dom.children[0])
        formField.input = radio
        S.cleanup(() => {
            formField.destroy()
            radio.destroy()
        });
    }

    return dom
}
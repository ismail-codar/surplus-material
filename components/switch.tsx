import * as Surplus from 'surplus';
Surplus;
import S from "s-js";
import { DataSignal } from "s-js";
import { MdcBaseProps } from "./_base";
import onmouse from "surplus-mixins/mouse";
import styles from "surplus-mixins/style";
import classes from "surplus-mixins/class";
import mixins from "surplus-mixins/all";

export interface MdcSwitchProps extends MdcBaseProps {
}

export const MdcSwitch = (props: MdcSwitchProps) =>
    <div
        {...mixins({
            attrs: props.attrs,
            styles: props.styles,
            onmouse: props.mouseEvents,
            classes: [
                {
                    "mdc-switch": true
                }, props.classes
            ]
        }) }>
        <input type="checkbox" className="mdc-switch__native-control" />
        <div className="mdc-switch__background">
            <div className="mdc-switch__knob"></div>
        </div>
    </div>
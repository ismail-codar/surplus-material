import * as Surplus from 'surplus';
Surplus;
import S from "s-js";
import { DataSignal } from "s-js";
import { MdcBaseProps, sDataValue } from "./base";
import onmouse from "surplus-mixins/mouse";
import styles from "surplus-mixins/style";
import classes from "surplus-mixins/class";
import mixins from "surplus-mixins/all";

export interface MdcLinearProgressProps extends MdcBaseProps {
    progress?: DataSignal<number> | number
    buffer?: DataSignal<number> | number
    indeterminate?: DataSignal<boolean> | boolean
    reversed?: DataSignal<boolean> | boolean
    accent?: DataSignal<boolean> | boolean
}

//mdc-linear-progress--accent

export const MdcLinearProgress = (props: MdcLinearProgressProps) => {
    const dom = <div {
        ...mixins({
        attrs: props.attrs,
        styles: props.styles,
        classes: [
            {
                "mdc-linear-progress": true,
                "mdc-linear-progress--indeterminate": sDataValue(props.indeterminate),
                "mdc-linear-progress--reversed": sDataValue(props.reversed),
                "mdc-linear-progress--accent": sDataValue(props.accent)
            }, 
            props.classes
        ]
    }) } role="progressbar">
        <div className="mdc-linear-progress__buffering-dots"></div>
        <div className="mdc-linear-progress__buffer"></div>
        <div className="mdc-linear-progress__bar mdc-linear-progress__primary-bar">
            <span className="mdc-linear-progress__bar-inner"></span>
        </div>
        <div className="mdc-linear-progress__bar mdc-linear-progress__secondary-bar">
            <span className="mdc-linear-progress__bar-inner"></span>
        </div>
    </div>,
        linearProgress = window["mdc"].linearProgress.MDCLinearProgress.attachTo(dom);
    S.cleanup(() => linearProgress.destroy());

    if (props.progress)
        if (typeof props.progress == "function")
            S.on(props.progress, () => {
                linearProgress.progress = (props.progress as any)();
            })
        else
            linearProgress.progress = props.progress
    if (props.buffer)
        if (typeof props.buffer == "function")
            S.on(props.buffer, () => {
                linearProgress.buffer = (props.buffer as any)();
            })
        else
            linearProgress.buffer = props.buffer
    return dom
}
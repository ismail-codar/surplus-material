import * as Surplus from 'surplus';
Surplus;
import S from "s-js";
import { DataSignal } from "s-js";
import { MdcBaseProps, sDataValue, MdcIntentitonType } from "./_base";
import onmouse from "surplus-mixins/mouse";
import styles from "surplus-mixins/style";
import classes from "surplus-mixins/class";
import mixins from "surplus-mixins/all";

export type OnOffType = "on" | "off"

export interface MdcIconToggleProps extends MdcBaseProps {
    state: DataSignal<OnOffType>
    intention?: DataSignal<MdcIntentitonType> | MdcIntentitonType
    on: {
        icon: DataSignal<string> | string
        label: DataSignal<string> | string
    }
    off: {
        icon: DataSignal<string> | string
        label: DataSignal<string> | string
    }
}


export const MdcIconToggle = (props: MdcIconToggleProps) => {
    const state = sDataValue(props.state),
        dom = props.on.icon.toString().startsWith("fa-") ?
            <span
                role="button"
                aria-label={sDataValue(props[state].label)}
                { ...mixins({
                    attrs: props.attrs,
                    styles: props.styles,
                    classes: [
                        {
                            "mdc-icon-toggle": true,
                            "mdc-icon-toggle--on": true,
                            "mdc-icon-toggle--primary": props.intention && sDataValue(props.intention) == "primary",
                            "mdc-icon-toggle--accent": props.intention && sDataValue(props.intention) == "accent"
                        }, props.classes
                    ]
                }) }><i {...classes({
                    fa: true,
                    [sDataValue(props[state].icon)]: true
                }) } aria-hidden="true"></i></span>
            :
            <i
                role="button"
                aria-label={sDataValue(props[state].label)}
                { ...mixins({
                    attrs: props.attrs,
                    styles: props.styles,
                    classes: [
                        {
                            "mdc-icon-toggle": true,
                            "material-icons": true
                        }, props.classes
                    ]
                }) }>{sDataValue(props[state].icon)}</i>,
        iconToggle = window["mdc"].iconToggle.MDCIconToggle.attachTo(dom)
    S.cleanup(() => iconToggle.destroy());

    dom.addEventListener('MDCIconToggle:change', function (evt: any) {
        dom.addEventListener("animationend", () => {
            props.state(props.state() == "off" ? "on" : "off")
        });
    });
    return dom
}
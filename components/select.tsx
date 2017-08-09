import * as Surplus from 'surplus';
Surplus;
import S from "s-js";
import { DataSignal } from "s-js";
import { MdcBaseProps, sDataValue } from "./_base";
import onmouse from "surplus-mixins/mouse";
import styles from "surplus-mixins/style";
import classes from "surplus-mixins/class";
import mixins from "surplus-mixins/all";

export interface MdcSelectProps extends MdcBaseProps {
    selectedText?: DataSignal<string> | string
    cssOnly?: boolean
}
export interface MdcSelectItemProps extends MdcBaseProps {
    group?: boolean
}

export const MdcSelect = (props: MdcSelectProps) => {
    const dom = <div
        fn={mixins({
            attrs: [{ role: "listbox" }, props.attrs],
            styles: props.styles,
            classes: [
                {
                    "mdc-select": true,
                }, props.classes
            ]
        }) }>
        <span className="mdc-select__selected-text">{sDataValue(props.selectedText)}</span>
        <div className="mdc-simple-menu mdc-select__menu">
            <ul className="mdc-list mdc-simple-menu__items">{props.children}</ul>
        </div>
    </div>;
    let select = null
    window.requestAnimationFrame(() => {
        select = props.cssOnly === undefined || props.cssOnly ? window["mdc"].select.MDCSelect.attachTo(dom) : null
    })
    S.cleanup(() => select && select.destroy());

    return dom
}


export const MdcSelect_Item = (props: MdcSelectItemProps) =>
    <li
        fn={mixins({
            attrs: [{ role: "option", "aria-disabled": props.group }, props.attrs],
            styles: props.styles,
            onmouse: props.mouseEvents,
            classes: [
                {
                    "mdc-list-item": true,
                }, props.classes
            ]
        }) }
        role="option">{props.children}
    </li>
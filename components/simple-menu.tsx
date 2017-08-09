import * as Surplus from 'surplus';
Surplus;
import S from "s-js";
import { DataSignal } from "s-js";
import { MdcBaseProps, sDataValue } from "./_base";
import onmouse from "surplus-mixins/mouse";
import styles from "surplus-mixins/style";
import classes from "surplus-mixins/class";
import mixins from "surplus-mixins/all";

export interface MdcSimpleMenuProps extends MdcBaseProps {
    cssOnly?: boolean
    open?: DataSignal<boolean>
}

export const MdcSimpleMenu = (props: MdcSimpleMenuProps) => {
    const dom = <div
        fn={mixins({
            attrs: props.attrs,
            styles: props.styles,
            classes: [
                {
                    "mdc-simple-menu": true,
                    "mdc-simple-menu--open": props.open === undefined,
                }, props.classes
            ]
        }) }>
        <ul className="mdc-simple-menu__items mdc-list">{props.children}</ul>
    </div>,
        simpleMenu = props.cssOnly === undefined || !props.cssOnly ? new window["mdc"].menu.MDCSimpleMenu(dom) : null
    if (props.open) {
        S.on(props.open, () => {
            simpleMenu.open = props.open()
        })
    }
    S.cleanup(() => simpleMenu && simpleMenu.destroy());
    return dom
}

export const MdcSimpleMenu_Item = (props: MdcBaseProps) =>
    <li  fn={mixins({
        attrs: [{ role: "menuitem" }, props.attrs],
        styles: props.styles,
        classes: [
            {
                "mdc-list-item": props.children.length > 0,
                "mdc-list-divider": props.children.length === 0,
            }, props.classes
        ]
    }) }>{props.children}</li>

export const MdcSimpleMenu_Anchor = (props: MdcBaseProps) =>
    <div fn={mixins({
        attrs: props.attrs,
        styles: props.styles,
        classes: [
            {
                "mdc-menu-anchor": true,
            }, props.classes
        ]
    }) }>{props.children}</div>
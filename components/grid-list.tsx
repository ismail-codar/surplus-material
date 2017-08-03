import * as Surplus from 'surplus';
Surplus;
import S from "s-js";
import { DataSignal } from "s-js";
import { MdcBaseProps, sDataValue } from "./base";
import onmouse from "surplus-mixins/mouse";
import styles from "surplus-mixins/style";
import classes from "surplus-mixins/class";
import mixins from "surplus-mixins/all";

export type GridListStartEndType = "start" | "end"
export type GridListAspect = "16x9" | "3x2" | "2x3" | "4x3" | "3x4"

export interface MdcGridListProps extends MdcBaseProps {
    gutter1?: DataSignal<boolean> | boolean
    headerCaption?: DataSignal<boolean> | boolean
    twoLineCaption?: DataSignal<boolean> | boolean
    align?: DataSignal<GridListStartEndType> | GridListStartEndType
    aspect?: DataSignal<GridListAspect> | GridListAspect
}
export interface MdcGridListSecondaryIconProps extends MdcBaseProps {
    icon?: DataSignal<string> | string
}

export const MdcGridList = (props: MdcGridListProps) => {
    const dom = <div {...mixins({
        attrs: props.attrs,
        styles: props.styles,
        onmouse: props.mouseEvents,
        classes: [
            {
                "mdc-grid-list": true,
                "mdc-grid-list--tile-gutter-1": sDataValue(props.gutter1),
                "mdc-grid-list--header-caption": sDataValue(props.headerCaption),
                "mdc-grid-list--twoline-caption": sDataValue(props.twoLineCaption),
                ["mdc-grid-list--with-icon-align-" + sDataValue(props.align)]: true,
                ["mdc-grid-list--tile-aspect-" + sDataValue(props.aspect)]: true
            }, props.classes
        ]
    }) } >
        <ul className="mdc-grid-list__tiles" >
            {props.children}
        </ul>
    </div>,
        gridList = window["mdc"].gridList.MDCGridList.attachTo(dom)
    S.cleanup(() => gridList.destroy());
    return dom
}

export const MdcGridList_Item = (props: MdcBaseProps) => <li
    { ...mixins({
        attrs: props.attrs,
        styles: props.styles,
        onmouse: props.mouseEvents,
        classes: [
            {
                "mdc-grid-tile": true
            }, props.classes
        ]
    }) } >  {props.children}
</li>


export const MdcGridList_Item_Primary = (props: MdcBaseProps) => {
    if (props.children.length > 0)
        (props.children[0] as HTMLElement).classList.add("mdc-grid-tile__primary-content")
    return <div { ...mixins({
        attrs: props.attrs,
        styles: props.styles,
        onmouse: props.mouseEvents,
        classes: [
            {
                "mdc-grid-tile__primary": true
            }, props.classes
        ]
    }) } >
        {props.children}
    </div>
}


/**
 <span class="mdc-grid-tile__secondary">
    <i class="mdc-grid-tile__icon material-icons">star_border</i>
    <span class="mdc-grid-tile__title">Single Very Long Grid Title Line</span>
    <span class="mdc-grid-tile__support-text">Support text</span>
</span>
 */
export const MdcGridList_Item_Secondary = (props: MdcBaseProps) =>
    <span { ...mixins({
        attrs: props.attrs,
        styles: props.styles,
        onmouse: props.mouseEvents,
        classes: [
            {
                "mdc-grid-tile__secondary": true
            }, props.classes
        ]
    }) } >
        {props.children}
    </span>
export const MdcGridList_Item_Secondary_Title = (props: MdcBaseProps) =>
    <span { ...mixins({
        attrs: props.attrs,
        styles: props.styles,
        onmouse: props.mouseEvents,
        classes: [
            {
                "mdc-grid-tile__title": true
            }, props.classes
        ]
    }) } >
        {props.children}
    </span>
export const MdcGridList_Item_Secondary_SupportText = (props: MdcBaseProps) =>
    <span { ...mixins({
        attrs: props.attrs,
        styles: props.styles,
        onmouse: props.mouseEvents,
        classes: [
            {
                "mdc-grid-tile__support-text": true
            }, props.classes
        ]
    }) } >
        {props.children}
    </span>
export const MdcGridList_Item_Secondary_Icon = (props: MdcBaseProps) =>
    <i { ...mixins({
        attrs: props.attrs,
        styles: props.styles,
        onmouse: props.mouseEvents,
        classes: [
            {
                "mdc-grid-tile__icon": true,
                "material-icons": true
            }, props.classes
        ]
    }) } >
        {props.children}
    </i>
import * as Surplus from 'surplus';
Surplus;
import S from "s-js";
import { DataSignal } from "s-js";
import { MdcBaseProps } from "./base";
import onmouse from "surplus-mixins/mouse";
import styles from "surplus-mixins/style";
import classes from "surplus-mixins/class";


export interface MdcCardProps extends MdcBaseProps {
    dark?: DataSignal<boolean>
}

export interface MdcCardTextProps extends MdcBaseProps {
    text: DataSignal<string>
}

export interface MdcCardActionsProps extends MdcBaseProps {
    vertical?: DataSignal<boolean>
}
export interface MdcMediaItemProps extends MdcBaseProps {
    size: DataSignal<"1dot5x" | "2x" | "3x">
    src: DataSignal<string>
}



export const MdcCard = (props: MdcCardProps) =>
    <div {...styles(props.styles) } {...classes({ "mdc-card": true, "mdc-card--theme-dark": props.dark }, props.classes) }>
        {props["children"]}
    </div>


export const MdcCard_Actions = (props: MdcCardActionsProps) => {
    props.children.forEach((child) => {
        child.classList.add("mdc-button--compact", "mdc-card__action")
    })
    return <section {...styles(props.styles) } {...classes({ "mdc-card__actions": true, "mdc-card__actions--vertical": props.vertical }, props.classes) }>
        {props.children}
    </section>
}

export const MdcCard_Media = (props: MdcBaseProps) =>
    <section {...styles(props.styles) } {...classes({ "mdc-card__media": true }, props.classes) }>
        {props.children}
    </section>
export const MdcCard_MediaItem = (props: MdcMediaItemProps) =>
    <img src={props.src()} {...styles(props.styles) } {...classes({ "mdc-card__media-item": true, ["mdc-card__media-item--" + props.size()]: true }, props.classes) }/>

export const MdcCard_Primary = (props: MdcBaseProps) =>
    <section {...styles(props.styles) } {...classes({ "mdc-card__primary": true }, props.classes) }>
        {props.children}
    </section>

export const MdcCard_Title = (props: MdcCardTextProps) =>
    <h1 {...styles(props.styles) } {...classes({ "mdc-card__title": true, "mdc-card__title--large": true }, props.classes) }>
        {props.text()}
    </h1>
export const MdcCard_SubTitle = (props: MdcCardTextProps) =>
    <h2 {...styles(props.styles) } {...classes({ "mdc-card__subtitle": true }, props.classes) }>
        {props.text()}
    </h2>
export const MdcCard_SupportingText = (props: MdcCardTextProps) =>
    <h2 {...styles(props.styles) } {...classes({ "mdc-card__supporting-text": true }, props.classes) }>
        {props.text()}
    </h2>

export const MdcCard_HorizontalBlock = (props: MdcBaseProps) =>
    <div {...styles(props.styles) } {...classes({ "mdc-card__horizontal-block": true }, props.classes) }>
        {props.children}
    </div>
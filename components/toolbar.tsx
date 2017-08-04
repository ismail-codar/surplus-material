import * as Surplus from 'surplus';
Surplus;
import S from "s-js";
import { DataSignal } from "s-js";
import { MdcBaseProps, sDataValue, propsMixins } from "./_base";
import onmouse from "surplus-mixins/mouse";
import styles from "surplus-mixins/style";
import classes from "surplus-mixins/class";
import mixins from "surplus-mixins/all";

export interface MdcToolbarItemProps extends MdcBaseProps {
    type: "menuicon" | "title" | "linkicon"
    text?: DataSignal<string> | string

    href?: DataSignal<string> | string
    icon?: DataSignal<string> | string
}

export interface MdcToolbarRowProps extends MdcBaseProps {
    sections: { type: "start" | "center" | "end", items: MdcToolbarItemProps[] }[]
}

export interface MdcToolbarSectionProps extends MdcBaseProps { type: string, items: MdcToolbarItemProps[] }

export interface MdcToolbarProps extends MdcBaseProps {
    fixed?: DataSignal<boolean> | boolean
    waterfall?: DataSignal<boolean> | boolean
    flexible?: DataSignal<boolean> | boolean
    flexibleSpaceMinimized?: DataSignal<boolean> | boolean
    flexibleSpaceMaximized?: DataSignal<boolean> | boolean
    flexibleDefaultBehavior?: DataSignal<boolean> | boolean
    items: MdcToolbarRowProps[] | MdcToolbarRowProps
}

const MdcToolbar_Item = (props: MdcToolbarItemProps) => {
    if (props.type === "menuicon")
        return <a {...propsMixins(props, {
            attrs: props.attrs,
            styles: props.styles,
            classes: [{
                "material-icons": true,
                "mdc-toolbar__icon--menu": true
            }, props.classes],
            onmouse: props.mouseEvents
        }) } href={sDataValue(props.href) || "#"} >menu</a>;
    if (props.type === "title")
        return <span {...mixins({
            attrs: props.attrs,
            styles: props.styles,
            classes: [{ "mdc-toolbar__title": true }, props.classes]
        }) } >{sDataValue(props.text)}</span>;
    if (props.type === "linkicon")
        return <a {...mixins({
            attrs: props.attrs,
            styles: props.styles,
            classes: [
                {
                    "material-icons": true,
                    "mdc-toolbar__icon": true
                }, props.classes]
        }) } href={sDataValue(props.href)}
            aria-label={sDataValue(props.text)}
            alt={sDataValue(props.text)}
        >{sDataValue(props.icon)}</a>
    else
        return null
}
const MdcToolbar_Section = (props: MdcToolbarSectionProps) =>
    <section {
        ...mixins({
            attrs: props.attrs,
            styles: props.styles,
            classes: [{ "mdc-toolbar__section": true, ["mdc-toolbar__section--align-" + props.type]: true }, props.classes]
        })
    } >
        {props.items.map(item => <MdcToolbar_Item {...item} />)}
    </section>

export const MdcToolbar = (props: MdcToolbarProps) => {
    let items: MdcToolbarRowProps[] = null
    if (props.items instanceof Array) {
        items = props.items
    } else
        items = [items as any]
    const dom = <header {...mixins({
        attrs: props.attrs,
        styles: props.styles,
        classes: [
            {
                "mdc-toolbar": true,
                "mdc-toolbar--waterfall": sDataValue(props.waterfall),
                "mdc-toolbar--fixed": sDataValue(props.fixed),
                "mdc-toolbar--flexible": sDataValue(props.flexible),
                "mdc-toolbar--flexible-default-behavior": sDataValue(props.flexibleDefaultBehavior),
                "mdc-toolbar--flexible-space-maximized": sDataValue(props.flexibleSpaceMaximized),
                "mdc-toolbar--flexible-space-minimized": sDataValue(props.flexibleSpaceMinimized),
            },
            props.classes
        ]
    }) }>
        {
            items.map((toolbarRow: MdcToolbarRowProps) =>
                <div {
                    ...mixins({
                        attrs: props.attrs,
                        styles: props.styles,
                        classes: [{ "mdc-toolbar__row": true }, props.classes]
                    })
                } >
                    {toolbarRow.sections.map(section => <MdcToolbar_Section {...section}></MdcToolbar_Section>)}
                </div>
            )
        }
    </header>,
        toolbar = window["mdc"].toolbar.MDCToolbar.attachTo(dom);
    S.cleanup(() => toolbar.destroy())
    return dom
}
import * as Surplus from 'surplus';
Surplus;
import S from "s-js";
import { DataSignal } from "s-js";
import { MdcBaseProps, sDataValue } from "./_base";
import onmouse from "surplus-mixins/mouse";
import styles from "surplus-mixins/style";
import classes from "surplus-mixins/class";
import mixins from "surplus-mixins/all";

export interface MdcTabsProps extends MdcBaseProps {
    scrollable?: boolean
    onChange?: (tab) => void
}

export interface MdcTabItemProps extends MdcBaseProps {
    href: DataSignal<string> | string
    materialIcon?: DataSignal<string> | string
}

const MdcTab_Scroller = (props: MdcBaseProps) => {
    (props.children[0] as HTMLElement).classList.add("mdc-tab-bar-scroller__scroll-frame__tabs")
    const dom = <div
        {...mixins({
            attrs: props.attrs,
            styles: props.styles,
            classes: [
                {
                    "mdc-tab-bar-scroller": true
                }, props.classes
            ]
        }) } >
        <div className="mdc-tab-bar-scroller__indicator mdc-tab-bar-scroller__indicator--back">
            <a className="mdc-tab-bar-scroller__indicator__inner material-icons" href="#" aria-label="scroll back button">
                navigate_before
              </a>
        </div>
        <div className="mdc-tab-bar-scroller__scroll-frame">
            {props.children}
        </div>
        <div className="mdc-tab-bar-scroller__indicator mdc-tab-bar-scroller__indicator--forward">
            <a className="mdc-tab-bar-scroller__indicator__inner material-icons" href="#" aria-label="scroll forward button">
                navigate_next
              </a>
        </div>
    </div>,
        scroller = new window["mdc"].tabs.MDCTabBarScroller(dom)
    dom["$scroller"] = scroller
    S.cleanup(() => scroller.destroy());
    return dom
}

export const MdcTabs = (props: MdcTabsProps) => {
    const dom = <nav
        {...mixins({
            attrs: props.attrs,
            styles: props.styles,
            classes: [
                {
                    "mdc-tab-bar": true
                }, props.classes
            ]
        }) } >
        {props.children}
        <span className="mdc-tab-bar__indicator"></span>
    </nav>
    if (props.scrollable) {
        const scroller = <MdcTab_Scroller>{dom}</MdcTab_Scroller>
        scroller["$scroller"].tabBar_.listen('MDCTabBar:change', props.onChange)
        return scroller
    } else {
        const tabs = new window["mdc"].tabs.MDCTabBar(dom)
        tabs.listen('MDCTabBar:change', props.onChange)
        S.cleanup(() => tabs.destroy());
        return dom
    }
}

export const MdcTab_Item = (props: MdcTabItemProps) =>
    <a {...mixins({
        attrs: props.attrs,
        styles: props.styles,
        classes: [
            {
                "mdc-tab": true
            }, props.classes
        ]
    }) } href={sDataValue(props.href)}>
        {props.materialIcon ? <i className="material-icons mdc-tab__icon" aria-label={(props.children.length && props.children[0]["innerText"]) || props.children} >{props.materialIcon}</i> : props.children}
    </a>
import * as Surplus from 'surplus';
Surplus;
import S from "s-js";
import { DataSignal } from "s-js";
import { MdcBaseProps, sDataValue } from "./_base";
import mixins from "surplus-mixins/all";

export interface MdcListProps extends MdcBaseProps {
    rippleEffect?: DataSignal<boolean> | boolean
    dense?: DataSignal<boolean> | boolean
    avatar?: DataSignal<boolean> | boolean
    towLine?: DataSignal<boolean> | boolean
}

export interface MdcListItemProps extends MdcBaseProps {
    startDetail?: HTMLElement
    endDetail?: HTMLElement
    primaryText?: HTMLElement
    secondaryText?: HTMLElement
}


export const MdcList = (props: MdcListProps) => {
    const ripples = [];
    const rippleEffect = props.rippleEffect == undefined || sDataValue(props.rippleEffect);
    (props.children as HTMLElement[]).forEach(child => {
        if (rippleEffect) {
            ripples.push(window["mdc"].ripple.MDCRipple.attachTo(child))
        }
    });
    const dom = <ul {...mixins({
        attrs: props.attrs,
        styles: props.styles,
        classes: [
            {
                "mdc-list": true,
                "mdc-list--two-line": sDataValue(props.towLine),
                "mdc-list--avatar-list": sDataValue(props.avatar),
                "mdc-list--dense": sDataValue(props.dense)
            },
            props.classes
        ]
    }) }>
        {props.children}
    </ul>
    S.cleanup(() => {
        ripples.forEach(ripple => {
            ripple.destroy()
        })
    });

    return dom
}


export const MdcList_Item = (props: MdcListItemProps) => {
    const startDetail = props.startDetail
    const endDetail = props.endDetail
    const primaryText = props.primaryText
    const secondaryText = props.secondaryText
    if (startDetail)
        startDetail.classList.add("mdc-list-item__start-detail")
    if (endDetail)
        endDetail.classList.add("mdc-list-item__end-detail")
    if (primaryText) {
        primaryText.classList.add("mdc-list-item__text")
        if (secondaryText) {
            secondaryText.classList.add("mdc-list-item__text__secondary")
            primaryText.appendChild(secondaryText)
        }
    }
    return <li
        {...mixins({
            attrs: props.attrs,
            styles: props.styles,
            onmouse: props.mouseEvents,
            classes: [
                {
                    "mdc-list-item": true
                }, props.classes
            ]
        }) }>
        {startDetail}
        {primaryText}
        {props.children}
        {endDetail}
    </li>
}
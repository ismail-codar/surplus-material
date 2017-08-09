import { DataSignal } from 's-js';
import { sDataValue, MdcIntentitonType, MdcTextType } from "./_base";
import mdDateTimePicker from "md-date-time-picker"
import { Moment } from "moment/moment";

//dom element utils
export const mdcRippleSurfaceElement = (element: HTMLElement, intention?: MdcIntentitonType, cssOnly?: boolean): HTMLElement => {
    element.classList.add("mdc-ripple-surface")
    if (intention)
        element.classList.add("mdc-ripple-surface--" + intention)
    if (!cssOnly)
        window["mdc"].ripple.MDCRipple.attachTo(element)
    return element
}

export const mdcSelectElement = (element: HTMLElement): HTMLSelectElement => {
    element.classList.add("mdc-multi-select", "mdc-list");
    [].forEach.call(element.children, (child: HTMLElement) => {
        console.log(child.tagName)
        if (child.tagName === "OPTGROUP") {
            child.classList.add("mdc-list-group");
            [].forEach.call(child.children, (option) => {
                option.classList.add("mdc-list-item")
            })
        } else {
            child.classList.add("mdc-list-item")
            if (child["disabled"]) {
                child.classList.add("mdc-list-divider")
                child.setAttribute("role", "presentation")
            }
        }
    });
    return element as HTMLSelectElement
}

//theme css utils
export const mdcThemeTextColor = (intention: MdcIntentitonType) =>
    "mdc-theme--" + intention
export const mdcThemeBackgroundColor = (intention?: MdcIntentitonType) =>
    intention ? "mdc-theme--" + intention + "-bg" : "mdc-theme--background"

export const mdcThemeTextColorOnBackground = (textType: MdcTextType, background?: MdcIntentitonType) =>
    "mdc-theme--text-" + textType + "-on-" + (background ? background : "background")


//other css utils
export type ElevationType = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24
export const mdcElevationClass = (elevation: DataSignal<ElevationType> | ElevationType) =>
    "mdc-elevation--z" + sDataValue(elevation)


//TODO https://github.com/material-components/material-components-web/tree/master/packages/mdc-typography
export const mdcTypography = (typography?: "display4" | "display3" | "display2" | "display1" |
    "subheading2" | "subheading1" |
    "body2" | "body1" |
    "headline" | "title" | "caption" | "button" | "adjust-margin") =>
    "mdc-typography" + (typography ? "--" + typography : "")


//https://github.com/puranjayjain/md-date-time-picker/blob/master/src/js/mdDateTimePicker.js
export interface MdcDateTime {
    type: "date" | "time"
    init: Moment
    past: Moment
    future: Moment
    mode: boolean
    orientation: "LANDSCAPE" | "PORTRAIT"
    trigger: EventTarget //onCancel //onOk
    ok: string
    cancel: string
    colon: boolean
    autoClose: boolean
    inner24: boolean
    prevHandle: string
    nextHandle: string
}

export interface MdcDateTimePicker {
    toggle: () => void
    hide: () => void
    show: () => void
    isClosed: () => void
    isOpen: () => void
    time:Moment
}

export const mdcDateTimePicker = (options: Partial<MdcDateTime>): MdcDateTimePicker => {
    return new mdDateTimePicker(options)
}
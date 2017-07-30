import * as Surplus from 'surplus';
Surplus;
import S from "s-js";
import { DataSignal } from "s-js";
import { MdcBaseProps, sDataValue } from "./base";
import onmouse from "surplus-mixins/mouse";
import styles from "surplus-mixins/style";
import classes from "surplus-mixins/class";
import { MdcButton, MdcButtonProps } from "./button";

export interface MdcDialogProps extends MdcBaseProps {
    opened?: boolean
    open: DataSignal<boolean>
    headerText: DataSignal<string> | string
    scrollable?: DataSignal<boolean> | boolean
    declineButtonText?: DataSignal<string> | string
    acceptButtonText?: DataSignal<string> | string
    extraButtons?: MdcButtonProps[]
    onResult?: (accepted: boolean) => void
}

export const MdcDialog = (props: MdcDialogProps) => {
    const dom = <aside
        {...styles(props.styles) }
        {...classes({
            "mdc-dialog": true
        }, props.classes) }
        role="alertdialog"
        aria-hidden="true">
        <div className="mdc-dialog__surface">
            <header className="mdc-dialog__header">
                <h2 className="mdc-dialog__header__title">
                    {sDataValue(props.headerText)}
                </h2>
            </header>
            <section
                {...classes({
                    "mdc-dialog__body": true,
                    "mdc-dialog__body--scrollable": sDataValue(props.scrollable)
                }, props.classes) }>
                {props.children}
            </section>
            <footer className="mdc-dialog__footer">
                {props.extraButtons ? props.extraButtons.map(item => {
                    item.classes = { "mdc-dialog__footer__button": true }
                    item.rippleEffect = false
                    return <MdcButton {...item}>{item.children}</MdcButton>
                }) : null}
                <button type="button" className="mdc-button mdc-dialog__footer__button mdc-dialog__footer__button--cancel">{sDataValue(props.declineButtonText) || "Decline"}</button>
                <button type="button" className="mdc-button mdc-dialog__footer__button mdc-dialog__footer__button--accept">{sDataValue(props.acceptButtonText) || "Accept"}</button>
            </footer>
        </div>
        <div className="mdc-dialog__backdrop"></div>
    </aside>,
        dialog = new window["mdc"].dialog.MDCDialog(dom)
    S.on(props.open, () => {
        if (props.open())
            dialog.show()
        else if (props.opened)
            dialog.close()
        props.opened = !dialog.opened
    })
    S.cleanup(() => dialog.destroy());

    dialog.listen('MDCDialog:accept', function () {
        props.onResult && props.onResult(true)
    });
    dialog.listen('MDCDialog:cancel', function () {
        props.onResult && props.onResult(false)
    });
    return dom
}
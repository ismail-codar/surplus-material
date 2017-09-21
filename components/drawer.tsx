import * as Surplus from 'surplus';
Surplus;
import S from 's-js';
import { DataSignal } from 's-js';
import { MdcBaseProps, sDataValue } from './_base';
import onmouse from 'surplus-mixins/mouse';
import styles from 'surplus-mixins/style';
import classes from 'surplus-mixins/class';
import mixins from 'surplus-mixins/all';

export interface MdcDrawerProps extends MdcBaseProps {
  header: HTMLElement;
  open: DataSignal<boolean>;
}
export interface MdcPermanentDrawerProps extends MdcBaseProps {
  spacer: boolean;
}

export const MdcTemporaryDrawer = (props: MdcDrawerProps) => {
  props.header.classList.add(
    'mdc-temporary-drawer__header-content',
    'mdc-theme--primary-bg',
    'mdc-theme--text-primary-on-primary'
  );
  const dom = (
      <aside
        fn={mixins({
          attrs: props.attrs,
          styles: props.styles,
          classes: [
            {
              'mdc-temporary-drawer': true
            },
            props.classes
          ]
        })}
      >
        <nav className="mdc-temporary-drawer__drawer">
          <header className="mdc-temporary-drawer__header">
            {props.header}
          </header>
          <nav className="mdc-temporary-drawer__content mdc-list-group">
            {props.children}
          </nav>
        </nav>
      </aside>
    ),
    drawer = new window['mdc'].drawer.MDCTemporaryDrawer(dom);
  S.on(props.open, () => {
    drawer.getDefaultFoundation()[props.open() ? 'open' : 'close']();
  });
  S.cleanup(() => drawer.destroy());
  return dom;
};

export const MdcPersistentDrawer = (props: MdcDrawerProps) => {
  const dom = (
      <aside
        fn={mixins({
          attrs: props.attrs,
          styles: props.styles,
          classes: [
            {
              'mdc-persistent-drawer': true,
              'mdc-persistent-drawer--open': sDataValue(props.open)
            },
            props.classes
          ]
        })}
      >
        <nav className="mdc-persistent-drawer__drawer">
          <div className="mdc-persistent-drawer__toolbar-spacer" />
          <div className="mdc-list-group">{props.children}</div>
        </nav>
      </aside>
    ),
    drawer = new window['mdc'].drawer.MDCPersistentDrawer(dom);
  S.cleanup(() => drawer.destroy());
  return dom;
};
export const MdcPermanentDrawer = (props: MdcPermanentDrawerProps) => (
  <nav
    fn={mixins({
      attrs: props.attrs,
      styles: props.styles,
      classes: [
        {
          'mdc-permanent-drawer': true
        },
        props.classes
      ]
    })}
  >
    {props.spacer ? null : (
      <div className="mdc-permanent-drawer__toolbar-spacer" />
    )}
    <div className="mdc-list-group">{props.children}</div>
  </nav>
);

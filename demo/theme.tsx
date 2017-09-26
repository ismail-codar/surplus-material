import * as Surplus from 'surplus';
Surplus;
import { S } from 'surplus';
import { DataSignal } from 's-js';
import { MdcButton } from '../components/button';
import {
  mdcThemeBackgroundColor,
  mdcThemeTextColorOnBackground
} from '../components/_utils';
import { classes } from 'surplus-mixins';

// mdc-theme--primary-bg mdc-theme--text-primary-on-primary
// mdc-theme--primary-bg mdc-theme--text-primary-on-background
export = (ctrl: any) => {
  return (
    <section className="hero">
      <button
        fn={classes({
          [mdcThemeBackgroundColor('primary')]: true,
          [mdcThemeTextColorOnBackground('primary', 'primary')]: true
        })}
      >
        Primary
      </button>
    </section>
  );
};

import * as Surplus from 'surplus';
Surplus;
import { S } from 'surplus';
import { DataSignal } from 's-js';
import { mdcTypography } from '../components/_utils';
import { classes } from 'surplus-mixins';

export = (ctrl: any) => {
  return (
    <section className="hero">
      <h1
        fn={classes({
          [mdcTypography('display4')]: true,
          [mdcTypography('adjust-margin')]: true
        })}
      >
        Display 4
      </h1>
    </section>
  );
};

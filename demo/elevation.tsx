import * as Surplus from 'surplus';
Surplus;
import { S } from 'surplus';
import { DataSignal } from 's-js';
import { mdcElevationClass } from '../components/_utils';
import { classes } from 'surplus-mixins';

export = (ctrl: any) => {
  for (let i = 0; i < 24; i++) {}
  return (
    <div>
      <section className="hero">
        <figure
          fn={classes({
            'demo-surface': true,
            [mdcElevationClass(0)]: true
          })}
        >
          <figcaption>FLAT 0dp</figcaption>
        </figure>
        <figure
          fn={classes({
            'demo-surface': true,
            [mdcElevationClass(1)]: true
          })}
        >
          <figcaption>FLAT 1dp</figcaption>
        </figure>
      </section>
      <section className="demo-surfaces">
        {Array.from(Array(25).keys()).map(i => (
          <figure
            {...classes({
              'demo-surface': true,
              [mdcElevationClass(i as any)]: true
            })}
          >
            <figcaption>
              0dp (<code>mdc-elevation--z{i}</code>)
            </figcaption>
          </figure>
        ))}
      </section>
    </div>
  );
};

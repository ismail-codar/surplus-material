import * as Surplus from 'surplus';
import { S } from 'surplus';

import { MdcCheckbox } from '../components/checkbox';

Surplus;
const checked = S.data(true);
const value = S.data(99);

setTimeout(() => {
  checked(false);
}, 2000);

export = (ctrl: any) => {
  return (
    <section className="hero">
      <MdcCheckbox checked={checked} value={value} />
      <label id="hero-checkbox-label">Checkbox</label>
    </section>
  );
};

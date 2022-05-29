import { merge, interval } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { timespan } from './operators/timespan';

// test use case

const slowSource = interval(2000).pipe(
  map((i) => `Slow message nº ${i}`),
  take(4)
);
const quickSource = interval(300).pipe(
  map((i) => `Quick message nº ${i}`),
  take(10)
);

console.log('testing in stackblitz');

const source = merge(slowSource, quickSource);

source.pipe(timespan(2000)).subscribe((x) => console.log(x));

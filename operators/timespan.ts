import { interval, Observable, zip } from "rxjs";
import { concatMap, first, startWith } from "rxjs/operators";

export const timespan =
  (timespan: number) =>
  <T>(source: Observable<T>) => {
    const tick$ = source.pipe(
      concatMap((item) => interval(timespan).pipe(first())),
      startWith(null)
    );
    return zip(source, tick$, (s, t) => s);
  };

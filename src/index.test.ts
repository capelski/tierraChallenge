import { getTimePaused, Locale } from '.';
import { getTestData } from './testData';

test.each(getTestData())(
    'test%#',
    (locale: Locale, start: string, end: string, expected: number) => {
        expect(getTimePaused(locale, start, end)).toBe(expected);
    }
);

import { getTestData } from './testData';
import moment from 'moment-timezone';

require('source-map-support').install();

/**
 * These interfaces are explained in greater detail in the readme. They correspond to the locale and the relevant data for the challenge.
 */

export interface Locale {
    openingTimes: OpeningTime[];
    pauseActions: PauseAction[];
    timezone: string;
}

export interface OpeningTime {
    start: string;
    end: string;
}

export interface PauseAction {
    action: 'pause' | 'unpause';
    datetime: string;
}

/**
 * This is where you work your magic. See the readme for the instructions
 */

export function getTimePaused(locale: Locale, start: string, end: string): number {
    return -1;
}

/**
 * Use the code below to run the function on the test data. See the readme for how to run this code
 */

const testData = getTestData();
for (const td of testData) {
    console.log('starting again');
    getTimePaused(td[0], td[1], td[2]);
}

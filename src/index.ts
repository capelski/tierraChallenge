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

type EffectivePause = {
    duration: number;
    end: moment.Moment;
    start: moment.Moment;
};

enum EventType {
    Closing = 'Closing',
    Opening = 'Opening',
    Pause = 'pause',
    UnPause = 'unpause'
}

type Hour = {
    hour: number;
    minute: number;
};

type PausesStatus = {
    currentPauseStart: moment.Moment | undefined;
    effectivePauses: EffectivePause[];
    isOpened: boolean;
    isPaused: boolean;
};

type TimeEvent = {
    date: moment.Moment;
    type: EventType;
};

const getEffectivePauses = (openingHoursEvents: TimeEvent[], pauseActionsEvents: TimeEvent[]) => {
    const allEvents = openingHoursEvents
        .concat(pauseActionsEvents)
        .sort((a, b) => a.date.diff(b.date, 'milliseconds'));

    const pausesStatus = allEvents.reduce<PausesStatus>(
        (reduced, event): PausesStatus => {
            const nextReduced: PausesStatus = {
                currentPauseStart:
                    (event.type === EventType.Pause && reduced.isOpened) ||
                    (event.type === EventType.Opening && reduced.isPaused)
                        ? event.date
                        : reduced.currentPauseStart,
                effectivePauses:
                    (event.type === EventType.UnPause && reduced.isOpened) ||
                    (event.type === EventType.Closing && reduced.isPaused)
                        ? reduced.effectivePauses.concat([
                              {
                                  duration: event.date.diff(
                                      reduced.currentPauseStart,
                                      'milliseconds'
                                  ),
                                  end: event.date,
                                  start: reduced.currentPauseStart!
                              }
                          ])
                        : reduced.effectivePauses,
                isOpened:
                    event.type === EventType.Closing
                        ? false
                        : event.type === EventType.Opening
                        ? true
                        : reduced.isOpened,
                isPaused:
                    event.type === EventType.UnPause
                        ? false
                        : event.type === EventType.Pause
                        ? true
                        : reduced.isPaused
            };

            return nextReduced;
        },
        {
            currentPauseStart: undefined,
            effectivePauses: [],
            isPaused:
                pauseActionsEvents.length > 0 && pauseActionsEvents[0].type === EventType.UnPause,
            isOpened: allEvents.length > 0 && allEvents[0].type === EventType.Opening
        }
    );

    return pausesStatus.effectivePauses;
};

const getOpeningHoursEvents = ({
    endDate,
    locale,
    startDate
}: {
    endDate: moment.Moment;
    locale: Locale;
    startDate: moment.Moment;
}) => {
    const elapsedDays = endDate.diff(startDate, 'days') + 1;
    const firstWeekDay = startDate.weekday();

    const events: TimeEvent[] = [];

    for (let dayNumber = 0; dayNumber < elapsedDays; ++dayNumber) {
        const weekDay = (firstWeekDay + dayNumber) % 7;
        const dayOpeningTimes = locale.openingTimes[weekDay];
        const isFirstDay = dayNumber === 0;
        const isLastDay = dayNumber === elapsedDays - 1;

        const [openingHour, openingMinute] = dayOpeningTimes.start
            .split(':')
            .map((x) => parseInt(x));
        const [closingHour, closingMinute] = dayOpeningTimes.end.split(':').map((x) => parseInt(x));
        const isOvernightShift = closingHour <= openingHour;

        if (isLastDay && endDate.hour() <= openingHour) {
            // Prevent generating event for days that don't intersect the opening hour range
            break;
        }

        const dayStart = moment(startDate);
        dayStart.add(dayNumber, 'days');
        if (
            isFirstDay &&
            isEarlierHour(
                { hour: openingHour, minute: openingMinute },
                { hour: startDate.hour(), minute: startDate.minute() }
            )
        ) {
            dayStart.set('hour', startDate.hour()).set('minute', startDate.minute());
        } else {
            dayStart.set('hour', openingHour).set('minute', openingMinute);
        }
        events.push({ date: dayStart, type: EventType.Opening });

        const dayEnd = moment(startDate);
        dayEnd.add(dayNumber + +(elapsedDays > 1 && !isLastDay && isOvernightShift), 'days');
        if (
            isLastDay &&
            (isOvernightShift ||
                isEarlierHour(
                    { hour: endDate.hour(), minute: endDate.minute() },
                    { hour: closingHour, minute: closingMinute }
                ))
        ) {
            dayEnd.set('hour', endDate.hour()).set('minute', endDate.minute());
        } else {
            dayEnd.set('hour', closingHour).set('minute', closingMinute);
        }
        events.push({ date: dayEnd, type: EventType.Closing });
    }

    return events;
};

const getPauseActionEvents = (locale: Locale) =>
    locale.pauseActions.map<TimeEvent>((pauseAction) => ({
        date: moment(pauseAction.datetime).tz(locale.timezone),
        type: pauseAction.action as EventType
    }));

const isEarlierHour = (a: Hour, b: Hour) => {
    const aTime = a.hour * 60 + a.minute;
    const bTime = b.hour * 60 + b.minute;
    return aTime < bTime;
};

export function getTimePaused(locale: Locale, start: string, end: string): number {
    const startDate = moment(start).tz(locale.timezone);
    const endDate = moment(end).tz(locale.timezone);
    const openingHoursEvents = getOpeningHoursEvents({ endDate, locale, startDate });
    const pauseActionsEvents = getPauseActionEvents(locale);

    const effectivePauses = getEffectivePauses(openingHoursEvents, pauseActionsEvents);

    return effectivePauses.reduce((reduced, next) => reduced + next.duration, 0);
}

/**
 * Use the code below to run the function on the test data. See the readme for how to run this code
 */

const testData = getTestData();
for (const td of testData) {
    console.log('starting again');
    getTimePaused(td[0], td[1], td[2]);
}

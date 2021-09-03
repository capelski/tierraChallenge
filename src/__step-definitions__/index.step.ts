import assert from 'assert';
import { Before, Given, Then, When } from 'cucumber';
import { getTimePaused, Locale } from '..';

type ActionType = 'pause' | 'unpause';
type WeekDay = 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday' | 'Sunday';

const weekDays = {
    Monday: 0,
    Tuesday: 1,
    Wednesday: 2,
    Thursday: 3,
    Friday: 4,
    Saturday: 5,
    Sunday: 6
};

let restaurant: Locale;

Before(() => {
    restaurant = {
        openingTimes: [],
        pauseActions: [],
        timezone: ''
    };
});

Given('a restaurant in {string} timezone', function (timeZone: string) {
    restaurant.timezone = timeZone;
});

Given(
    /with opening times "(.*)" to "(.*)" on "(Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday)"/,
    function (openingTime: string, closingTime: string, weekDay: WeekDay) {
        restaurant.openingTimes[weekDays[weekDay]] = {
            end: closingTime,
            start: openingTime
        };
    }
);

When(
    /registering a "(pause|unpause)" at "(.*)"/,
    function (actionType: ActionType, datetime: string) {
        restaurant.pauseActions.push({
            action: actionType,
            datetime
        });
    }
);

Then(
    'the paused time between {string} and {string} is {int}',
    function (start: string, end: string, expectedTimePaused: number) {
        const timePaused = getTimePaused(restaurant, start, end);
        assert.equal(timePaused, expectedTimePaused);
    }
);

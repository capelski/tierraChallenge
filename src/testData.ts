import { Locale } from '.';

export const getTestData = (): Array<[Locale, string, string, number]> => {
    return [
        [
            {
                openingTimes: [
                    {
                        start: '12:00',
                        end: '23:00'
                    },
                    {
                        start: '12:00',
                        end: '23:00'
                    },
                    {
                        start: '12:00',
                        end: '23:00'
                    },
                    {
                        start: '12:00',
                        end: '23:00'
                    },
                    {
                        start: '12:00',
                        end: '23:00'
                    },
                    {
                        start: '12:00',
                        end: '23:00'
                    },
                    {
                        start: '12:00',
                        end: '23:00'
                    }
                ],
                pauseActions: [
                    {
                        action: 'unpause',
                        datetime: '2021-02-17T12:05:12.003Z'
                    },
                    {
                        action: 'pause',
                        datetime: '2021-02-17T22:53:45.236Z'
                    },
                    {
                        action: 'unpause',
                        datetime: '2021-02-18T11:58:01.872Z'
                    }
                ],
                timezone: 'Europe/London'
            },
            '2021-02-17T00:00:00.000Z',
            '2021-02-26T00:00:00.000Z',
            686767
        ],

        [
            {
                openingTimes: [
                    {
                        start: '12:00',
                        end: '23:00'
                    },
                    {
                        start: '12:00',
                        end: '23:00'
                    },
                    {
                        start: '12:00',
                        end: '15:00'
                    },
                    {
                        start: '12:00',
                        end: '23:00'
                    },
                    {
                        start: '12:00',
                        end: '02:00'
                    },
                    {
                        start: '12:00',
                        end: '02:00'
                    },
                    {
                        start: '12:00',
                        end: '23:00'
                    }
                ],
                pauseActions: [
                    {
                        action: 'pause',
                        datetime: '2021-01-14T13:06:47.312Z'
                    },
                    {
                        action: 'unpause',
                        datetime: '2021-01-14T13:06:47.912Z'
                    }
                ],
                timezone: 'Europe/Madrid'
            },
            '2021-01-14T00:00:00.000Z',
            '2021-01-15T00:00:00.000Z',
            600
        ],

        [
            {
                openingTimes: [
                    {
                        start: '10:00',
                        end: '23:30'
                    },
                    {
                        start: '10:00',
                        end: '23:30'
                    },
                    {
                        start: '10:00',
                        end: '23:30'
                    },
                    {
                        start: '10:00',
                        end: '01:00'
                    },
                    {
                        start: '10:00',
                        end: '01:00'
                    },
                    {
                        start: '10:00',
                        end: '01:00'
                    },
                    {
                        start: '10:00',
                        end: '23:30'
                    }
                ],
                pauseActions: [
                    {
                        action: 'pause',
                        datetime: '2021-01-14T22:05:42.342Z'
                    },
                    {
                        action: 'unpause',
                        datetime: '2021-01-14T22:06:15.912Z'
                    }
                ],
                timezone: 'America/Los_Angeles'
            },
            '2021-01-14T10:00:00.000Z',
            '2021-01-15T10:00:00.000Z',
            33570
        ],

        [
            {
                openingTimes: [
                    {
                        start: '12:00',
                        end: '00:00'
                    },
                    {
                        start: '12:00',
                        end: '00:00'
                    },
                    {
                        start: '12:00',
                        end: '00:00'
                    },
                    {
                        start: '12:00',
                        end: '00:00'
                    },
                    {
                        start: '12:00',
                        end: '04:00'
                    },
                    {
                        start: '12:00',
                        end: '04:00'
                    },
                    {
                        start: '12:00',
                        end: '22:00'
                    }
                ],
                pauseActions: [
                    {
                        action: 'unpause',
                        datetime: '2021-03-24T11:24:32.661Z'
                    },
                    {
                        action: 'pause',
                        datetime: '2021-03-24T13:06:47.312Z'
                    },
                    {
                        action: 'unpause',
                        datetime: '2021-03-24T13:09:14.902Z'
                    },
                    {
                        action: 'pause',
                        datetime: '2021-03-24T13:09:47.312Z'
                    },
                    {
                        action: 'unpause',
                        datetime: '2021-03-24T13:11:41.689Z'
                    },
                    {
                        action: 'pause',
                        datetime: '2021-03-30T17:01:45.021Z'
                    },
                    {
                        action: 'unpause',
                        datetime: '2021-03-30T19:23:12.554Z'
                    },
                    {
                        action: 'pause',
                        datetime: '2021-03-30T19:27:12.554Z'
                    }
                ],
                timezone: 'Europe/Madrid'
            },
            '2021-03-24T13:00:00Z',
            '2021-03-30T17:30:00Z',
            1956946
        ],

        [
            {
                openingTimes: [
                    {
                        start: '12:00',
                        end: '00:00'
                    },
                    {
                        start: '12:00',
                        end: '00:00'
                    },
                    {
                        start: '12:00',
                        end: '00:00'
                    },
                    {
                        start: '12:00',
                        end: '00:00'
                    },
                    {
                        start: '12:00',
                        end: '04:00'
                    },
                    {
                        start: '12:00',
                        end: '04:00'
                    },
                    {
                        start: '12:00',
                        end: '22:00'
                    }
                ],
                pauseActions: [
                    {
                        action: 'pause',
                        datetime: '2021-03-24T13:06:47.312Z'
                    },
                    {
                        action: 'unpause',
                        datetime: '2021-03-24T13:09:14.902Z'
                    },
                    {
                        action: 'pause',
                        datetime: '2021-03-24T13:09:47.312Z'
                    },
                    {
                        action: 'unpause',
                        datetime: '2021-03-24T13:11:41.689Z'
                    },
                    {
                        action: 'pause',
                        datetime: '2021-03-30T17:01:45.021Z'
                    },
                    {
                        action: 'unpause',
                        datetime: '2021-03-30T19:23:12.554Z'
                    }
                ],
                timezone: 'Europe/Madrid'
            },
            '2021-03-26T13:00:00Z',
            '2021-03-26T13:05:00Z',
            0
        ]
    ];
};

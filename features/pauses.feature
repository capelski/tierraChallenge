Feature: Pause/unpause

    Scenario: Test case 1
        Given a restaurant in "Europe/London" timezone
        And with opening times "12:00" to "23:00" on "Monday"
        And with opening times "12:00" to "23:00" on "Tuesday"
        And with opening times "12:00" to "23:00" on "Wednesday"
        And with opening times "12:00" to "23:00" on "Thursday"
        And with opening times "12:00" to "23:00" on "Friday"
        And with opening times "12:00" to "23:00" on "Saturday"
        And with opening times "12:00" to "23:00" on "Sunday"
        When registering a "unpause" at "2021-02-17T12:05:12.003Z"
        And registering a "pause" at "2021-02-17T22:53:45.236Z"
        And registering a "unpause" at "2021-02-18T11:58:01.872Z"
        Then the paused time between "2021-02-17T00:00:00.000Z" and "2021-02-26T00:00:00.000Z" is 686767

    Scenario: Test case 2
        Given a restaurant in "Europe/Madrid" timezone
        And with opening times "12:00" to "23:00" on "Monday"
        And with opening times "12:00" to "23:00" on "Tuesday"
        And with opening times "12:00" to "15:00" on "Wednesday"
        And with opening times "12:00" to "23:00" on "Thursday"
        And with opening times "12:00" to "02:00" on "Friday"
        And with opening times "12:00" to "02:00" on "Saturday"
        And with opening times "12:00" to "23:00" on "Sunday"
        When registering a "pause" at "2021-01-14T13:06:47.312Z"
        And registering a "unpause" at "2021-01-14T13:06:47.912Z"
        Then the paused time between "2021-01-14T00:00:00.000Z" and "2021-01-15T00:00:00.000Z" is 600
    
    Scenario: Test case 3
        Given a restaurant in "America/Los_Angeles" timezone
        And with opening times "10:00" to "23:30" on "Monday"
        And with opening times "10:00" to "23:30" on "Tuesday"
        And with opening times "10:00" to "23:30" on "Wednesday"
        And with opening times "10:00" to "01:00" on "Thursday"
        And with opening times "10:00" to "01:00" on "Friday"
        And with opening times "10:00" to "01:00" on "Saturday"
        And with opening times "10:00" to "23:30" on "Sunday"
        When registering a "pause" at "2021-01-14T22:05:42.342Z"
        And registering a "unpause" at "2021-01-14T22:06:15.912Z"
        Then the paused time between "2021-01-14T10:00:00.000Z" and "2021-01-15T10:00:00.000Z" is 33570

    Scenario: Test case 4
        Given a restaurant in "Europe/Madrid" timezone
        And with opening times "12:00" to "00:00" on "Monday"
        And with opening times "12:00" to "00:00" on "Tuesday"
        And with opening times "12:00" to "00:00" on "Wednesday"
        And with opening times "12:00" to "00:00" on "Thursday"
        And with opening times "12:00" to "04:00" on "Friday"
        And with opening times "12:00" to "04:00" on "Saturday"
        And with opening times "12:00" to "22:00" on "Sunday"
        When registering a "unpause" at "2021-03-24T11:24:32.661Z"
        And registering a "pause" at "2021-03-24T13:06:47.312Z"
        And registering a "unpause" at "2021-03-24T13:09:14.902Z"
        And registering a "pause" at "2021-03-24T13:09:47.312Z"
        And registering a "unpause" at "2021-03-24T13:11:41.689Z"
        And registering a "pause" at "2021-03-30T17:01:45.021Z"
        And registering a "unpause" at "2021-03-30T19:23:12.554Z"
        And registering a "pause" at "2021-03-30T19:27:12.554Z"
        Then the paused time between "2021-03-24T13:00:00Z" and "2021-03-30T17:30:00Z" is 1956946

    Scenario: Test case 5
        Given a restaurant in "Europe/Madrid" timezone
        And with opening times "12:00" to "00:00" on "Monday"
        And with opening times "12:00" to "00:00" on "Tuesday"
        And with opening times "12:00" to "00:00" on "Wednesday"
        And with opening times "12:00" to "00:00" on "Thursday"
        And with opening times "12:00" to "04:00" on "Friday"
        And with opening times "12:00" to "04:00" on "Saturday"
        And with opening times "12:00" to "22:00" on "Sunday"
        When registering a "pause" at "2021-03-24T13:06:47.312Z"
        And registering a "unpause" at "2021-03-24T13:09:14.902Z"
        And registering a "pause" at "2021-03-24T13:09:47.312Z"
        And registering a "unpause" at "2021-03-24T13:11:41.689Z"
        And registering a "pause" at "2021-03-30T17:01:45.021Z"
        And registering a "unpause" at "2021-03-30T19:23:12.554Z"
        Then the paused time between "2021-03-26T13:00:00Z" and "2021-03-26T13:05:00Z" is 0

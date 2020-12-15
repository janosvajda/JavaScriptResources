# Law of Demeter

The Law of Demeter (LoD) or principle of least knowledge is a design guideline for developing software, particularly object-oriented programs. In its general form, the LoD is a specific case of loose coupling. The guideline was proposed by Ian Holland at Northeastern University towards the end of 1987,[1] and can be succinctly summarized in each of the following ways:[2]

1. Each unit should have only limited knowledge about other units: only units "closely" related to the current unit.
1. Each unit should only talk to its friends; don't talk to strangers.
1. Only talk to your immediate friends.

Source: https://en.wikipedia.org/wiki/Law_of_Demeter

Examples:

`BreakLawOfDemeter.js` shows an example for breaking this principle.

`LawOfDemeter.js` gives an example how can you avoid breaking this principle. This example contains only one solutions. There are more solutions, but this might be the most understable.

Testing of them. Run this command:

`npm run test`

or have a look its unit tests in the test/Principles/LawOfDemeter directory.

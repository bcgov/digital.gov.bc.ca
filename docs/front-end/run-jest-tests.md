## Running tests

Run the jest tests locally using:

npm run test

## Failed snapshot tests

If a page has changed, the snapshot test will fail. After the run, you will see the results, along with some options:

Snapshot Summary
 › 1 snapshot failed from 1 test suite. Inspect your code changes or press `u` to update them.

Test Suites: 1 failed, 32 passed, 33 total
Tests:       1 failed, 57 passed, 58 total
Snapshots:   1 failed, 9 passed, 10 total
Time:        287.309 s
Ran all test suites related to changed files.

Watch Usage
 › Press a to run all tests.
 › Press f to run only failed tests.
 › Press u to update failing snapshots.
 › Press i to update failing snapshots interactively.
 › Press q to quit watch mode.
 › Press p to filter by a filename regex pattern.
 › Press t to filter by a test name regex pattern.
 › Press Enter to trigger a test run.

 Enter either 'u' or 'i' to update the snapshots. This will cause the test suite to re-run, and the snapshot to be updated.
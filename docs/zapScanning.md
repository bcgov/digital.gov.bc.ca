# Using zap to scan the codebase.

The zap scanner has been set up to scan the react frontend deployments when manually triggered.  The results can be read in the GitHub Action run's logs under the Baseline Zap Scan and Full Zap Scan logs.

To run the scan, navigate to the github actions tab and select the `Run Zap Scan` action.

When you manually run the workflow there are four inputs

`Use workflow from` Is the branch used by the github action, by default it is develop and, unless you are testing changes to the zap scanner action, should not be changed.

`Pull Request number` Is the PR deployment the zap scanner runs against. 

`Deploy environment` Is the environment where the pr being scanned is being run. By default it is`dev`.  

TODO: Confirm the zap scans run properly against `test` and `prod` deployments

`Zap scan type:` Is the depth of the scan perforemed. The options are: `base` or `full`.  The base scan takes about half the time of the full scan. 

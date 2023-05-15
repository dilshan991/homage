# Homage

UI automation framework created for homage challenge 

## Setting up the project

### Clone and set up the `homage` repo
```
$ git clone https://github.com/dilshan991/homage.git
$ cd homage
$ npm install
```

### Running e2e specs
Following command will execute all the tests with headless mode.
```
npm run chrome:headless
npm run edge:headless
npm run firefox:headless
npm run webkit:headless
```
If you need to run the tests in headed mode , execute the following command
```
npm run chrome:headed
npm run edge:headed
npm run firefox:headed
npm run chrome:headed:mobile
npm run webkit:headed
```
If you need to run tests in mobile devices screen size, execute following command
```
npm run chrome:headed:mobile
```
If you need to tested in the safari browser use the experimental webkit 
```
npm run webkit:headed
```
Execute below mentioned command to generate the HTML report 
```
npm run generate-report
```
### Options for running e2e specs

| Argument                                  | Description                                               |
| ------------------------------------------|:--------------------------------------------------------- | 
| `--spec "<spec>"` / `-s "<spec>"`         | The path to look for test spec in                         |
| `--env failOnSnapshotDiff=false`          | To prevent test failures when an image diff               |
| `--env updateSnapshots=true`              | In order to update the base image files for all the tests |
| `--headless`                              | To run test on headless mode                              |
| `--record`                                | To record results on cypress dashboard                    |
| `--record --tag "<tag1,tag2>"`            | To help identify separate run displayed in the Dashboard  |
| `--browser <name>` / `-b <name>`          | Path to custom browser                                    |

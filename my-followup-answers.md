# Challenge Follow-up

## 1. Discuss your solution’s time complexity. What tradeoffs did you make?

Taking into account the time it took me to finish the 'working version' of this application in Typescript (around 3 hours), even though I managed to be done with it, I figure I could have worked more on code refactoring and automated tests, if not pressed for time.

## 2. How would you change your solution to account for future columns that might be requested, such as “Bill Voted On Date” or“Co-Sponsors”?

In a separate file, I converted the .csv table files into objects and manually mapped them by returned their keys and values according to what I read from the csv file. If more columns were to be added, I would have to include them in this function return as well.

## 3. How would you change your solution if instead of receiving CSVs of data, you were given a list of legislators or bills that you should generate a CSV for?

If this list were like JS Object Arrays with their proper keys and values already mapped, all I needed to do would be to Node.js' fs module to generate a .csv file from this data array like I did in the index file. Otherwise, still considering this list(or array) would contain all the necessary information to make up a table, I would have to modify it and then parse it into a 'csv-type' string.

## 4. How long did you spend working on the assignment?

Around 5 hours in total (3 hours of coding/working out the solution and 2 more hours of reviewing, documenting and sending it to assessment).

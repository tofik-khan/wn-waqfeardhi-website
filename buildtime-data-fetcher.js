const { google } = require("googleapis");
require("dotenv").config();

const auth = new google.auth.GoogleAuth({
  keyFile: `${process.env.GOOGLE_API_KEY_FILE}`, //the key file
  //url to spreadsheets API
  scopes: "https://www.googleapis.com/auth/spreadsheets",
});

//Auth client Object
auth.getClient().then((authObject) => getSheetContent(authObject));

function getSheetContent(authClientObject) {
  //Google sheets instance
  const googleSheetsInstance = google.sheets({
    version: "v4",
    auth: authClientObject,
  });

  // spreadsheet id
  const spreadsheetId = `${process.env.GOOGLE_SHEETS_ID}`;

  //Read front the spreadsheet
  //TODO: wrap this in a try/catch block
  googleSheetsInstance.spreadsheets.values
    .get({
      auth, //auth object
      spreadsheetId, // spreadsheet id
      range: "Listings!A:J", //range of cells to read from.
    })
    .then((response) => createContentFile(response.data.values));
}

function createContentFile(data) {
  const dataString = JSON.stringify(data);
  const fs = require("fs");
  const path = `content/listings.json`;
  fs.writeFile(path, dataString, (err) => {
    // error checking
    if (err) throw err;

    console.log("New data added");
  });
}

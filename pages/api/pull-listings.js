export default async function handler(req, res) {
  // Authenticate request
  if (!req.body.auth || req.body.auth !== process.env.API_AUTH_TOKEN) {
    res
      .status(401)
      .json({ success: false, error: { message: "Failed to Authenticate" } });
    return;
  }

  const { google } = require("googleapis");

  const auth = new google.auth.GoogleAuth({
    keyFile: `${process.env.GOOGLE_API_KEY_FILE}`, //the key file
    //url to spreadsheets API
    scopes: "https://www.googleapis.com/auth/spreadsheets",
  });

  //Auth client Object
  const authClientObject = await auth.getClient();

  //Google sheets instance
  const googleSheetsInstance = google.sheets({
    version: "v4",
    auth: authClientObject,
  });

  // spreadsheet id
  const spreadsheetId = `${process.env.GOOGLE_SHEETS_ID}`;

  //Read front the spreadsheet
  //TODO: wrap this in a try/catch block
  const readData = await googleSheetsInstance.spreadsheets.values.get({
    auth, //auth object
    spreadsheetId, // spreadsheet id
    range: "Listings!A:E", //range of cells to read from.
  });

  //Update content files
  createContentFile(readData.data.values);

  res.status(200).json({ success: true, response: readData.data.values });
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

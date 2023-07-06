export default async function handler(req, res) {
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
    range: "Listings!A:I", //range of cells to read from.
  });

  res.status(200).json({ success: true, data: readData.data.values });
}

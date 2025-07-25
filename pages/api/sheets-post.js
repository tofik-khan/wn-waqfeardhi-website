import moment from "moment-timezone";

export default async function handler(req, res) {
  // Authenticate request
  if (!req.body.auth || req.body.auth !== process.env.API_AUTH_TOKEN) {
    res
      .status(401)
      .json({ success: false, error: { message: "Failed to Authenticate" } });
    return;
  }

  const formData = req.body.formData;
  const timestamp = moment.tz("America/New_York").format("MM/DD/YYYY h:mm A z");
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

  try {
    const result = await googleSheetsInstance.spreadsheets.values.append({
      spreadsheetId,
      range: "Responses",
      valueInputOption: "RAW",
      resource: {
        range: "Responses",
        majorDimension: "ROWS",
        values: [
          [
            formData.firstname,
            formData.lastname,
            formData.email,
            formData.jammat,
            formData.aux,
            !!formData.isWaqfeNau,
            formData.comment,
            formData.phone,
            formData.slug,
            timestamp,
            formData.membercode,
          ],
        ],
      },
    });

    const mudirRequestBody = {
      firstname: formData.firstname,
      lastname: formData.lastname,
      email: formData.email,
      jammat: formData.jammat,
      auxiliary: formData.aux,
      isWaqfenau: !!formData.isWaqfeNau,
      comments: formData.comment,
      phone: formData.phone,
      slug: formData.slug,
      membercode: formData.membercode,
      status: "pending",
    };

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(mudirRequestBody),
    };

    await fetch(
      "https://wn-mudir-backend.vercel.app/waqfeardhi/applicants",
      requestOptions
    )
      .then((response) => response.json())
      .then((response) => console.log(response));

    console.log(`${result.data.updates.updatedCells} cells appended.`);
  } catch (err) {
    console.log("Error: Failed to append to Sheet");
    console.log(err.message);
  }
  res.status(200).json({ success: true });
}

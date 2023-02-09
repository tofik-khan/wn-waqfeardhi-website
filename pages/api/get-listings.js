export default async function handler (req, res) {

    const express = require("express");
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
    
    res.status(200).json({success: true});
}
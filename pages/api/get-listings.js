export default async function handler (req, res) {

    const express = require("express");
    const { google } = require("googleapis");

    const auth = new google.auth.GoogleAuth({
        keyFile: `${process.env.GOOGLE_API_KEY_FILE}`, //the key file
        //url to spreadsheets API
        scopes: "https://www.googleapis.com/auth/spreadsheets",
      });

    res.status(200).json({success: true});
}
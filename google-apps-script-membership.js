/**
 * Google Apps Script - Rotary Bangalore JP Nagar Membership Form Web App
 * 
 * Instructions to Deploy:
 * 1. Open Google Sheets (https://sheets.new) and create a new sheet (e.g. "Rotary JP Nagar - Membership Enquiries 2026-27").
 * 2. Click "Extensions" > "Apps Script".
 * 3. Delete any existing code and paste this entire script.
 * 4. (Optional) Set NOTIFICATION_EMAIL below to your preferred notification email.
 * 5. Click "Deploy" > "New deployment".
 * 6. Under "Select type", choose "Web app".
 * 7. Set:
 *    - Description: "Membership Form Webhook"
 *    - Execute as: "Me" (your email)
 *    - Who has access: "Anyone" (Required so public visitors can submit)
 * 8. Click "Deploy" and authorize the permissions.
 * 9. Copy the "Web app URL" (ends in /exec).
 * 10. Paste this URL in your `.env.local` file as:
 *     NEXT_PUBLIC_MEMBERSHIP_SHEET_URL=https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec
 */

const SPREADSHEET_ID = "1DrKQv9mdCZCUPH6XKtqZXgSf1sfARfXefvLSqLuuMMo";
const NOTIFICATION_EMAIL = "tech.rotaryjpnagar@gmail.com"; // Set to your email or leave blank

function getTargetSheet() {
  // 1. Try active spreadsheet first (if opened via Extensions > Apps Script inside the sheet)
  try {
    const activeSs = SpreadsheetApp.getActiveSpreadsheet();
    if (activeSs) {
      return activeSs.getActiveSheet();
    }
  } catch (e) {
    // Not a container-bound script or no active sheet
  }

  // 2. Try opening by SPREADSHEET_ID
  if (SPREADSHEET_ID && SPREADSHEET_ID.trim() !== "") {
    try {
      const ss = SpreadsheetApp.openById(SPREADSHEET_ID.trim());
      if (ss) {
        return ss.getActiveSheet();
      }
    } catch (err) {
      throw new Error(
        "Cannot open spreadsheet ID '" + SPREADSHEET_ID + "'. Permission denied or account mismatch. Please check Google Sheet Share settings."
      );
    }
  }

  throw new Error("Unable to access spreadsheet. Please ensure the Google Sheet is shared with edit access to the account running this script.");
}

function doPost(e) {
  try {
    let data;
    if (e.postData && e.postData.contents) {
      try {
        data = JSON.parse(e.postData.contents);
      } catch (err) {
        data = e.parameter;
      }
    } else {
      data = e.parameter || {};
    }

    const sheet = getTargetSheet();

    // Auto-create headers if sheet is brand new
    if (sheet.getLastRow() === 0) {
      const headers = [
        "Timestamp",
        "Full Name",
        "Mobile Number",
        "Email Address",
        "Profession / Vocation",
        "Locality in Bengaluru",
        "Primary Area of Interest",
        "Message / Motivation",
        "Status"
      ];
      sheet.appendRow(headers);
      sheet.getRange(1, 1, 1, headers.length).setFontWeight("bold").setBackground("#17458f").setFontColor("#ffffff");
      sheet.setFrozenRows(1);
    }

    const timestamp = Utilities.formatDate(new Date(), "Asia/Kolkata", "yyyy-MM-dd HH:mm:ss");
    const fullName = data.fullName || data.name || "";
    const rawPhone = (data.phone || data.mobile || "").toString().trim();
    // Prefix with single quote so Google Sheets doesn't evaluate leading '+' as a mathematical formula
    const formattedPhone = rawPhone.startsWith("+") ? "'" + rawPhone : rawPhone;
    const email = data.email || "";
    const profession = data.profession || "";
    const locality = data.locality || "";
    const interest = data.interest || "";
    const message = data.message || "";
    const status = "New Enquiry";

    // Append the row
    sheet.appendRow([
      timestamp,
      fullName,
      formattedPhone,
      email,
      profession,
      locality,
      interest,
      message,
      status
    ]);

    // Send instant email notification to club
    if (NOTIFICATION_EMAIL) {
      try {
        const subject = `[New Member Interest] ${fullName} - Rotary Bangalore JP Nagar`;
        const body = `
New Membership Expression of Interest Received!

Details:
----------------------------------------
Timestamp: ${timestamp}
Name: ${fullName}
Phone: ${phone}
Email: ${email}
Profession: ${profession}
Locality: ${locality}
Area of Interest: ${interest}

Why Rotary / Message:
${message || "N/A"}
----------------------------------------

View the full Google Sheet:
${sheet.getParent().getUrl()}
        `;
        MailApp.sendEmail(NOTIFICATION_EMAIL, subject, body);
      } catch (mailErr) {
        Logger.log("Email notification failed: " + mailErr);
      }
    }

    return ContentService
      .createTextOutput(JSON.stringify({ status: "success", message: "Enquiry saved successfully" }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ status: "error", message: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  return ContentService
    .createTextOutput(JSON.stringify({ status: "active", service: "Rotary Bangalore JP Nagar Membership Webhook" }))
    .setMimeType(ContentService.MimeType.JSON);
}

/**
 * Run this test function in the Apps Script editor by clicking "Run" above!
 * This will authorize permissions and write a test row directly into your sheet.
 */
function testSubmission() {
  const fakeEvent = {
    postData: {
      contents: JSON.stringify({
        fullName: "Test Member (Direct Run)",
        phone: "+91 98455 18342",
        email: "test@rotaryjpnagar.org",
        profession: "Rotarian Leader",
        locality: "JP Nagar",
        interest: "Community Health & Education",
        message: "Testing direct execution from Google Apps Script."
      })
    }
  };
  const result = doPost(fakeEvent);
  Logger.log("Result: " + result.getContent());
}

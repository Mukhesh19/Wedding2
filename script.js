// Music Control
let weddingSong = document.getElementById("weddingSong");

function toggleMusic() {
    let musicControl = document.getElementById("musicControl");
    musicControl.style.display = (musicControl.style.display === "block") ? "none" : "block";
}

// Calendar Integration
function addToCalendar() {
    let calendarPopup = document.getElementById("calendarPopup");
    calendarPopup.style.display = (calendarPopup.style.display === "block") ? "none" : "block";
}

function addAppleCalendar() {
    // Add logic to integrate with Apple Calendar
    alert("Apple Calendar integration");
}

function addGoogleCalendar() {
    // Add logic to integrate with Google Calendar
    alert("Google Calendar integration");
}

// Location Popup
function showLocation() {
    let locationPopup = document.getElementById("locationPopup");
    locationPopup.style.display = (locationPopup.style.display === "block") ? "none" : "block";
}

function openMaps() {
    window.open("https://www.google.com/maps?q=[Location]", "_blank");
}

function openWaze() {
    window.open("https://waze.com/ul?q=[Location]", "_blank");
}

// Contact Popup
function showContact() {
    let contactPopup = document.getElementById("contactPopup");
    contactPopup.style.display = (contactPopup.style.display === "block") ? "none" : "block";
}

// RSVP Form Popup
function showRSVP() {
    let rsvpForm = document.getElementById("rsvpForm");
    rsvpForm.style.display = (rsvpForm.style.display === "block") ? "none" : "block";
}

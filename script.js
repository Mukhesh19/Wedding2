// Function to open the Music Control Popup
function openMusicControl() {
    document.getElementById("musicControl").style.display = "block";
}

// Function to open the Calendar Popup
function openCalendar() {
    document.getElementById("calendarPopup").style.display = "block";
}

// Function to open the Location Popup
function openLocation() {
    document.getElementById("locationPopup").style.display = "block";
}

// Function to open the Contact Popup
function openContact() {
    document.getElementById("contactPopup").style.display = "block";
}

// Function to open the RSVP Form Popup
function openRsvpForm() {
    document.getElementById("rsvpForm").style.display = "block";
}

// Function to close popups (for closing buttons)
function closePopups() {
    const popups = document.querySelectorAll('.popup');
    popups.forEach(popup => popup.style.display = "none");
}

// Calendar addition functions
function addAppleCalendar() {
    // Link to add to Apple Calendar
    alert("Redirecting to Apple Calendar...");
}

function addGoogleCalendar() {
    // Link to add to Google Calendar
    alert("Redirecting to Google Calendar...");
}

// Open Google Maps
function openMaps() {
    window.open('https://www.google.com/maps', '_blank');
}

// Open Waze
function openWaze() {
    window.open('https://waze.com', '_blank');
}

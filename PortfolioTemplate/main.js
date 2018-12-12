function toggleDropdown() {
    let navbarToggle = document.getElementById("navbarToggle");
    event.preventDefault();
    if (navbarToggle.className === 'topnav') {
        navbarToggle.className += ' responsive';
    } else {
        navbarToggle.className = 'topnav';
    }
}
header_content =
    `<div class="container-fluid">
        <div class="navbar-header\">
            <button type = "button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar" >
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
        <a class="navbar-brand" href="index.html" style="color:black">The Quadrangles</a>
    </div>
    <div class="collapse navbar-collapse" id="myNavbar">
        <ul class="nav navbar-nav">
            <li><a href="index.html">Home</a></li>
            <li><a href="sponsors.html">Sponsors</a></li>
            <li><a href="aboutus.html">About Us</a></li>
            <li><a href="studentresources.html">Student Resources</a></li>
            <li><a href="history.html">History</a></li>
            <li><a href="calendar.html">Calendar</a></li>
        </ul>
    </div>`;

function insertheader() {
    nav_header = document.getElementById("headernav");
    nav_header.innerHTML = header_content;
}
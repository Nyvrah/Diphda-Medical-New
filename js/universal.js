function onload() {
    window.scrollTo(0, 0);
    let headerMain = `
    <nav>
        <div id="menu">
            <img id="menu-logo" src=assets/imgs/logo.svg>
            <div id="menu-list">
                <li onclick="window.location.href = 'index.html';" class="menu-link" id="homeb">Home</li>
                <li onclick="window.location.href = 'about.html';" class="menu-link" id="aboutb">About Us</li>
                <li onclick="window.location.href = 'store.html';" class="menu-link" id="storeb">Web Store</li>
                <li onclick="window.location.href = 'https://givebutter.com/diphdamedical';" class="menu-link" id="donateb">Donate</li>
            </div>
        </div>
    </nav>
    `;
    document.getElementById("menu-main").innerHTML = headerMain;
    let footerMain = `
    <div id="footer">
        <div id="footer-left">
            <img id="footer-logo" src=assets/imgs/logo_full.svg>
            <p>DIPHDA MEDICAL CO.</p>
        </div>
        <div id="footer-contact">
            <li onclick="openContact()" id="footer-contact-button">Contact Us</li>
            <p id="emails">keagan.beeravolu@diphdamedical.org<br></br>pranav.ramanathan@diphdamedical.org</p>
        </div>
    </div>
    `;
    document.getElementById("footer-main").innerHTML = footerMain;
}

document.addEventListener("mousemove", parallax);

function parallax(event) {
    this.querySelectorAll(".mouse").forEach((shift) => {
        const position = shift.getAttribute("value");
        const x = (window.innerWidth*3/4 - event.pageX * position) / 90;
        const y = (window.innerHeight - event.pageY * position) / 90;
        shift.style.transform = `translateX(${x}px) translateY(${y}px)`;
    });
}
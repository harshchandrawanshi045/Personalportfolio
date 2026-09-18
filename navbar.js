document.addEventListener("DOMContentLoaded", function() {

    const navbar = document.getElementById("navbar");

    if (!navbar) return;


    /* ==================================================
       FIND CURRENT PAGE
    ================================================== */

    const currentPage = window.location.pathname;


    /* ==================================================
       CHECK CURRENT PAGE
    ================================================== */

    const isHomePage =
        currentPage.endsWith("/web.html") ||
        currentPage.endsWith("web.html");


    /* ==================================================
       CREATE PAGE LINKS
    ================================================== */

    let home;
    let about;
    let skills;
    let work;
    let contact;
    let resume;


    if (isHomePage) {

        home = "web.html";
        about = "ABOUT PAGE/aboutpageshort.html";
        skills = "SKILLS/skills.html";
        work = "WORK/myworks.html";
        contact = "CONTACT/mycontact.html";
        resume = "RESUME/myresume.html";

    } else {

        home = "../web.html";
        about = "../ABOUT PAGE/aboutpageshort.html";
        skills = "../SKILLS/skills.html";
        work = "../WORK/myworks.html";
        contact = "../CONTACT/mycontact.html";
        resume = "../RESUME/myresume.html";

    }


    /* ==================================================
       PAGE-SPECIFIC LOGO TEXT
    ================================================== */

    let logoText = "I'm HARSH";

    if (currentPage.includes("aboutpageshort.html")) {

        logoText = "ABOUT ME";

    } else if (currentPage.includes("skills.html")) {

        logoText = "MY SKILLS";

    } else if (currentPage.includes("myworks.html")) {

        logoText = "MY WORKS";

    } else if (currentPage.includes("mycontact.html")) {

        logoText = "GET IN TOUCH";

    } else if (currentPage.includes("myresume.html")) {

        logoText = "MY RESUME";

    }


    /* ==================================================
       CREATE NAVBAR
    ================================================== */

    navbar.innerHTML = `

        <nav class="site-nav">

            <div class="site-nav-content">

                <a
                    href="${home}"
                    class="site-logo"
                >
                    <span class="logo-text"></span><span class="logo-cursor">|</span>
                </a>

                <ul class="site-nav-links">

                    <li>
                        <a href="${home}">
                            Home
                        </a>
                    </li>

                    <li>
                        <a href="${about}">
                            About
                        </a>
                    </li>

                    <li>
                        <a href="${skills}">
                            Skills
                        </a>
                    </li>

                    <li>
                        <a href="${work}">
                            Work
                        </a>
                    </li>

                    <li>
                        <a href="${contact}">
                            Contact
                        </a>
                    </li>

                    <li>
                        <a href="${resume}">
                            Resume
                        </a>
                    </li>

                </ul>

            </div>

        </nav>

    `;


    /* ==================================================
       INFINITE LOGO TYPING ANIMATION
    ================================================== */

    const logoTextElement =
        navbar.querySelector(".logo-text");

    const logoCursor =
        navbar.querySelector(".logo-cursor");

    let index = 0;


    function typeLogo() {

        if (index < logoText.length) {

            logoTextElement.textContent =
                logoText.substring(0, index + 1);

            index++;

            setTimeout(typeLogo, 180);

        } else {

            setTimeout(function() {

                logoTextElement.textContent = "";

                index = 0;

                setTimeout(typeLogo, 500);

            }, 1500);

        }

    }


    /* ==================================================
       START TYPING
    ================================================== */

    typeLogo();


    /* ==================================================
       CURSOR BLINK
    ================================================== */

    setInterval(function() {

        if (logoCursor.style.opacity === "0") {

            logoCursor.style.opacity = "1";

        } else {

            logoCursor.style.opacity = "0";

        }

    }, 500);

});
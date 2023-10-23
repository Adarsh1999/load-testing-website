// Global variables to keep track of uploaded pages and active tab
const pages = {};
let activePage = null;

function uploadPage() {
    const fileInput = document.getElementById("fileInput");
    const pageTitleInput = document.getElementById("pageTitle");

    const file = fileInput.files[0];
    const pageTitle = pageTitleInput.value;

    if (file && pageTitle) {
        const reader = new FileReader();
        reader.onload = function (e) {
            const pageContent = e.target.result;

            // Create a new tab and store the content
            pages[pageTitle] = pageContent;

            // Display the tab
            displayTab(pageTitle);
        };

        reader.readAsText(file);
    }
}

function displayTab(pageTitle) {
    // Create a new tab element
    const tabContainer = document.getElementById("tabContainer");
    const tab = document.createElement("div");
    tab.className = "tab";
    tab.innerText = pageTitle;

    // Add a click event to open the page content
    tab.onclick = function () {
        displayPageContent(pageTitle);
    };

    tabContainer.appendChild(tab);
}

function displayPageContent(pageTitle) {
    const pageContent = pages[pageTitle];

    // Display the content in the pageContent div
    const pageContentDiv = document.getElementById("pageContent");
    pageContentDiv.innerHTML = pageContent;

    // Set this tab as the active tab
    activePage = pageTitle;
}

// You may want to initialize your page with some default content
displayTab("Default Page");
displayPageContent("Default Page");

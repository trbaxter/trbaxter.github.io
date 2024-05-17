// Function to store the initial state of details elements
function storeInitialDetailsState() {
    const detailsList = document.querySelectorAll("#projects details");
    detailsList.forEach((details) => {
        if (details.hasAttribute("open")) {
            details.dataset.initialOpenState = "open";
        } else {
            details.dataset.initialOpenState = "closed";
        }
    });
}

// Function to reset details elements to their initial state
function resetDetailsToInitialState() {
    const detailsList = document.querySelectorAll("#projects details");
    detailsList.forEach((details) => {
        if (details.dataset.initialOpenState === "open") {
            details.setAttribute("open", "");
        } else {
            details.removeAttribute("open");
        }
    });
}

// Function to handle URL hash change
function handleHashChange() {
    // Check if the URL hash has changed to "#projects"
    if (window.location.hash === "#projects") {
        // Reset details elements to their initial state
        resetDetailsToInitialState();
    }
}

// Add event listener for URL hash change
window.addEventListener("hashchange", handleHashChange);

// Call storeInitialDetailsState on page load to store the initial state
storeInitialDetailsState();

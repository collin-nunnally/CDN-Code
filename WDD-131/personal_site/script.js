document.addEventListener("DOMContentLoaded", () => {
    let vulnerabilities = [];

    // Determine which page is loaded and assign the correct dataset
    if (document.body.classList.contains("internal-page")) {
        vulnerabilities = internalVulnerabilities;
    } else if (document.body.classList.contains("external-page")) {
        vulnerabilities = externalVulnerabilities;
    } else {
        console.error("Error: No matching vulnerability dataset found.");
        return;
    }

    let currentIndex = 0;

    // Get elements from the DOM
    const titleElement = document.getElementById("vuln-title");
    const descriptionElement = document.getElementById("vuln-description");
    const severityElement = document.getElementById("vuln-severity");
    const prevBtn = document.getElementById("prev-btn");
    const nextBtn = document.getElementById("next-btn");

    // Function to update the tile with the selected vulnerability
    function updateTile() {
        if (vulnerabilities.length === 0) {
            titleElement.textContent = "No vulnerabilities available";
            descriptionElement.textContent = "";
            severityElement.textContent = "N/A";
            return;
        }

        const vuln = vulnerabilities[currentIndex];
        titleElement.textContent = vuln.name;
        descriptionElement.textContent = vuln.description;
        severityElement.textContent = `${vuln.severity}`;

        // Disable buttons at start/end
        prevBtn.disabled = currentIndex === 0;
        nextBtn.disabled = currentIndex === vulnerabilities.length - 1;
    }

    // Event listeners for navigation buttons
    prevBtn.addEventListener("click", () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateTile();
        }
    });

    nextBtn.addEventListener("click", () => {
        if (currentIndex < vulnerabilities.length - 1) {
            currentIndex++;
            updateTile();
        }
    });

    // Initialize the first vulnerability
    updateTile();
});

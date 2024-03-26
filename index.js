function handleSubmit() {
    const cardSection = document.getElementById("cardSection");
    cardSection.style.display = "flex";
    // Scroll to the card section smoothly
    cardSection.scrollIntoView({ behavior: 'smooth' });

    const ele = document.getElementsByName('social');
    let socialType;
    for (i = 0; i < ele.length; i++) {
        if (ele[i].checked)
            socialType = ele[i].value;
    }

    let inputField = document.getElementById("urlInput");
    let value = inputField.value;
    const url = value.trim();

    if (socialType == "facebook" && url.includes("facebook")) {
        if (url) {
            const parts = url.split("/");
            const fourthPart = parts[3];

            if (parts.length >= 4 && fourthPart != "watch" && fourthPart != "reel") {
                const slicedUrl = parts.slice(0, 4).join("/");
                const baseurl = new URL(slicedUrl).origin;
                updateMessage("Facebook URL: " + slicedUrl);
            } else if (parts.length >= 4 && fourthPart == "watch") {
                const slicedUrl = parts.slice(0, 5).join("/");
                updateMessage("Facebook Watch URL: " + slicedUrl);
            } else if (parts.length >= 4 && fourthPart == "reel") {
                updateMessage("Invalid input. It's a reel URL.\n\nAccepted Format: https://www.facebook.com/page_name/");
            } else {
                updateMessage("Invalid URL. Please Provide a valid Facebook link.\n\nAccepted Format: https://www.facebook.com/page_name/");
            }
        } else {
            updateMessage("Invalid URL. Please Provide a valid Facebook link");
        }
    } else if (socialType == "instagram" && url.includes("instagram")) {
        function getPageNameFromUrl(url) {
            const regex = /^(?:https?:\/\/)?(?:www\.)?instagram\.com\/([^\/?#]+)/i;
            const match = url.match(regex);
            return match && match.length > 1 ? match[1] : null;
        }

        const userInputUrl = url;
        const pageName = getPageNameFromUrl(userInputUrl);
        if (pageName) {
            updateMessage("Instagram Page: " + pageName);
        } else {
            updateMessage("Invalid URL. Please Provide a valid Instagram link.\n\nAccepted Format: https://www.instagram.com/User-name/");
        }
    // } else if (socialType == "twitter" && url.includes("twitter")) {
    //     const pageName = getPageName(url);
    //     if (pageName) {
    //         updateMessage("Twitter Page: " + pageName);
    //     } else {
    //         updateMessage("Invalid URL. Please Provide an valid Twitter link.\n\nAccepted Format: https://www.twitter.com/User-name/");
    //     }
    }
    else if (socialType == "twitter" && url.includes("twitter")) {
        function getPageNameFromUrl(url) {
            const regex = /^(?:https?:\/\/)?(?:www\.)?twitter\.com\/([^\/?#]+)/i;
            const match = url.match(regex);
            if (match && match.length > 1) {
                return match[1];
            } else {
                return null;
            }
        }
        const userInputUrl = url;
        const pageName = getPageNameFromUrl(userInputUrl);
        if (pageName) {
            updateMessage("Twitter Page: " + pageName);
        } else {
            updateMessage("Invalid URL. Please Provide an valid Twitter link.\n\nAccepted Format: https://www.twitter.com/User-name/");
        }
    } else {
        updateMessage("Invalid URL type. Please select a valid domain");
    }
}

function getPageName(url) {
    const regex = /^(?:https?:\/\/)?(?:www\.)?twitter\.com\/([^\/?#]+)/i;
    const match = url.match(regex);
    return match && match.length > 1 ? match[1] : null;
}

function updateMessage(message) {
    const messageElement = document.getElementById("resultMessage");
    messageElement.textContent = message;
}

function clearInput() {
    var input = document.getElementById("urlInput");
    input.value = '';
    document.getElementById("requiredMessage").style.display = "none";
    var copyBtn = document.querySelector('.copy-btn');
    copyBtn.style.display = "none";
    updateMessage(""); // Clear the result message
}

function copyText() {
    const socialType = document.querySelector('input[name="social"]:checked').value;
    const inputField = document.getElementById("urlInput");
    const url = inputField.value.trim();

    let textToCopy = "";

    if (socialType === "facebook") {
        const parts = url.split("/");
        const fourthPart = parts[3];

        if (parts.length >= 4 && fourthPart !== "reel") {
            textToCopy = parts.slice(0, 4).join("/");
        } else if (parts.length >= 4 && fourthPart === "watch") {
            textToCopy = parts.slice(0, 5).join("/");
        }
    } else if (socialType === "instagram") {
        const regex = /^(?:https?:\/\/)?(?:www\.)?instagram\.com\/([^\/?#]+)/i;
        const match = url.match(regex);
        textToCopy = match && match.length > 1 ? match[1] : "";
    } else if (socialType === "twitter") {
        const pageName = getPageName(url);
        textToCopy = pageName ? "" + pageName : "";
    }

    // Create a temporary textarea to copy text to clipboard
    const tempTextArea = document.createElement("textarea");
    tempTextArea.value = textToCopy;
    document.body.appendChild(tempTextArea);
    tempTextArea.select();
    document.execCommand("copy");
    document.body.removeChild(tempTextArea);

    if (textToCopy) {
        alert("Copied to clipboard: " + textToCopy);
    } else {
        alert("Nothing is copied to clipboard.");
    }
}

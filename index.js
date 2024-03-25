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

        if (socialType == "facebook") {
            let inputField = document.getElementById("urlInput")
            let value = inputField.value;
            const url = value;

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
                    updateMessage("Invalid URL. Please Provide an valid Facebook link.\n\nAccepted Format: https://www.facebook.com/page_name/");
                }
            } else {
                updateMessage("Invalid URL. Please Provide an valid Facebook link");
            }
        } else if (socialType == "instagram") {
            let inputField = document.getElementById("urlInput")
            let value = inputField.value;
            const url = value.trim();

            function getPageNameFromUrl(url) {
                const regex = /^(?:https?:\/\/)?(?:www\.)?instagram\.com\/([^\/?#]+)/i;
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
                updateMessage("Instagram Page: " + pageName);
            } else {
                updateMessage("Invalid URL. Please Provide an valid Instagram link.\n\nAccepted Format: https://www.instagram.com/User-name/");
            }
        } else {
            updateMessage("Invalid URL type. Please select a valid domain");
        }
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
            } else {
                textToCopy = "";
            }
        } else if (socialType === "instagram") {
            function getPageNameFromUrl(url) {
                const regex = /^(?:https?:\/\/)?(?:www\.)?instagram\.com\/([^\/?#]+)/i;
                const match = url.match(regex);
                return match && match.length > 1 ? match[1] : null;
            }
    
            const pageName = getPageNameFromUrl(url);
            textToCopy = pageName ? pageName : "";
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
    
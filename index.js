
    function handleSubmit() {
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
                    updateMessage("Invalid input reels");
                } else {
                    updateMessage("Please enter a valid Facebook URL");
                }
            } else {
                updateMessage("Invalid URL.");
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
                updateMessage("Instagram Page Name: " + pageName);
            } else {
                updateMessage("Invalid Instagram URL entered.");
            }
        } else {
            updateMessage("Invalid URL type");
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

    
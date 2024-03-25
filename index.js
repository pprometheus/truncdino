function handleSubmit(){
    const ele = document.getElementsByName('social');
    let socialType;
            for (i = 0; i < ele.length; i++) {
                if (ele[i].checked)
                socialType = ele[i].value;
            console.log(socialType)
            }
if(socialType == "facebook"){
    let inputField = document.getElementById("urlInput")
            let value = inputField.value;
            console.log("Input value: " + value);
            // Prompt the user to enter a URL
            const url = value;
    // function getValue() {
    //      // Get the input element by its ID
    //         let inputField = document.getElementById("urlInput");
    //         // Get the value of the input field
    //         let value = inputField.value;
    //         // Display the value in an alert
    //         console.log("Input value: " + value);
    // }
// Check if the user entered a URL
if (url) {
    const parts = url.split("/");
    const fourthPart = parts[3];
    // Check if the URL has at least 4 segments
    if (parts.length >= 4 && fourthPart != "watch" && fourthPart != "reel") {
        // Slice the URL at the 4th "/"
        const slicedUrl = parts.slice(0, 4).join("/");
        const baseurl = new URL(slicedUrl).origin;
        console.log(slicedUrl);
        alert("fun1:"+slicedUrl)
    //    FourParts(parts);
        // Check if the sliced URL is from Facebook
        // if ("https://www.facebook.com" === baseurl) {
        //     console.log("Facebook");
        // }
        // Output the sliced URL
    }else if(parts.length >= 4 && fourthPart == "watch" ){
        // FiveParts(parts)
        const slicedUrl = parts.slice(0, 5).join("/");
        const baseurl = new URL(slicedUrl).origin;
        console.log(slicedUrl);
        alert("fun2 :" +slicedUrl);
     }else if(parts.length >= 4 && fourthPart == "reel" ){
        alert("Invalid input reels");
        // FiveParts1(parts)
    //     const slicedUrl = parts.slice(0, 5).join("/");
    // const baseurl = new URL(slicedUrl).origin;
    // console.log(slicedUrl);
    // alert("fun3:"+slicedUrl);
    }
    else {
        console.log("URL does not contain enough segments.");
        alert("Please enter a valid facebook URL");
    }
} else {
    console.log("Invalid URL.");
}
// function FourParts(parts) {
//     const slicedUrl = parts.slice(0, 4).join("/");
//     const baseurl = new URL(slicedUrl).origin;
//     console.log(slicedUrl);
//     alert(slicedUrl)
// }
// function FiveParts(parts) {
//     const slicedUrl = parts.slice(0, 5).join("/");
//     const baseurl = new URL(slicedUrl).origin;
//     console.log(slicedUrl);
//     alert(slicedUrl);
// }
// function FiveParts1(parts) {
//     const slicedUrl = parts.slice(0, 5).join("/");
//     const baseurl = new URL(slicedUrl).origin;
//     console.log(slicedUrl);
//     alert(slicedUrl);
// }
}
else if(socialType == "instagram") {
    let inputField = document.getElementById("urlInput")
    let value = inputField.value;
    const url = value.trim();
    console.log("Input value: " + value);
    function getPageNameFromUrl(url) {
    // Regular expression to extract the page name from Instagram URL
    const regex = /^(?:https?:\/\/)?(?:www\.)?instagram\.com\/([^\/?#]+)/i;
    const match = url.match(regex);
    if (match && match.length > 1) {
        return match[1];
    } else {
        return null; // URL doesn't match expected pattern
    }
}
// Function to get user input
// function getUserInput() {
//     const userInput = prompt("Enter the Instagram URL:");
//     return userInput.trim();
// }
// Get user input
const userInputUrl = url;
// Extract page name from user input URL
const pageName = getPageNameFromUrl(userInputUrl);
if (pageName) {
    console.log("Page Name:", pageName);
    alert(pageName);
} else {
    console.log("Invalid Instagram URL entered.");
}
}
else{
    alert("invalid url type")
}
        }
        
        function clearInput() {
            var input = document.getElementById("urlInput");
            input.value = '';
            document.getElementById("requiredMessage").style.display = "none";
            var copyBtn = document.querySelector('.copy-btn');
            copyBtn.style.display = "none";
        }
        
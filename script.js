// elements
var experienceSection = document.getElementById('experience-section');
var addExperienceBtn = document.getElementById('add-experience-btn');
var experienceCount = 0;
// console.log(addExperienceBtn);
//logic for experience div when click on botton.
addExperienceBtn.addEventListener('click', function () {
    experienceCount++;
    // create a div element and add class
    var experienceDiv = document.createElement('div');
    experienceDiv.classList.add('experience-entry');
    // fill content in div element
    experienceDiv.innerHTML = "\n        <label for=\"company-".concat(experienceCount, "\">Company:</label>\n        <input type=\"text\" id=\"company-").concat(experienceCount, "\" required>\n\n        <label for=\"role-").concat(experienceCount, "\">Role:</label>\n        <input type=\"text\" id=\"role-").concat(experienceCount, "\" required>\n\n        <label for=\"duration-").concat(experienceCount, "\">Duration:</label>\n        <input type=\"text\" id=\"duration-").concat(experienceCount, "\" required>\n        \n        <label for=\"description-").concat(experienceCount, "\">Description:</label>\n        <textarea id=\"description-").concat(experienceCount, "\" rows=\"4\" required></textarea>\n    ");
    // add div & content in the html section
    experienceSection.appendChild(experienceDiv);
});
//---------------------------------------------------------------------------------------
var educationSection = document.getElementById('education-section');
var addEducationBtn = document.getElementById('add-education-btn');
var educationCount = 0;
//logic for education div when click on botton.
addEducationBtn.addEventListener('click', function () {
    educationCount++;
    // create a div element and add class
    var educationDiv = document.createElement('div');
    educationDiv.classList.add('education-entry');
    // fill content in div element
    educationDiv.innerHTML = "\n        <label for=\"school-".concat(educationCount, "\">School/University:</label>\n        <input type=\"text\" id=\"school-").concat(educationCount, "\" required>\n\n        <label for=\"grade-").concat(educationCount, "\">Grade:</label>\n        <input type=\"text\" id=\"grade-").concat(educationCount, "\" required>\n\n        <label for=\"passing-year-").concat(educationCount, "\">Passing Year:</label>\n        <input type=\"date\" id=\"passing-year-").concat(educationCount, "\" required>\n        \n    ");
    // add div & content in the html section
    educationSection.appendChild(educationDiv);
});
//--------------------------------------------------------------------------------------------------------------
// main logic add event listner to prevent the form to reload
var form = document.getElementById('resume-form');
form.addEventListener('submit', function (event) {
    var _a;
    event.preventDefault();
    // Collect data from the form
    var profilePicture = (_a = document.getElementById("profile-pic").files) === null || _a === void 0 ? void 0 : _a[0];
    var profilePictureUrl = profilePicture ? URL.createObjectURL(profilePicture) : "";
    var userName = document.getElementById("username").value;
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var address = document.getElementById('address').value;
    var skills = document.getElementById('skills').value;
    // _------ALL--ENTREIES_________________________________________________________________________________________________________
    // Loop through all the entries
    var resumeHTML = "\n        <h1>Shereable resume builder</h1>\n        <br/>   \n        <h3>personal infomation:</h3>\n        <img src=".concat(profilePictureUrl, " alt=\"profile-picture\"/>\n        <p><b>Name:</b><span contenteditable=\"true\">").concat(name, "</span></p>\n        <p><b>Email:</b><span contenteditable=\"true\">").concat(email, "</span> | <b>Phone:</b><span contenteditable=\"true\">").concat(phone, "</span></p>\n        <p><b>Address:</b><span contenteditable=\"true\">").concat(address, "</span></p>\n       \n        \n    ");
    // Loop through all the experience entries
    var experienceEntries = document.querySelectorAll('.experience-entry');
    experienceEntries.forEach(function (entry, index) {
        var company = document.getElementById("company-".concat(index + 1)).value;
        var role = document.getElementById("role-".concat(index + 1)).value;
        var duration = document.getElementById("duration-".concat(index + 1)).value;
        var description = document.getElementById("description-".concat(index + 1)).value;
        resumeHTML += "\n            <h3>Experience:</h3>\n            <p><b>Campany:</b><span contenteditable=\"true\">".concat(company, "</span></p>\n            <p><b>Role:</b><span contenteditable=\"true\">").concat(role, "</span>\n            </p>\n            <p><b>Duration:</b><span contenteditable=\"true\">").concat(duration, "</span></p>\n            <p><span contenteditable=\"true\">").concat(description, "</span></p>\n        ");
    });
    // Loop through all the education entries
    var educationEntries = document.querySelectorAll('.education-entry');
    educationEntries.forEach(function (entry, index) {
        var school = document.getElementById("school-".concat(index + 1)).value;
        var grade = document.getElementById("grade-".concat(index + 1)).value;
        var passing_year = document.getElementById("passing-year-".concat(index + 1)).value;
        resumeHTML += "\n            <h3>Education:</h3>\n            <p><b>School/University:</b>  <span contenteditable=\"true\">".concat(school, "</span></p>\n            <p><b>Grade:</b>  <span contenteditable=\"true\">").concat(grade, "</span> | <b>Passing year:</b>  <span contenteditable=\"true\">").concat(passing_year, "</span></p>\n     \n         ");
    });
    resumeHTML += "<h3>Skills:</h3><p> <span contenteditable=\"true\">".concat(skills, "</span></p>");
    // ________________________________________________________________________________________
    // Output the resume
    var resumeOutput = document.getElementById('resume-output');
    resumeOutput.style.display = "block";
    resumeOutput.innerHTML = resumeHTML;
    // --------------------------------------------------------------------------------------------------
    // milesotne 5: add logic in which we add functionality our code shereable
    var ShereableLinkBox = document.getElementById("shereable-link-box");
    var ShereableLinkBtn = document.getElementById("shereable-btn");
    ShereableLinkBtn.addEventListener("click", function () {
        var uniquePath = "https://shabbir.com/resume/".concat(userName.replace(/\s+/g, "_"), "_cv.html");
        // clipboard api for copy link
        navigator.clipboard.writeText(uniquePath);
        alert("link copy to clipboard 'press Ctrl+V to paste'");
    });
    // show div box and add some css
    ShereableLinkBox.style.display = "flex";
    ShereableLinkBox.style.flexDirection = "column";
    ShereableLinkBox.style.justifyContent = "center";
    ShereableLinkBox.style.textAlign = "center";
    ShereableLinkBox.style.alignItems = "center";
    ShereableLinkBox.style.margin = ".8rem 0";
    // create logic for btn when click on it form data download as pdf
    var PdfDownloadbtn = document.getElementById("download-pdf");
    PdfDownloadbtn.addEventListener("click", function () {
        window.print(); // open a print dialog  box
    });
});

// elements
const experienceSection = document.getElementById('experience-section') as HTMLElement;
const addExperienceBtn= document.getElementById('add-experience-btn') as HTMLButtonElement;
let experienceCount = 0;

//logic for experience div when click on botton.
addExperienceBtn.addEventListener('click', () => {

    experienceCount++;

    // create a div element and add class
    const experienceDiv = document.createElement('div');
    experienceDiv.classList.add('experience-entry');

    // fill content in div element
    experienceDiv.innerHTML = `
        <label for="company-${experienceCount}">Company:</label>
        <input type="text" id="company-${experienceCount}" required>

        <label for="role-${experienceCount}">Role:</label>
        <input type="text" id="role-${experienceCount}" required>

        <label for="duration-${experienceCount}">Duration:</label>
        <input type="text" id="duration-${experienceCount}" required>
        
        <label for="description-${experienceCount}">Description:</label>
        <textarea id="description-${experienceCount}" rows="4" required></textarea>
    `;
    // add div & content in the html section
    experienceSection.appendChild(experienceDiv);
});

//---------------------------------------------------------------------------------------

const educationSection = document.getElementById('education-section') as HTMLElement;
const addEducationBtn= document.getElementById('add-education-btn') as HTMLButtonElement;
let educationCount = 0;

  //logic for education div when click on botton.
addEducationBtn.addEventListener('click', () => {
    educationCount++;

    // create a div element and add class
    const educationDiv = document.createElement('div');
    educationDiv.classList.add('education-entry');

    // fill content in div element
    educationDiv.innerHTML = `
        <label for="school-${educationCount}">School/University:</label>
        <input type="text" id="school-${educationCount}" required>

        <label for="grade-${educationCount}">Grade:</label>
        <input type="text" id="grade-${educationCount}" required>

        <label for="passing-year-${educationCount}">Passing Year:</label>
        <input type="date" id="passing-year-${educationCount}" required>
        
    `;

    // add div & content in the html section
    educationSection.appendChild(educationDiv);
});
//--------------------------------------------------------------------------------------------------------------
     // main logic add event listner to prevent the form to reload
const form = document.getElementById('resume-form') as HTMLFormElement;

form.addEventListener('submit', (event:Event) => {

    event.preventDefault();

    // Collect data from the form
    const profilePicture = (document.getElementById("profile-pic") as HTMLInputElement).files?.[0];
    const profilePictureUrl = profilePicture? URL.createObjectURL(profilePicture):"";
    const userName = (document.getElementById("username")as HTMLInputElement).value
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const phone = (document.getElementById('phone') as HTMLInputElement).value;
    const address = (document.getElementById('address') as HTMLTextAreaElement).value;
    const skills = (document.getElementById('skills') as HTMLTextAreaElement).value;

    // _------ALL--ENTREIES_________________________________________________________________________________________________________
    
     // Loop through all the entries
    let resumeHTML = `
        <h1>Shereable resume builder</h1>
        <br/>   
        <h3>personal infomation:</h3>
        <img src=${profilePictureUrl} alt="profile-picture"/>
        <p><b>Name:</b><span contenteditable="true">${name}</span></p>
        <p><b>Email:</b><span contenteditable="true">${email}</span> | <b>Phone:</b><span contenteditable="true">${phone}</span></p>
        <p><b>Address:</b><span contenteditable="true">${address}</span></p>
       
        
    `;

    // Loop through all the experience entries
    const experienceEntries = document.querySelectorAll('.experience-entry');
    experienceEntries.forEach((entry, index) => {
        const company = (document.getElementById(`company-${index + 1}`) as HTMLInputElement).value;
        const role = (document.getElementById(`role-${index + 1}`) as HTMLInputElement).value;
        const duration = (document.getElementById(`duration-${index + 1}`) as HTMLInputElement).value;
        const description = (document.getElementById(`description-${index + 1}`) as HTMLTextAreaElement).value;

        resumeHTML += `
            <h3>Experience:</h3>
            <p><b>Campany:</b><span contenteditable="true">${company}</span></p>
            <p><b>Role:</b><span contenteditable="true">${role}</span>
            </p>
            <p><b>Duration:</b><span contenteditable="true">${duration}</span></p>
            <p><span contenteditable="true">${description}</span></p>
        `;
        
    });

     // Loop through all the education entries
    const educationEntries = document.querySelectorAll('.education-entry');
    educationEntries.forEach((entry, index) => {
        const school = (document.getElementById(`school-${index + 1}`) as HTMLInputElement).value;
        const grade = (document.getElementById(`grade-${index + 1}`) as HTMLInputElement).value;
        const passing_year = (document.getElementById(`passing-year-${index + 1}`) as HTMLInputElement).value;
 
        resumeHTML += `
            <h3>Education:</h3>
            <p><b>School/University:</b>  <span contenteditable="true">${school}</span></p>
            <p><b>Grade:</b>  <span contenteditable="true">${grade}</span> | <b>Passing year:</b>  <span contenteditable="true">${passing_year}</span></p>
     
         `;
     });

   

    resumeHTML += `<h3>Skills:</h3><p> <span contenteditable="true">${skills}</span></p>`;
// ________________________________________________________________________________________

    // Output the resume
    const resumeOutput = document.getElementById('resume-output') as HTMLElement;
    resumeOutput.style.display="block"
    resumeOutput.innerHTML = resumeHTML;
// --------------------------------------------------------------------------------------------------
    // milesotne 5: add logic in which we add functionality our code shereable
    const ShereableLinkBox =document.getElementById("shereable-link-box") as HTMLDivElement;
    const ShereableLinkBtn =document.getElementById("shereable-btn") as HTMLButtonElement;

     ShereableLinkBtn.addEventListener("click",()=>{
        const uniquePath = `https://shabbir.com/resume/${userName.replace(/\s+/g, "_")}_cv.html`

        // clipboard api for copy link
        navigator.clipboard.writeText(uniquePath);
        alert("link copy to clipboard 'press Ctrl+V to paste'")

     })

     


    // show div box and add some css
    ShereableLinkBox.style.display= "flex";
    ShereableLinkBox.style.flexDirection= "column";
    ShereableLinkBox.style.justifyContent="center";
    ShereableLinkBox.style.textAlign="center";
    ShereableLinkBox.style.alignItems= "center";
    ShereableLinkBox.style.margin = ".8rem 0"


    
  

   

    


    // create logic for btn when click on it form data download as pdf
     const PdfDownloadbtn =document.getElementById("download-pdf") as HTMLButtonElement;
     PdfDownloadbtn.addEventListener("click",()=>{
        window.print()  // open a print dialog  box

     });







});

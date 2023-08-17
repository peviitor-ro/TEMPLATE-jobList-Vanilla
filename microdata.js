import jobPostings from "./jobs.js";

// Function to dynamically load the job posting data
const loadJobPostings = () => {

  // Access the HTML elements and update their content with the job posting data
  const jobCardsContainer = document.querySelector(".job-cards");
  jobPostings.forEach((jobPosting, index) => {
    const { title, employmentType, jobLocation } = jobPosting;

    // Create a new job card element
    const jobCard = document.createElement("div");
    jobCard.classList.add("card");

    // Create the job details element
    const jobDetails = document.createElement("div");
    jobDetails.classList.add("job-details");

    // Create the job title element
    const jobTitle = document.createElement("h3");
    jobTitle.textContent = title;

    // Create the job type element
    const jobType = document.createElement("div");
    jobType.classList.add("job-type");
    const jobTypeIcon = document.createElement("img");
    jobTypeIcon.src = "assets/briefcase.svg";
    jobTypeIcon.alt = "briefcase icon";
    const jobTypeText = document.createElement("p");
    jobTypeText.textContent = employmentType;

    // Create the job location element
    const jobLocationElement = document.createElement("div");
    jobLocationElement.classList.add("job-location");
    const jobLocationIcon = document.createElement("img");
    jobLocationIcon.src = "assets/map-pin.svg";
    jobLocationIcon.alt = "map pin icon";
    const jobLocationText = document.createElement("p");
    jobLocationText.textContent = jobLocation.address.addressLocality;

    // Append elements to the job card
    jobType.appendChild(jobTypeIcon);
    jobType.appendChild(jobTypeText);
    jobLocationElement.appendChild(jobLocationIcon);
    jobLocationElement.appendChild(jobLocationText);
    jobDetails.appendChild(jobTitle);
    jobDetails.appendChild(jobType);
    jobDetails.appendChild(jobLocationElement);
    jobCard.appendChild(jobDetails);

    // Create the buttons element
    const buttons = document.createElement("div");
    buttons.classList.add("buttons");
    const applyButton = document.createElement("button");
    applyButton.classList.add("btn-apply");
    const applyLink = document.createElement("a");
    applyLink.setAttribute(
      "href",
      "https://jobdescription-vanillajs-own.netlify.app/"
    );
    applyLink.textContent = "Aplica";
    applyButton.appendChild(applyLink);
    const viewButton = document.createElement("button");
    viewButton.classList.add("btn-view");
    viewButton.textContent = "Vezi detalii";
    buttons.appendChild(applyButton);
    buttons.appendChild(viewButton);
    jobCard.appendChild(buttons);

    // Create a horizontal line element
    const hr = document.createElement("hr");

    // Append the job card and horizontal line to the job cards container
    jobCardsContainer.appendChild(jobCard);

    // Add a horizontal line after each job card except for the last one
    if (index < jobPostings.length - 1) {
      const hr = document.createElement("hr");
      jobCardsContainer.appendChild(hr);
    }
  });
};

// Call the function to load the job posting data
loadJobPostings();

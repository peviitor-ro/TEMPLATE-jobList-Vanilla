import jobPostings from "./jobs.js";
import searchJobPostings from "./search.js";

// Job card creation module
const createJobCard = (jobPosting) => {
  const createTextElement = (text, className) => {
    const element = document.createElement("p");
    element.textContent = text;
    if (className) element.classList.add(className);
    return element;
  };

  const createIconElement = (src, alt) => {
    const element = document.createElement("img");
    element.src = src;
    element.alt = alt;
    return element;
  };

  const createButton = (text, className, href) => {
    const button = document.createElement("button");
    button.classList.add(className);
    const link = document.createElement("a");
    if (href) link.setAttribute("href", href);
    link.textContent = text;
    button.appendChild(link);
    return button;
  };

  const { title, employmentType, jobLocation } = jobPosting;

  const jobCard = document.createElement("div");
  jobCard.classList.add("card");

  const jobDetails = document.createElement("div");
  jobDetails.classList.add("job-details");

  jobDetails.appendChild(createTextElement(title, "h3"));

  const jobType = document.createElement("div");
  jobType.classList.add("job-type");
  jobType.appendChild(
    createIconElement("assets/briefcase.svg", "briefcase icon")
  );
  jobType.appendChild(createTextElement(employmentType));

  const jobLocationElement = document.createElement("div");
  jobLocationElement.classList.add("job-location");
  jobLocationElement.appendChild(
    createIconElement("assets/map-pin.svg", "map pin icon")
  );
  jobLocationElement.appendChild(
    createTextElement(jobLocation.address.addressLocality)
  );

  jobDetails.appendChild(jobType);
  jobDetails.appendChild(jobLocationElement);
  jobCard.appendChild(jobDetails);

  const buttons = document.createElement("div");
  buttons.classList.add("buttons");

  buttons.appendChild(
    createButton(
      "Aplica",
      "btn-apply",
      "https://jobdescription-vanillajs-own.netlify.app/"
    )
  );
  buttons.appendChild(createButton("Vezi detalii", "btn-view"));

  jobCard.appendChild(buttons);

  return jobCard;
};

// Job postings module
const loadJobPostings = (jobList = jobPostings) => {
  const jobCardsContainer = document.querySelector(".job-cards");
  jobCardsContainer.innerHTML = "";

  if (jobList.length === 0) {
    jobCardsContainer.textContent = "Ups... Nu avem acest job!";
    return;
  }

  jobList.forEach((jobPosting, index) => {
    const jobCard = createJobCard(jobPosting);
    jobCardsContainer.appendChild(jobCard);

    if (index < jobPostings.length - 1) {
      jobCardsContainer.appendChild(document.createElement("hr"));
    }
  });
};

// Search module
const handleSearch = () => {
  const searchInput = document.getElementById("searchInput");
  const query = searchInput.value.trim();
  const searchResults =
    query !== "" ? searchJobPostings(query, jobPostings) : jobPostings;
  loadJobPostings(searchResults);
};

// Event listener for search button
document.addEventListener("DOMContentLoaded", () => {
  const searchButton = document.getElementById("searchButton");
  searchButton.addEventListener("click", () => {
    const titleQuery = document.getElementById("searchInput").value.trim();
    const cityQuery = document.getElementById("cityInput").value.trim();
    const searchResults = searchJobPostings(titleQuery, cityQuery, jobPostings);
    loadJobPostings(searchResults);
  });
  // Call the function to load the initial job posting data
  loadJobPostings();
});

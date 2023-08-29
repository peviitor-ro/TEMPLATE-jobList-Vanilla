const jobPostings = [];

const templateJobPosting = {
  "@context": "https://schema.org",
  "@type": "JobPosting",
  employmentType: "Full-time",
  hiringOrganization: {
    "@type": "Organization",
    name: "Your Company",
    sameAs: "https://www.yourcompany.com",
  },
  jobLocation: {
    "@type": "Place",
    address: {
      "@type": "PostalAddress",
    },
  },
  country: "Romania",
};

async function fetchJobPostingsFromAPI() {
  try {
    // Make a fetch request to your API to get the job posting data
    const response = await fetch("https://api.example.com/job-postings");
    const data = await response.json();

    // Process each job posting and add it to the jobPostings array
    data.forEach((jobData) => {
      const newJobPosting = {
        ...templateJobPosting,
        ...jobData,
        jobLocation: {
          ...templateJobPosting.jobLocation,
          address: {
            ...templateJobPosting.jobLocation.address,
            addressLocality: jobData.addressLocality,
          },
        },
      };
      jobPostings.push(newJobPosting);
    });
  } catch (error) {
    console.error("Error fetching job postings:", error);
  }
}

// Call the function to fetch and process job postings
fetchJobPostingsFromAPI();

export default jobPostings;

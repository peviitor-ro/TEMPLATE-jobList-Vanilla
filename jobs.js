const jobPostings = [];

const templateJobPosting = {
  "@context": "https://schema.org",
  "@type": "JobPosting",
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

const createJobPosting = (
  title,
  description,
  employmentType,
  datePosted,
  validThrough,
  addressLocality
) => {
  const newJobPosting = {
    ...templateJobPosting,
    title,
    description,
    employmentType,
    datePosted,
    validThrough,
    jobLocation: {
      ...templateJobPosting.jobLocation,
      address: {
        ...templateJobPosting.jobLocation.address,
        addressLocality,
      },
    },
  };

  jobPostings.push(newJobPosting);
};

// Example usage
createJobPosting(
  "Software Engineer",                // Title
  "Job description goes here...",     // Job description
  "Full-time",                        // Employment TYpe
  "",                                 // optional Date when is posted
  "",                                 // optional Date when expires
  "Oradea"                            // City or remote
);

createJobPosting(
  "Frontend Developer",
  "Job description goes here...",
  "Part-time",
  "",
  "",
  "Cluj-Napoca"
);


// You can add more job postings using the createJobPosting function

export default jobPostings;

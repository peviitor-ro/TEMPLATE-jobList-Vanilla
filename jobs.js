const jobPostings = [
  {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    title: "Software Engineer",
    description: "Job description goes here...",
    datePosted: "2022-01-01",
    validThrough: "2022-12-31",
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
        addressLocality: "Oradea",
      },
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    title: "Frontend Developer",
    description: "Job description goes here...",
    datePosted: "2022-01-01",
    validThrough: "2022-12-31",
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
        addressLocality: "Bucharest",
      },
    },
  },
  // Add more job postings as needed
];

export default jobPostings;
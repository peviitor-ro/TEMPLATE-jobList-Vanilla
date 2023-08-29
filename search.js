// Function to perform the search

const searchJobPostings = (query, jobList) => {
  const searchResults = jobList.filter((job) =>
    job.title.toLowerCase().includes(query.toLowerCase())
  );
  return searchResults;
};

export default searchJobPostings;

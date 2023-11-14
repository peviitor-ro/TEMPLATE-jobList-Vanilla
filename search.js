/// Function to perform the search

const searchJobPostings = (titleQuery, cityQuery, jobList) => {
  const lowerCaseTitleQuery = titleQuery.toLowerCase().trim();
  const lowerCaseCityQuery = cityQuery.toLowerCase().trim();
  
  const searchResults = jobList.filter((job) => {
    const lowerCaseTitle = job.title.toLowerCase();
    const lowerCaseCity = job.jobLocation.address.addressLocality.toLowerCase();

    return lowerCaseTitle.includes(lowerCaseTitleQuery) && lowerCaseCity.includes(lowerCaseCityQuery);
  });

  return searchResults;
};

export default searchJobPostings;

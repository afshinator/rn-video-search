import credentials from "./credentials";

const endpoints =  {
  rapidapi: {
    youtube: {
      endpoint: `https://youtube-search-results.p.rapidapi.com/youtube-search/?q=`,
      options: {
        method: "GET",
        headers: {
          "x-rapidapi-host": "youtube-search-results.p.rapidapi.com",
          "x-rapidapi-key": credentials.youtube,
        },
      },
    },
    bing: {
      endpoint: `https://bing-video-search1.p.rapidapi.com/videos/search?q=`,
      options: {
        method: "GET",
        headers: {
          "x-rapidapi-host": "bing-video-search1.p.rapidapi.com",
          "x-rapidapi-key": credentials.bing,
        },
      },
    },
  },
};

export default endpoints

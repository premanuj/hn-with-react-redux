import ApiService from "./Api";

const JSON_QUERY = ".json?print=pretty";
const BASE_URL = "https://hacker-news.firebaseio.com/v0";
const client = new ApiService({ baseURL: BASE_URL });

const hackerNewsApi = {}; //This object collects all the endpoints we need to call

const PAGE_LIMIT = 10;

//This function limit how much endpoint should fetch in single scroll
const getPageSlice = (limit, page = 0) => ({
  begin: page * limit,
  end: (page + 1) * limit
});

const getPageValue = ({ begin, end, items }) => items.slice(begin, end);

hackerNewsApi.getTopStoryIds = () => client.get(`/topstories${JSON_QUERY}`);
hackerNewsApi.getStory = id => client.get(`/item/${id}${JSON_QUERY}`);
hackerNewsApi.getStoriesByPage = (ids, page) => {
  const { end, begin } = getPageSlice(PAGE_LIMIT, page);
  const activeIds = getPageValue({ begin, end, items: ids });
  const storyPromises = activeIds.map(id => hackerNewsApi.getStory(id));
  return Promise.all(storyPromises);
};

export default hackerNewsApi;

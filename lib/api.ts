const API_URL = "http://127.0.0.1:1337";

async function fetchData(endpoint: string) {
  try {
    const res = await fetch(`${API_URL}${endpoint}`, {
      headers: {
        "Content-Type": "application/json",
      },
      next: { revalidate: 60 },
    });

    if (!res.ok) throw new Error(`Failed to fetch ${endpoint}`);

    const data = await res.json();
    return data.data;
  } catch (error) {
    console.error("API fetch failed:", error);
    throw error;
  }
}

// Exported APIs for collections and single item fetch
export const getAllNews = () => fetchData("/api/newses?populate=*");
export const getTopStories = () => fetchData("/api/top-stories?populate=*");
export const getShortSummaries = () => fetchData("/api/short-summaries?populate=*");
export const getShortVideos = () => fetchData("/api/short-videos?populate=*");
export const getLiveEvents = () => fetchData("/api/live-events?populate=*");
export const getOnlineEvents = () => fetchData("/api/online-events?populate=*");
export const getStrategies = () => fetchData("/api/strategies?populate=*");
export const getForumTopics = () => fetchData("/api/forum-topics?populate=*");
export const getTopPokerRooms = () => fetchData("/api/poker-rooms?populate=*");
export const getHandVideos = () => fetchData("/api/hand-videos?populate=*");

// Detail fetchers by ID
export const getNewsById = (id: string) => fetchData(`/api/newses/${id}?populate=*`);
export const getTopStoryById = (id: string) => fetchData(`/api/top-stories/${id}?populate=*`);
export const getShortSummaryById = (id: string) => fetchData(`/api/short-summaries/${id}?populate=*`);
export const getStrategyById = (id: string) => fetchData(`/api/strategies/${id}?populate=*`);
export const getTopPokerRoomById = (id: string) => fetchData(`/api/poker-rooms/${id}?populate=*`);
export const getEventById = (id: string) => fetchData(`/api/live-events/${id}?populate=*`);


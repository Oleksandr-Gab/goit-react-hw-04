import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com/";

export const fetchArticles = async (search, page) => {
    const response = await axios.get("/search/photos", {
        params: {
            client_id: "JXqk9M8vVm5Avxpm7-_BOqsAeEMSLdaXWfKnvEEHsZA",
            query: search,
            per_page: 12,
            page,
        },
    });
    return response.data.results;
};

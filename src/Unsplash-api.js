import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com/";

export const fetchImages = async (search, page) => {
    const response = await axios.get("/search/photos", {
        params: {
            Accept_Version: "v1",
            client_id: "JXqk9M8vVm5Avxpm7-_BOqsAeEMSLdaXWfKnvEEHsZA",
            query: search,
            per_page: 12,
            page,
        },
    });
    return response.data.results;
};

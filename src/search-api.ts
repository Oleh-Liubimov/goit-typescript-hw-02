import axios from "axios";

const key = "orZoioZV2QAptkCRfP702Dykifhb0x2RWQqlx5z5wnE";
export const perPage:number = 15;

type searchType = {
    query: string;
    page: number;
}

axios.defaults.baseURL = "https://api.unsplash.com/";

export default async function fetchImagesWithQuery({ query, page }:searchType) {
    const response = axios.get(`/search/photos?client_id=${key}&page=${page}&per_page=${perPage}&query=${query}`);
    return response;
}

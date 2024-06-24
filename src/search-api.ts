import axios from "axios";
import { Image } from "./components/ImageGallery/ImageGalleryTypes";

const key = "orZoioZV2QAptkCRfP702Dykifhb0x2RWQqlx5z5wnE";
export const perPage:number = 15;

interface searchParams{
    query: string;
    page: number;
}
interface R {
    results: Image[];
    total: number;
    total_pages: number;
 }

axios.defaults.baseURL = "https://api.unsplash.com/";

export default async function fetchImagesWithQuery({ query, page }:searchParams):Promise<R> {
    const response = await axios.get<R>(`/search/photos?client_id=${key}&page=${page}&per_page=${perPage}&query=${query}`);    
    return response.data;
}

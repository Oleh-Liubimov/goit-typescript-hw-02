 export interface Image{
    id: string;
    urls: {
        small: string;
        regular: string;
    }
    likes:number
}

export interface IGProps {
    data: Image[];
    onImgClick: (urls:string) => void
}
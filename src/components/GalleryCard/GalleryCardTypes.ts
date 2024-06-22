interface Urls{
    [key:string]:string
}


interface Data{
    urls: Urls;
    likes:number
}

export interface GCProps{
    data: Data;
    onImgClick: (urls:string) => void
}

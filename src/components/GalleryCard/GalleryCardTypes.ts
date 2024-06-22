interface Urls{
    [key:string]:string
}


interface Data{
    urls: Urls;
    likes:number
}

export interface PropsType{
    data: Data;
    onImgClick: (urls:string) => void
}

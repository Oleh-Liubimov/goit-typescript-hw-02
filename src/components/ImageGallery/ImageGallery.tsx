import GalleryCard from "../GalleryCard/GalleryCard"
import { IGProps } from "./ImageGalleryTypes";


export default function ImageGallery({ data, onImgClick }:IGProps) {
  
  return (
    <ul className="flex flex-wrap gap-5 justify-center w-full p-5">
      {data.map((item) => (
        <li key={item.id}>
          <GalleryCard data={item} onImgClick={onImgClick} />
        </li>
      ))}
    </ul>
  );
}
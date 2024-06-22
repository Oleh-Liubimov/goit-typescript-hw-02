import GalleryCard from "../GalleryCard/GalleryCard"

export default function ImageGallery({ data, onImgClick }) {
  console.log(data);
  
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
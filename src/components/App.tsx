import { useEffect, useState } from "react";
import SearchBar from "./SearchBar/SearchBar";
import Loader from "./Loader/Loader";
import toast, { Toaster } from "react-hot-toast";
import Error from "./Error/Error";
import ImageGallery from "./ImageGallery/ImageGallery";
import fetchImagesWithQuery from "../search-api";
import LoadMoreBtn from "./LoadMoreBtn/LoadMoreBtn";
import ImageModal from "./ImageModal/ImageModal";
import { perPage } from "../search-api";
import { Image } from "./ImageGallery/ImageGalleryTypes";
 
function App() {
  const [images, setImages] = useState<Image[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const [query, setQuery] = useState<string>("");
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [imgUrl, setImgUrl] = useState<string>("");
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    if (!query) return;
    async function fetchImages() {
      try {
        setLoading(true);
        setError(false);
        const data = await fetchImagesWithQuery({ query, page });
        if (data.data.total === 0) {
          setError(true);
        }
        if (page > Math.ceil(data.data.total_pages / perPage)) {
          const endOfCollection = () =>
            toast("Sorry, but you've reached the end of search results");
          endOfCollection();
          return;
        }
        setImages((i) => [...i, ...data.data.results]);
        setTotalPages(data.data.total_pages);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchImages();
  }, [page, query]);

  const handleSearch = () => {
    setImages([]);
    setPage(1);
  };

  const handleAddSearch = () => {
    setPage(page + 1);
  };

  const handleModalOpen = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleImageClick = (imgUrl: string) => {
    setImgUrl(imgUrl);
    handleModalOpen();
  };

  return (
    <>
      <SearchBar onSearch={handleSearch} setWord={setQuery} />
      {loading && <Loader />}
      {error && <Error />}
      {images.length > 0 && (
        <ImageGallery data={images} onImgClick={handleImageClick} />
      )}
      {images.length > 0 && !loading && (
        <LoadMoreBtn onAddSearch={handleAddSearch} />
      )}
      {isModalOpen && (
        <ImageModal
          isOpen={isModalOpen}
          onClose={() => handleModalOpen()}
          imgUrl={imgUrl}
        ></ImageModal>
      )}
      <Toaster />
    </>
  );
}

export default App;

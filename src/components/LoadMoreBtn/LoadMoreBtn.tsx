import { LMBProps } from "./LoadMoreBtnProps";

export default function LoadMoreBtn({ onAddSearch }:LMBProps) {
  return (
    <div className="w-full flex justify-center">
      <button
        onClick={onAddSearch}
        className="bg-green-400 hover:bg-green-500 transition p-5 rounded mb-5"
      >
        Load more images
      </button>
    </div>
  );
}
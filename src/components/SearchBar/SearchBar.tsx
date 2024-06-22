import { FormEvent } from "react";
import toast, { Toaster } from "react-hot-toast";
import { SBProps } from "./SearchBarProps";


const notification = () => toast("Please enter some request")

export default function SearchBar({ onSearch,  setWord }:SBProps) {
  
  function handleSubmit(evt: FormEvent<HTMLFormElement>) {
    evt.preventDefault();
    const form = evt.currentTarget;
    const formElements = form.elements as typeof form.elements & {
      search: HTMLInputElement;
    }
    const query = formElements.search.value
    if (query.trim() === "") {
      notification();
      return;
    }
    setWord(query)
    onSearch(query);
    form.reset();
    
  }

  return (
    <header>
      <form
        onSubmit={handleSubmit}
        className="flex items-center justify-center gap-3 bg-emerald-400 p-3 font-serif"
      >
        <input
          type="text"
          autoComplete="off"
          name="search"
          autoFocus
          placeholder="Search..."
          className="outline-none p-2 border-inherit rounded-md w-1/3 "
        />
        <button
          type="submit"
          className="p-2 bg-blue-400 rounded-md text-black hover:bg-blue-500 transition"
        >
          Search
        </button>
      </form>
      <Toaster />
    </header>
  );
}
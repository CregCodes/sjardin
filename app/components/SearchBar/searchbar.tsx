import { ChangeEventHandler, MouseEventHandler } from "react";

type Props = {
  handleSearchChange: ChangeEventHandler<HTMLInputElement>,
  handleSearchSubmit: MouseEventHandler<HTMLButtonElement>,
  handleClearSearch: MouseEventHandler<HTMLButtonElement>,
}

export default function SearchBar(props: Props) {
  const { handleSearchSubmit, handleSearchChange, handleClearSearch } = props;

  return <div>SearchBar
    <input onChange={handleSearchChange}></input>
    <button onClick={handleSearchSubmit} className="border-2 border-black">Submit</button>
    <button onClick={handleClearSearch} className="border-2 border-black">Clear Search</button>
  </div>;
}

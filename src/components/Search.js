import { MdSearch } from "react-icons/md";

export default function ({ handleSearchNote }) {
  return (
    <div className="search">
      <MdSearch />
      <input
        type="text"
        placeholder="type to search..."
        onChange={(event) => handleSearchNote(event.target.value)}
      />
    </div>
  );
}

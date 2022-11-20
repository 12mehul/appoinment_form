import { BiCaretDown, BiCheck, BiSearch } from "react-icons/bi";
import { useState } from "react";
const DropDown = ({ toggle, sortBy, orderBy, onSortByChange, onOrderByChange }) => {
    if (!toggle)
    {
        return null;
    }
    return( 
        <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md bg-white">
            <div>
                <div onClick={() => onSortByChange("petName")}
                role="menuitem" className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 flex justify-between cursor-pointer">
                    Pet Name
                </div>
                <div onClick={() => onSortByChange("ownerName")}
                role="menuitem" className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 flex justify-between cursor-pointer">
                    Owner Name
                </div>
                <div onClick={() => onSortByChange("Date")}
                role="menuitem" className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 flex justify-between cursor-pointer">
                    Date
                </div>
                <div onClick={() => onOrderByChange("asc")}
                role="menuitem" className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 flex justify-between cursor-pointer">
                    Ascending
                </div>
                <div onClick={() => onOrderByChange("desc")}
                role="menuitem" className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 flex justify-between cursor-pointer">
                    Descending
                </div>
            </div>
        </div>
    );
};
const Search = ({nameSearch, setNameSearch, sortBy, onSortByChange, orderBy, onOrderByChange}) => {
    let [toggleSort, setToggleSort] = useState(false);

    return(
        <div className="py-5">
            <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <BiSearch />
                    <label htmlFor="query" className="sr-only" />
                </div>
                <input 
                  type="text"
                  onChange={(event) => {
                    setNameSearch(event.target.value);
                  }}
                  placeholder="Search"
                  className="pl-8 rounded-md focus:ring-indigo-500 focus:border-indigo-500 block h-10 w-full font-medium text-base border-gray-300"
                />
                <div className="absolute inset-y-0 right-0 flex items-center">
                    <div>
                        <button 
                        onClick={() => {
                            setToggleSort(!toggleSort);
                        }}
                        type="button"
                        id="options-menu"
                        className="justify-center px-4 py-2 bg-blue-400 border-2 border-blue-400 text-sm text-white hover:bg-blue-700 focus:outline-none focus:ring-2 flex items-center">
                            Sortby
                            <BiCaretDown className="ml-2" />
                        </button>
                        <DropDown toggle={toggleSort}
                            orderBy = {orderBy}
                            onOrderByChange = {(mySort) => onOrderByChange(mySort)}
                            sortBy = {sortBy}
                            onSortByChange = {(mySort) => onSortByChange(mySort)}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Search;
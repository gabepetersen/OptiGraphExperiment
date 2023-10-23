import { useState } from "react";
import { useSearchParams } from "react-router-dom";

type CustomString = string | number | readonly string[] | undefined

function SearchButton(): JSX.Element {
    const [searchParams] = useSearchParams()
    const [searchValue, setSearchValue] = useState<CustomString>(searchParams.get("q")?.toString() ?? "")

    function search(event: any, action: string) {
        console.log("search enter press!")
        if ((action === 'keydown' && event.key === 'Enter') || action == "buttonclick") {
            window.location.href = `${window.location.origin}/search?q=${searchValue}`
        }
    }

    function onValueChange(event: any) {
        setSearchValue(event.target.value);
    }

    return (
        <div>
            <div className="nav-table-cell">
                <input className="search-input" type="text" id="search-input" placeholder="Search"
                    onKeyDown={(event) => { search(event, 'keydown') }} value={searchValue} onChange={onValueChange} />
                <a className="search-icon" onClick={(event) => { search(event, 'buttonclick') }}>
                    <i className="fa fa-search"></i>
                    Search
                </a>
            </div>
        </div>
    );
}

export default SearchButton;
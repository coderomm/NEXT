import { SearchBar } from "./Searchbar"

export const Appbar = () => {
    return <div className="flex justify-between	pl-3 pr-3 pt-1">
        <div>
            <img className="w-28" src="yt.jpeg" alt="" />
        </div>
        <div>
            <SearchBar />
        </div>
        <div>
            Logout
        </div>
    </div>
}
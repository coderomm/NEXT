import { SearchBar } from "./Searchbar"

export const Appbar = () => {
    return <div className="grid grid-cols-4 gap-4 py-3 px-5">
        <div className="">
            <div className="flex justify-start gap-2 items-center ">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
                <img className="w-36" src="yt.jpeg" alt="" />
            </div>
        </div>
        <div className="col-span-2">
            <SearchBar />
        </div>
        <div className="flex justify-end items-center">
            Logout
        </div>
    </div>
}
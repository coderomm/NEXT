export const SearchBar = () => {
    return <div className="w-2/4">
        <form>
            <div className="w-96 flex text-gray-900  pl-3 text-sm">
                <input id="default-search" className="w-96 p-3 border-l border-t border-b border-inherit outline-none rounded-l-3xl" placeholder="Search" required />
                <button className="py-2 px-4 rounded-r-3xl inline-flex items-center border border-inherit outline-none bg-gray-100">
                    <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                    </svg>
                </button>
            </div>
        </form>
    </div>
}
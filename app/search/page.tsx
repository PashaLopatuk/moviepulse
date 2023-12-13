import FilmsListSearch from "../components/Search/FilmsListSearch/FilmsListSearch"
import Search from "../components/Search/Search"
import Filters from "../components/Search/Filters/Filters"

const page = () => (
    <div className="p-4 mt-10">
        <h1 className="">Search</h1>
        <div className="flex flex-col space-y-5">
            <div className="space-y-2">
                <Search />
                {/* <Filters /> */}
            </div>
            <FilmsListSearch />
        </div>
        
    </div>
)

export default page
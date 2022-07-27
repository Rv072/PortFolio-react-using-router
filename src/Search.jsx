import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Home from "./Home";

const Search = () => {
    const [searchParams] = useSearchParams();
    const [search, setSearch] = useState("");

    useEffect(() => {
        const currentParams = Object.fromEntries([...searchParams]);
        // console.log(currentParams);
        const { q } = currentParams;
        setSearch(q);
    }, [searchParams]);

    const _handleSearch = async () => {
        // Call API
        console.log("Call API: ", search);
    };

    useEffect(() => {
        if (!search) return;

        _handleSearch();
    }, [search]);

    return (
        <>
            <Home />
            <p>I'm a Search Component. Searching for {search}</p>

            <input
                onKeyDown={(e) => {
                    if (e.key === "Enter") {
                        console.log("Call API Now. Since user pressed enter");
                        setSearch(e.target.value);
                    }
                }}
            />
            <button onClick={_handleSearch}>Search</button>
        </>
    );
};

export default Search
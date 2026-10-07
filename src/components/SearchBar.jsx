import { useState } from "react";

function SearchBar ({ setCity }) {

    const [searchCity, setSearchCity] = useState("");

    function handleSubmit(event) {
        event.preventDefault();
        setCity(searchCity);
    }

    return (
        <section>
            <div className="sml-wrapper">

                <form onSubmit={handleSubmit}>   

                    <input
                        type="text"
                        value={searchCity}
                        onChange={(event) => setSearchCity(event.target.value)}
                        placeholder="Search for a city"
                    />

                    <button type="submit">Search</button>
                </form>

            </div>
        </section>
    )

}

export default SearchBar;
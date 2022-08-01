import { useState } from 'react';
import { AsyncPaginate } from 'react-select-async-paginate';
import { geoApiOptions } from '../../Api';


export default function Search({ onSearchChange }) {
    const [search, setSearch] = useState(null);
    const loadOptions = (inputValue) => {
        return fetch(
            `${process.env.REACT_APP_GEO_API_URL}/cities?namePrefix=${inputValue}`,
             geoApiOptions
             )
        .then(response => response.json())
        .then(response => {
            return {
                options: response.data.map((city) => {
                    return {
                        value: `${city.latitude}, ${city.longitude}`,
                        label: `${city.name}, ${city.countryCode}` ,
                    }
                })
            }
        })
        .catch(err => console.error(err));
    }

    const handleOnChange = (searchData) => {
        setSearch(searchData);
        onSearchChange(searchData);
    }

    return (
        <AsyncPaginate
            placeholder='Search for city'
            debounceTimeout={600}
            value={search}
            onChange={handleOnChange}
            loadOptions={loadOptions}
        />
    )
}
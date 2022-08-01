
export const geoApiOptions = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': process.env.REACT_APP_RapidAPI_Key,
		'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
	}
};
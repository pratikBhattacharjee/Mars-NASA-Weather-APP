const API_Key = `H6rYqMdpfPjoQyz0UkBLxlI4vza6ejvRkg1STIWT`;
const API_URL = `https://api.nasa.gov/insight_weather/?api_key=${API_Key}&feedtype=json&ver=1.0`;

getWeather();

})
function getWeather(){
	fetch(API_URL)
		.then(res => res.json())
		.then(data => 
			console.log(data));
}
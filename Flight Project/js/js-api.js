window.onload = (event) => {
fetch('http://api.openweathermap.org/data/2.5/weather?id=ID_792680&lang=en&appid=1415e198ad21d573a3d951fec00d7745').then(function (resp) { return resp.json() }).then(function (data) {
	//добавляем название города
	document.querySelector('.weather__city').textContent = data.name;
	//data.main.temp содержит значение в Кельвинах, отнимаем от  273, чтобы получить значение в градусах Цельсия
	document.querySelector('.weather__forecast').innerHTML = Math.round(data.main.temp - 273) + '&deg;';
	//Добавляем описание погоды
	document.querySelector('.weather__desc').textContent = data.weather[0]['description'];
	//Добавляем иконку погоды
	document.querySelector('.weather__icon').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`;
})
.catch(function () {
		//Обрабатываем ошибки
});
}
	



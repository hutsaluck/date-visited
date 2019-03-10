let savedDate = findCookieValue("page-date");
if (savedDate) {
	document.write("Останній раз ви заходили " + savedDate);
}

function findCookieValue(cookieName) {
	var allcookies = document.cookie;
	var pos = allcookies.indexOf(cookieName + "=");

	// Если cookie с указанным именем найден, извлечь его значения.
	if (pos != -1) {
		var start = pos + cookieName.length + 1;
		var end = allcookies.indexOf(";", start);

		if (end == -1) end = allcookies.length;

		var value = allcookies.substring(start, end);
		value = value;
		return value;
	}
}

window.addEventListener("load", function () {
	document.cookie = "page-date=0;max-age=0";
});

window.onunload = function() {
	let date = new Date();
	let options = {
		year: 'numeric',
		month: 'long',
		day: 'numeric',
		timezone: 'UTC',
		hour: 'numeric',
		minute: 'numeric',
		second: 'numeric'
	};
	let saveDate = date.toLocaleString("uk", options);
	document.cookie = "page-date=" + saveDate + ";max-age=2628000";
};
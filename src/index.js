function updateTime() {
  //Tokyo
  let tokyoElement = document.querySelector("#tokyo");
  if (tokyoElement) {
    let tokyoDateElement = tokyoElement.querySelector(".date");
    let tokyoTimeElement = tokyoElement.querySelector(".time");
    let tokyoDateTime = moment().tz("Asia/Tokyo");

    tokyoDateElement.innerHTML = tokyoDateTime.format("MMMM Do YYYY");
    tokyoTimeElement.innerHTML = tokyoDateTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }

  //London
  let londonElement = document.querySelector("#london");
  if (londonElement) {
    let londonDateElement = londonElement.querySelector(".date");
    let londonTimeElement = londonElement.querySelector(".time");
    let londonDateTime = moment().tz("Europe/London");

    londonDateElement.innerHTML = londonDateTime.format("MMMM Do YYYY");
    londonTimeElement.innerHTML = londonDateTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }

  //New York
  let newYorkElement = document.querySelector("#newyork");
  if (newYorkElement) {
    let newYorkDateElement = newYorkElement.querySelector(".date");
    let newYorkTimeElement = newYorkElement.querySelector(".time");
    let newYorkDateTime = moment().tz("America/New_York");

    newYorkDateElement.innerHTML = newYorkDateTime.format("MMMM Do YYYY");
    newYorkTimeElement.innerHTML = newYorkDateTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  let cityName = this.options[this.selectedIndex].text;

  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
    cityName = cityTimeZone.replace("_", " ").split("/")[1] + "📍";
  }
  if (cityTimeZone === "") {
    location.reload();
  }
  let cityDateTime = moment().tz(cityTimeZone);

  let cityElement = document.querySelector("#cities");
  cityElement.innerHTML = `<div class="city">
        <div>
          <h2>${cityName}</h2>
          <div class="date">${cityDateTime.format("MMMM Do YYYY")}</div>
        </div>
        <div class="time">${cityDateTime.format(
          "h:mm:ss"
        )} <small>${cityDateTime.format("A")}</small></div>
      </div>
     `;
}

updateTime();
setInterval(updateTime, 1000);

let cityElement = document.querySelector("#city");
cityElement.addEventListener("change", updateCity);

function updateTime() {
  //Tokyo
  let tokyoElement = document.querySelector("#tokyo");
  let tokyoDateElement = tokyoElement.querySelector(".date");
  let tokyoTimeElement = tokyoElement.querySelector(".time");
  let tokyoDateTime = moment().tz("Asia/Tokyo");

  tokyoDateElement.innerHTML = tokyoDateTime.format("MMMM Do YYYY");
  tokyoTimeElement.innerHTML = tokyoDateTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );

  //London
  let londonElement = document.querySelector("#london");
  let londonDateElement = londonElement.querySelector(".date");
  let londonTimeElement = londonElement.querySelector(".time");
  let londonDateTime = moment().tz("Europe/London");

  londonDateElement.innerHTML = londonDateTime.format("MMMM Do YYYY");
  londonTimeElement.innerHTML = londonDateTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );
}

updateTime();
setInterval(updateTime, 1000);

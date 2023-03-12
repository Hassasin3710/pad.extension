window.onload = function () {
    clockDateTime();
}

function clockDateTime() {
  var time = new Date(
      new Date().toLocaleString("en-US", { timeZone: "US/Alaska" })
    ),
    hours = time.getHours(),
    minutes = time.getMinutes(),
    seconds = time.getSeconds();

  document.querySelectorAll("#clock")[0].innerHTML = 
  `${harold(hours)}:${harold(minutes)}:${harold(seconds)}`;

  function harold(standIn) {
    if (standIn < 10) {
      standIn = "0" + standIn;
    }
    return standIn;
  }

  document.getElementById(
    "dateTime"
  ).innerHTML = `${formatDate(new Date())}`;

  function formatDate(param) {
    return new Intl.DateTimeFormat("en-US", {
        timeZone: "US/Alaska",
        weekday: "long",
        month: "long",
        day: "numeric",
        year: "numeric",
      }).format(param)
  }
}

setInterval(clockDateTime, 1000);

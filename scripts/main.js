document.getElementById("mobile-nav").addEventListener("change", function () {
  const target = this.value;
  if (target) {
    window.location.hash = target;
    this.selectedIndex = 0;
  }
});

document.getElementById("crow-img").addEventListener("click", function () {
  const rng = Math.random();
  if (rng >= 0 && rng < 0.2) {
    document.getElementById("crow-speak").textContent = "Caw!";
  } else if (rng >= 0.2 && rng < 0.4) {
    document.getElementById("crow-speak").textContent = "Caw! caw!";
  } else if (rng >= 0.4 && rng < 0.6) {
    document.getElementById("crow-speak").textContent = "Caw! Caw! caw!";
  } else if (rng >= 0.6 && rng < 0.8) {
    document.getElementById("crow-speak").textContent = "caw!";
  } else if (rng >= 0.8) {
    const date = new Date();
    const day_num = date.getDay();
    let day = "Monday";
    if (day_num == 0) {
      day = "Sunday";
    } else if (day_num == 1) {
      day = "Monday";
    } else if (day_num == 2) {
      day = "Tuesday";
    } else if (day_num == 3) {
      day = "Wednesday";
    } else if (day_num == 4) {
      day = "Thursday";
    } else if (day_num == 5) {
      day = "Friday";
    } else if (day_num == 6) {
      day = "Saturday";
    }
    document.getElementById("crow-speak").textContent = "Happy " + day + "!";
  }
});

// Startup function allows for a few JS controlled elements to be rendered initially
start_up();
function start_up() {
  render_copyright();
}

// Displays copyright with current year
function render_copyright() {
  const copyright = `© ${new Date().getFullYear()} blanchard789.dev`;
  document.getElementById("copyright").textContent = copyright;
}

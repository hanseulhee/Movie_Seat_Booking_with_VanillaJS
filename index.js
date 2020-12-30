const movies = document.querySelector(".js-movie");
const frame = document.querySelector(".js-frame");
const seats = frame.querySelectorAll(".seat");
const count = document.querySelector(".js-count");
const total = document.querySelector(".js-total");

let selectedSeat = 0;
let movieCost = 11;

const SEAT_SELECT_CN = "selected";

const SEAT_OCCUPIED_CN = "occupied";

const changeCount = () => {
  count.innerHTML = selectedSeat;

  total.innerHTML = selectedSeat * movieCost;
};

const handleSeat = (event) => {
  if (event.target.classList.contains(SEAT_SELECT_CN)) {
    event.target.classList.remove(SEAT_SELECT_CN);
    selectedSeat -= 1;
  } else {
    if (!event.target.classList.contains(SEAT_OCCUPIED_CN)) {
      event.target.classList.add(SEAT_SELECT_CN);

      selectedSeat += 1;
    }
  }

  changeCount();
};

// 초기화 함수
const reset = () => {
  count.innerHTML = 0;
  total.innerHTML = 0;

  selectedSeat = 0;

  seats.forEach((seat) => {
    seat.classList.remove(SEAT_SELECT_CN);
  });
};

const getSelectValue = (event) => {
  movieCost = parseInt(event.target.value);
  // 초기화 함수 실행
  reset();
};

const addEvent = () => {
  movies.addEventListener("change", getSelectValue);
  seats.forEach((seat) => {
    seat.addEventListener("click", handleSeat);
  });
};

const init = () => {
  addEvent();
};

init();

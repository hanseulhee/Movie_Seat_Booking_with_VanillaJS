### Movie_Seat_Booking_with_VanillaJS
##### 영화관 좌석 예매 사이트
<hr>

### Result



![ezgif com-gif-maker (10)](https://user-images.githubusercontent.com/63100352/111788117-0cf19c00-8903-11eb-8e36-9f0949d10ef3.gif)



![2021-03-19 (1)](https://user-images.githubusercontent.com/63100352/111787623-8210a180-8902-11eb-8317-a4879697c236.png)

---

### 개발 사항

다른 영화 클릭하면 좌석과 가격을 초기화

```js
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
```
<br>

선택 좌석 수와 해당 영화의 가격을 곱해 총 가격을 나타냄
```js
const changeCount = () => {
  count.innerHTML = selectedSeat;
  total.innerHTML = selectedSeat * movieCost;
};
```

---

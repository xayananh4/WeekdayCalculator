import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Date from './date.js';


window.addEventListener("load", function () {

  let month = document.getElementById("text1");
  let day = document.getElementById("text2");
  let year = document.getElementById("text3");
  let display = document.getElementById("Display");
  let CE = this.document.getElementById("CE");
  let BCE = this.document.getElementById("BCE");

  month.onkeyup = function () {
    let m = month.value;
    m = m.slice(0, 2);
    m = parseInt(m);
    if (m > 12) {
      m = "";
    }
    month.value = m;
    m = parseInt(m);
  };

  day.onkeyup = function () {
    let d = day.value;
    d = d.slice(0, 2);
    d = parseInt(d);
    if (d > 31) {
      d = "";
    }
    day.value = d;
    d = parseInt(d);
  };


  year.onkeyup = function () {
    let y = year.value;
    y = y.slice(0, 4);
    y = parseInt(y);
    year.value = y;
  };

  CE.onclick = function () {
    let m = month.value;
    let d = day.value;
    let y = year.value;
    const newDate = new Date(m,d,y);
    display.innerHTML = newDate.checkDate(m,d,y);
  };

  BCE.onclick = function () {
    let m = month.value;
    let d = day.value;
    let y = year.value;
    const newDate = new Date(m, d, y);
    display.innerHTML = newDate.checkDate(m, d, 0 - y);
  };
});
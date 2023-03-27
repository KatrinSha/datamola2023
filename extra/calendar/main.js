function createCalendar(elem, year, month) {
  let current_month = month - 1;
  let current_date = new Date(year, current_month);
  let last_day = new Date(year, month);
  let table = document.createElement("table");

  table.innerHTML =
    "<tr><th>пн</th><th>вт</th><th>ср</th><th>чт</th><th>пт</th><th>сб</th><th>вс</th></tr>";

  while (current_date.getDay() !== 1) {
    current_date.setDate(current_date.getDate() - 1);
  }
  while (current_date < last_day) {
    let tr = document.createElement("tr");
    for (let i = 0; i <= 6; i++) {
      let td = document.createElement("td");
      if (current_date.getMonth() == current_month) {
        td.innerText = current_date.getDate();
      }
      tr.append(td);
      current_date.setDate(current_date.getDate() + 1);
    }
    table.append(tr);
  }
  elem.append(table);
}
createCalendar(calendar, 2023, 4);

function createCalendar(elem, year, month) {
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  const currentMonth = month - 1;
  const name = months[currentMonth];
  const monthname = document.querySelector('.title');
  monthname.innerText = name;
  const currentDate = new Date(year, currentMonth);
  const lastDay = new Date(year, month);
  const table = document.createElement('table');

  table.innerHTML = '<tr><th>пн</th><th>вт</th><th>ср</th><th>чт</th><th>пт</th><th>сб</th><th>вс</th></tr>';

  while (currentDate.getDay() !== 1) {
    currentDate.setDate(currentDate.getDate() - 1);
  }
  while (currentDate < lastDay) {
    const tr = document.createElement('tr');
    for (let i = 0; i <= 6; i++) {
      const td = document.createElement('td');
      if (currentDate.getMonth() == currentMonth) {
        td.innerText = currentDate.getDate();
      }
      tr.append(td);
      currentDate.setDate(currentDate.getDate() + 1);
    }
    table.append(tr);
  }

  elem.append(table);
}
createCalendar(calendar, 2023, 3);

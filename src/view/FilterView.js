class FilterView {
  id;

  constructor(containerId) {
    this.id = containerId;
  }

  display(collect) {
    const header = document.querySelector('header');

    const filters = document.createElement('section');
    filters.classList.add('filters');
    filters.setAttribute('id', this.id);

    const filtersWrapper = document.createElement('div');
    filtersWrapper.classList.add('filters__wrapper', 'wrapper');
    const filtersContainer = document.createElement('form');
    filtersContainer.classList.add('filters__container');
    // ---------------------filter Name
    const filtersName = document.createElement('div');
    filtersName.classList.add('filters__name', 'filters-box');
    const selectName = document.createElement('select');
    selectName.setAttribute('id', 'name');
    const optionDisName = document.createElement('option');
    optionDisName.setAttribute('disabled', 'disabled');
    optionDisName.setAttribute('selected', 'selected');
    optionDisName.textContent = 'Name';
    selectName.append(optionDisName);
    filtersName.append(selectName);
    const array = collect.tasks;
    const nameArray = [];
    collect.forEach((item) => {
      nameArray.push(item.assignee);
    });
    new Set([...nameArray]).forEach((item) => {
      const option = document.createElement('option');
      option.value = item;
      option.textContent = item;
      selectName.append(option);
    });

    // ---------------------------filter Privacy
    const filterPrivacy = document.createElement('div');
    filterPrivacy.classList.add('filters__privacy', 'filters-box');
    const selectPrivacy = document.createElement('select');
    selectPrivacy.setAttribute('id', 'privacy');
    const optionDisPrivacy = document.createElement('option');
    optionDisPrivacy.setAttribute('disabled', 'disabled');
    optionDisPrivacy.setAttribute('selected', 'selected');
    optionDisPrivacy.textContent = 'Privacy';
    const optionPrivacy1 = document.createElement('option');
    optionPrivacy1.setAttribute('value', 'Public');
    optionPrivacy1.textContent = 'Public';
    const optionPrivacy2 = document.createElement('option');
    optionPrivacy2.setAttribute('value', 'Privat');
    optionPrivacy2.textContent = 'Privat';
    selectPrivacy.append(optionDisPrivacy, optionPrivacy1, optionPrivacy2);
    filterPrivacy.append(selectPrivacy);

    // ---------------------------filter Priority
    const filterPriority = document.createElement('div');
    filterPriority.classList.add('filters__priority', 'filters-box');
    const selectPriority = document.createElement('select');
    selectPriority.setAttribute('id', 'priority');
    const optionDisPriority = document.createElement('option');
    optionDisPriority.setAttribute('disabled', 'disabled');
    optionDisPriority.setAttribute('selected', 'selected');
    optionDisPriority.textContent = 'Priority';
    const optionPriority1 = document.createElement('option');
    optionPriority1.setAttribute('value', 'Low');
    optionPriority1.textContent = 'Low';
    const optionPriority2 = document.createElement('option');
    optionPriority2.setAttribute('value', 'Medium');
    optionPriority2.textContent = 'Medium';
    const optionPriority3 = document.createElement('option');
    optionPriority3.setAttribute('value', 'High');
    optionPriority3.textContent = 'High';
    selectPriority.append(optionDisPriority, optionPriority1, optionPriority2, optionPriority3);
    filterPriority.append(selectPriority);

    // ---------------------------filter status
    const filterStatus = document.createElement('div');
    filterStatus.classList.add('filters__priority', 'filters-box');
    const selectStatus = document.createElement('select');
    selectStatus.setAttribute('id', 'status');
    const optionDisStatus = document.createElement('option');
    optionDisStatus.setAttribute('disabled', 'disabled');
    optionDisStatus.setAttribute('selected', 'selected');
    optionDisStatus.textContent = 'Status';
    const optionStatus1 = document.createElement('option');
    optionStatus1.setAttribute('value', 'To Do');
    optionStatus1.textContent = 'To Do';
    const optionStatus2 = document.createElement('option');
    optionStatus2.setAttribute('value', 'In progress');
    optionStatus2.textContent = 'In progress';
    const optionStatus3 = document.createElement('option');
    optionStatus3.setAttribute('value', 'Complete');
    optionStatus3.textContent = 'Complete';
    selectStatus.append(optionDisStatus, optionStatus1, optionStatus2, optionStatus3);
    filterStatus.append(selectStatus);

    // ---------------------------filter Date
    const filterDate = document.createElement('div');
    filterDate.classList.add('filters__date');

    const btnDate = document.createElement('button');
    btnDate.classList.add('button-date');
    btnDate.setAttribute('name', 'Date');
    btnDate.textContent = 'Date';

    const icoArrow = document.createElement('span');
    icoArrow.classList.add('ico', 'arrow');
    btnDate.append(icoArrow);
    const calendar = document.createElement('div');
    calendar.classList.add('calendars', 'visibilityDate');

    const from = document.createElement('div');
    from.classList.add('from');
    const labelFrom = document.createElement('label');
    labelFrom.setAttribute('for', 'dateFrom');
    labelFrom.textContent = 'From:';
    const inputFrom = document.createElement('input');
    inputFrom.setAttribute('type', 'date');
    inputFrom.setAttribute('id', 'date1');
    inputFrom.setAttribute('name', 'dateFrom');
    from.append(labelFrom, inputFrom);

    const to = document.createElement('div');
    to.classList.add('to');
    const labelTo = document.createElement('label');
    labelTo.setAttribute('for', 'dateFrom');
    labelTo.textContent = 'From:';
    const inputTo = document.createElement('input');
    inputTo.setAttribute('type', 'date');
    inputTo.setAttribute('id', 'date2');
    inputTo.setAttribute('name', 'dateTo');
    to.append(labelTo, inputTo);

    const inputSub = document.createElement('button');
    inputSub.classList.add('calSub');
    inputSub.setAttribute('id', 'calSub');
    inputSub.textContent = 'Enter';
    calendar.append(from, to, inputSub);
    filterDate.append(btnDate, calendar);

    // ---------------------------filter Search
    const filtersSearch = document.createElement('div');
    filtersSearch.classList.add('filters__search');
    const formSearch = document.createElement('form');
    formSearch.classList.add('form__search');
    formSearch.setAttribute('action', '');
    formSearch.setAttribute('method', 'post');
    const inputSearch = document.createElement('input');
    inputSearch.setAttribute('placeholder', 'Description');
    inputSearch.setAttribute('name', 'search');
    inputSearch.setAttribute('type', 'text');
    inputSearch.setAttribute('id', 'description');
    const buttonSearch = document.createElement('button');
    buttonSearch.classList.add('button-search');
    const icoSearch = document.createElement('span');
    icoSearch.classList.add('ico', 'search');
    buttonSearch.append(icoSearch);
    formSearch.append(inputSearch, buttonSearch);
    filtersSearch.append(formSearch);
    // ----------------Aplay btn------------
    const inputSubmit = document.createElement('input');
    inputSubmit.setAttribute('type', 'submit');
    inputSubmit.setAttribute('value', 'Applay filters');
    inputSubmit.classList.add('button-applay');
    // ---------------------------filter Search
    const buttonReset = document.createElement('button');
    buttonReset.classList.add('button-reset');
    buttonReset.textContent = 'Reset';

    // ---------------------------View
    const view = document.createElement('div');
    view.classList.add('view');
    const buttonViewTable = document.createElement('button');
    buttonViewTable.classList.add('button__view-table');

    const icoTable = document.createElement('span');
    icoTable.classList.add('ico', 'table-view');
    const buttonViewRow = document.createElement('button');
    buttonViewRow.classList.add('button__view-row');
    const icoRow = document.createElement('span');
    icoRow.classList.add('ico', 'row-view');
    buttonViewTable.append(icoTable);
    buttonViewRow.append(icoRow);

    view.append(buttonViewTable, buttonViewRow);

    const buttonAdd = document.createElement('button');
    buttonAdd.classList.add('button__add-new-task');
    buttonAdd.textContent = 'Add new task';
    const icoAdd = document.createElement('span');
    icoAdd.classList.add('ico', 'add');
    buttonAdd.append(icoAdd);

    filtersContainer.append(filtersName, filterPrivacy, filterPriority, filterStatus, filterDate, filtersSearch, inputSubmit, buttonReset);
    filtersWrapper.append(filtersContainer, view, buttonAdd);
    filters.append(filtersWrapper);

    header.insertAdjacentElement('afterend', filters);
  }
}
export default FilterView;

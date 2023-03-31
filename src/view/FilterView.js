class FilterView {
    id;
  
    constructor(containerId) {
      this.id = containerId;
    }
  
    display(collect) {
      const select = document.getElementById(this.id);
      const array = collect.tasks;
      const nameArray = [];
      array.forEach((item) => {
        nameArray.push(item.assignee);
      });
      new Set([...nameArray]).forEach((item) => {
        const option = document.createElement('option');
        option.value = item;
        option.innerText = item;
        select.append(option);
      });
    }
  }
  export default FilterView;
const list = [
  {
    value: 'Пункт 1.',
    children: null,
  },
  {
    value: 'Пункт 2.',
    children: [
      {
        value: 'Подпункт 2.1.',
        children: null,
      },
      {
        value: 'Подпункт 2.2.',
        children: [
          {
            value: 'Подпункт 2.2.1.',
            children: null,
          },
          {
            value: 'Подпункт 2.2.2.',
            children: null,
          },
        ],
      },
      {
        value: 'Подпункт 2.3.',
        children: null,
      },
    ],
  },
  {
    value: 'Пункт 3.',
    children: null,
  },
];
const { body } = document;
function createListItem(item) {
  const listItem = document.createElement('li');
  listItem.innerText = item.value;
  if (item.children) {
    const sublist = document.createElement('ul');
    item.children.forEach((child) => {
      const subListItem = createListItem(child);
      sublist.append(subListItem);
    });
    listItem.append(sublist);
    sublist.style.fontSize = '90%';
  }
  return listItem;
}
function createList(title, list) {
  const heading = document.createElement('h2');
  heading.innerText = title;

  const listElement = document.createElement('ul');
  list.forEach((item) => {
    const listItem = createListItem(item);
    listElement.append(listItem);
  });
  body.append(heading);
  body.append(listElement);
}

createList('Linked list', list);

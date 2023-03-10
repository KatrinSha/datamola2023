let tasks = [
  {
    id: "1",
    name: "Создать логотип приложения",
    description: "Формат изображения – svg, размеры - 100х100px",
    createdAt: new Date("2023-03-09T23:00:00"),
    assignee: "Барановска Устинья",
    status: "To Do",
    priority: "High",
    isPrivate: false,
    comments: [],
  },
  {
    id: "2",
    name: "Переименовать константу DELAY_TIME",
    description:
      "Необходимо переименовать константу с DELAY_TIME на DELAY_API_TIME",
    createdAt: new Date("2023-03-09T23:00:05"),
    assignee: "Иванов Иван",
    status: "Complete",
    priority: "High",
    isPrivate: false,
    comments: [
      {
        id: "1029",
        text: "Будет сделано!",
        createdAt: new Date("2023-03-09T23:00:05"),
        author: "Барановска Устинья",
      },
    ],
  },
  {
    id: "3",
    name: "Elit at imperdiet dui accumsan",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut tellus elementum sagittis vitae et. Porta lorem mollis aliquam ut.",
    createdAt: new Date("2022-12-25T23:55:30"),
    assignee: "Игнатьева Жозефина",
    status: "To Do",
    priority: "Medium",
    isPrivate: true,
    comments: [
      {
        id: "1000",
        text: "Будет сделано!",
        createdAt: new Date("2023-03-09T23:00:05"),
        author: "Барановска Устинья",
      },
    ],
  },
  {
    id: "4",
    name: "Lectus sit amet est placerat in egestas erat imperdiet sed",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Laoreet sit amet cursus sit amet dictum sit amet justo. Diam maecenas sed enim ut sem viverra aliquet eget sit.",
    createdAt: new Date("2023-01-14T23:04:48"),
    assignee: "Иванов Иван",
    status: "Complete",
    priority: "Low",
    isPrivate: false,
    comments: [
      {
        id: "1001",
        text: "Будет сделано!",
        createdAt: new Date("2023-03-09T23:00:05"),
        author: "Иванов Иван",
      },
    ],
  },
  {
    id: "5",
    name: "Tincidunt augue interdum velit euismod in pellentesque massa placerat duis",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Porttitor leo a diam sollicitudin. Natoque penatibus et magnis dis.",
    createdAt: new Date("2023-02-27T10:51:10"),
    assignee: "Игнатьева Жозефина",
    status: "To Do",
    priority: "Low",
    isPrivate: true,
    comments: [
      {
        id: "1002",
        text: "Будет сделано!",
        createdAt: new Date("2023-03-09T23:00:05"),
        author: "Иванов Иван",
      },
    ],
  },
  {
    id: "6",
    name: "Nulla at volutpat diam ut venenatis tellus in metus vulputate",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Porttitor leo a diam sollicitudin. Natoque penatibus et magnis dis.",
    createdAt: new Date("2022-12-01T17:01:16"),
    assignee: "Иванов Иван",
    status: "Complete",
    priority: "High",
    isPrivate: false,
    comments: [
      {
        id: "1003",
        text: "Будет сделано!",
        createdAt: new Date("2023-03-09T23:00:05"),
        author: "Иванов Иван",
      },
    ],
  },
  {
    id: "7",
    name: "Vestibulum lectus mauris ultrices eros in cursus turpis massa tincidunt",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Porttitor leo a diam sollicitudin. Natoque penatibus et magnis dis.",
    createdAt: new Date("2022-12-08T00:44:07"),
    assignee: "Иванов Иван",
    status: "To Do",
    priority: "Low",
    isPrivate: false,
    comments: [
      {
        id: "1004",
        text: "Будет сделано!",
        createdAt: new Date("2023-03-09T23:00:05"),
        author: "Захарченко Олеся",
      },
    ],
  },
  {
    id: "8",
    name: "Placerat in egestas erat imperdiet sed euismod nisi porta lorem",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Porttitor leo a diam sollicitudin. Natoque penatibus et magnis dis.",
    createdAt: new Date("2022-12-29T21:18:05"),
    assignee: "Игнатьева Жозефина",
    status: "Complete",
    priority: "Low",
    isPrivate: true,
    comments: [
      {
        id: "1005",
        text: "Будет сделано!",
        createdAt: new Date("2023-03-09T23:00:05"),
        author: "Иванов Иван",
      },
    ],
  },
  {
    id: "9",
    name: "Massa sapien faucibus et molestie ac feugiat sed lectus vestibulum",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Porttitor leo a diam sollicitudin. Natoque penatibus et magnis dis.",
    createdAt: new Date("2023-02-21T07:17:55"),
    assignee: "Иванов Иван",
    status: "To Do",
    priority: "High",
    isPrivate: false,
    comments: [
      {
        id: "1006",
        text: "Будет сделано!",
        createdAt: new Date("2023-03-09T23:00:05"),
        author: "Захарченко Олеся",
      },
    ],
  },
  {
    id: "10",
    name: "Cursus turpis massa tincidunt dui ut ornare lectus sit amet",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Porttitor leo a diam sollicitudin. Natoque penatibus et magnis dis.",
    createdAt: new Date("2023-02-06T21:15:16"),
    assignee: "Чухрай Зоя",
    status: "To Do",
    priority: "High",
    isPrivate: false,
    comments: [
      {
        id: "1007",
        text: "Будет сделано!",
        createdAt: new Date("2023-03-09T23:00:05"),
        author: "Иванов Иван",
      },
    ],
  },
  {
    id: "11",
    name: "Netus et malesuada fames ac turpis egestas maecenas pharetra convallis",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Porttitor leo a diam sollicitudin. Natoque penatibus et magnis dis.",
    createdAt: new Date("2023-01-25T03:12:33"),
    assignee: "Иванов Иван",
    status: "In progress",
    priority: "Medium",
    isPrivate: false,
    comments: [
      {
        id: "1008",
        text: "Будет сделано!",
        createdAt: new Date("2023-03-09T23:00:05"),
        author: "Иванов Иван",
      },
    ],
  },
  {
    id: "12",
    name: "Placerat vestibulum lectus mauris ultrices eros in cursus turpis massa",
    description:
      "Diam vulputate ut pharetra sit amet aliquam id diam. Condimentum id venenatis a condimentum.",
    createdAt: new Date("2023-02-06T21:15:16"),
    assignee: "Никитина Любовь",
    status: "Complete",
    priority: "Low",
    isPrivate: false,
    comments: [
      {
        id: "1009",
        text: "Будет сделано!",
        createdAt: new Date("2023-03-09T23:00:05"),
        author: "Чухрай Зоя",
      },
    ],
  },
  {
    id: "13",
    name: "Auctor neque vitae tempus quam pellentesque nec nam aliquam sem",
    description:
      "Ellus in metus vulputate eu scelerisque felis imperdiet proin. Eget est lorem ipsum dolor.",
    createdAt: new Date("2023-01-30T13:18:32"),
    assignee: "Лановой Святослав",
    status: "To Do",
    priority: "High",
    isPrivate: false,
    comments: [
      {
        id: "1010",
        text: "Будет сделано!",
        createdAt: new Date("2023-03-09T23:00:05"),
        author: "Иванов Иван",
      },
    ],
  },
  {
    id: "14",
    name: "Ultrices gravida dictum fusce ut placerat orci nulla pellentesque dignissim",
    description:
      "Orci porta non pulvinar neque laoreet. Ut diam quam nulla porttitor.",
    createdAt: new Date("2023-01-05T05:06:34"),
    assignee: "Иванов Иван",
    status: "In progress",
    priority: "Medium",
    isPrivate: false,
    comments: [
      {
        id: "1011",
        text: "Будет сделано!",
        createdAt: new Date("2023-03-09T23:00:05"),
        author: "Чухрай Зоя",
      },
    ],
  },
  {
    id: "15",
    name: "Tempor nec feugiat nisl pretium fusce id velit ut tortor",
    description:
      "Adipiscing elit ut aliquam purus. Libero id faucibus nisl tincidunt.",
    createdAt: new Date("2023-01-05T05:08:34"),
    assignee: "Иванов Иван",
    status: "Complete",
    priority: "Low",
    isPrivate: false,
    comments: [
      {
        id: "1012",
        text: "Будет сделано!",
        createdAt: new Date("2023-03-09T23:00:05"),
        author: "Савенко Богдан",
      },
    ],
  },
  {
    id: "16",
    name: "Risus ultricies tristique nulla aliquet enim tortor at auctor urna",
    description:
      "Необходимо переименовать константу с DELAY_TIME на DELAY_API_TIME",
    createdAt: new Date("2022-12-10T15:33:23"),
    assignee: "Щабловская Катерина",
    status: "High",
    priority: "Medium",
    isPrivate: false,
    comments: [
      {
        id: "1013",
        text: "Будет сделано!",
        createdAt: new Date("2023-03-09T23:00:05"),
        author: "Иванов Иван",
      },
    ],
  },
  {
    id: "17",
    name: "Urna et pharetra pharetra massa massa ultricies mi quis hendrerit",
    description:
      "Adipiscing elit ut aliquam purus. Libero id faucibus nisl tincidunt. Et molestie ac feugiat sed lectus vestibulum. Quis vel eros donec ac odio tempor orci dapibus ultrices. Tellus at urna condimentum mattis. Donec ac odio tempor orci.",
    createdAt: new Date("2022-12-17T05:46:49"),
    assignee: "Савенко Богдан",
    status: "In progress",
    priority: "Medium",
    isPrivate: false,
    comments: [
      {
        id: "1014",
        text: "Будет сделано!",
        createdAt: new Date("2023-03-09T23:00:05"),
        author: "Иванов Иван",
      },
    ],
  },
  {
    id: "18",
    name: "Tortor consequat id porta nibh venenatis cras sed felis eget",
    description:
      "Pellentesque pulvinar pellentesque habitant morbi tristique senectus et netus et. Elementum nibh tellus molestie nunc non. ",
    createdAt: new Date("2023-02-25T21:09:34"),
    assignee: "Иванов Иван",
    status: "To Do",
    priority: "Low",
    isPrivate: true,
    comments: [
      {
        id: "1015",
        text: "Будет сделано!",
        createdAt: new Date("2023-03-09T23:00:05"),
        author: "Иванов Иван",
      },
    ],
  },
  {
    id: "19",
    name: "Tortor consequat id porta nibh venenatis cras sed felis eget",
    description:
      "Elementum nibh tellus molestie nunc non. Pretium viverra suspendisse potenti nullam ac tortor vitae.",
    createdAt: new Date("2022-12-03T01:52:57"),
    assignee: "Щабловская Катерина",
    status: "Complete",
    priority: "High",
    isPrivate: false,
    comments: [
      {
        id: "1016",
        text: "Будет сделано!",
        createdAt: new Date("2023-03-09T23:00:05"),
        author: "Иванов Иван",
      },
    ],
  },
  {
    id: "20",
    name: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames",
    description:
      "Pellentesque pulvinar pellentesque habitant morbi tristique senectus et netus et. Elementum nibh tellus molestie nunc non. ",
    createdAt: new Date("2023-01-31T01:58:39"),
    assignee: "Иванов Иван",
    status: "In progress",
    priority: "Medium",
    isPrivate: false,
    comments: [
      {
        id: "1017",
        text: "Будет сделано!",
        createdAt: new Date("2023-03-09T23:00:05"),
        author: "Иванов Иван",
      },
    ],
  },
  {
    id: "21",
    name: "In egestas erat imperdiet sed euismod nisi porta lorem mollis",
    description:
      "Tincidunt eget nullam non nisi. Sollicitudin tempor id eu nisl. Libero volutpat sed cras ornare arcu.",
    createdAt: new Date("2022-12-28T17:44:31"),
    assignee: "Щабловская Катерина",
    status: "Complete",
    priority: "Low",
    isPrivate: false,
    comments: [
      {
        id: "1018",
        text: "Будет сделано!",
        createdAt: new Date("2023-03-09T23:00:05"),
        author: "Иванов Иван",
      },
    ],
  },
  {
    id: "22",
    name: "Augue ut lectus arcu bibendum at varius vel pharetra vel",
    description:
      "Необходимо переименовать константу с DELAY_TIME на DELAY_API_TIME",
    createdAt: new Date("2022-12-27T10:14:49"),
    assignee: "Иванов Иван",
    status: "To Do",
    priority: "High",
    isPrivate: true,
    comments: [
      {
        id: "1019",
        text: "Будет сделано!",
        createdAt: new Date("2023-03-09T23:00:05"),
        author: "Иванов Иван",
      },
    ],
  },
  {
    id: "23",
    name: "Ac odio tempor orci dapibus ultrices in iaculis nunc sed",
    description:
      "Massa sed elementum tempus egestas sed. Orci porta non pulvinar neque laoreet. Ut diam quam nulla porttitor",
    createdAt: new Date("2022-12-07T22:38:10"),
    assignee: "Щабловская Катерина",
    status: "In progress",
    priority: "Medium",
    isPrivate: false,
    comments: [
      {
        id: "1020",
        text: "Будет сделано!",
        createdAt: new Date("2023-03-09T23:00:05"),
        author: "Иванов Иван",
      },
    ],
  },
  {
    id: "24",
    name: "Pellentesque sit amet porttitor eget dolor morbi non arcu risus",
    description: "Donec ac odio tempor orci.",
    createdAt: new Date("2022-12-13T07:41:45"),
    assignee: "Медяник Злата",
    status: "Complete",
    priority: "Low",
    isPrivate: false,
    comments: [
      {
        id: "1021",
        text: "Будет сделано!",
        createdAt: new Date("2023-03-09T23:00:05"),
        author: "Передрий Таисия",
      },
    ],
  },
  {
    id: "25",
    name: "Ullamcorper malesuada proin libero nunc consequat interdum varius sit amet",
    description: "Elementum nibh tellus molestie nunc non.",
    createdAt: new Date("2023-01-25T00:35:07"),
    assignee: "Медяник Злата",
    status: "To Do",
    priority: "High",
    isPrivate: false,
    comments: [
      {
        id: "1022",
        text: "Будет сделано!",
        createdAt: new Date("2023-03-09T23:00:05"),
        author: "Передрий Таисия",
      },
    ],
  },
  {
    id: "26",
    name: "Mi ipsum faucibus vitae aliquet nec ullamcorper sit amet risus",
    description:
      "Libero volutpat sed cras ornare arcu. Tristique risus nec feugiat in fermentum.",
    createdAt: new Date("2022-12-17T17:13:36"),
    assignee: "Бачей Чеслава",
    status: "In progress",
    priority: "Medium",
    isPrivate: false,
    comments: [
      {
        id: "1023",
        text: "Будет сделано!",
        createdAt: new Date("2023-03-09T23:00:05"),
        author: "Иванов Иван",
      },
    ],
  },
  {
    id: "27",
    name: "Id leo in vitae turpis massa sed elementum tempus egestas",
    description:
      "Bibendum at varius vel pharetra vel. Lorem ipsum dolor sit amet.",
    createdAt: new Date("2023-01-06T02:27:11"),
    assignee: "Бондаренко Платон",
    status: "Complete",
    priority: "Medium",
    isPrivate: false,
    comments: [
      {
        id: "1024",
        text: "Будет сделано!",
        createdAt: new Date("2023-03-09T23:00:05"),
        author: "Чухрай Зоя",
      },
    ],
  },
  {
    id: "28",
    name: "Sed velit dignissim sodales ut eu sem integer vitae justo",
    description:
      "Praesent tristique magna sit amet. Orci dapibus ultrices in iaculis nunc sed augue.",
    createdAt: new Date("2022-12-31T16:01:50"),
    assignee: "Карпов Влад",
    status: "To Do",
    priority: "High",
    isPrivate: false,
    comments: [
      {
        id: "1025",
        text: "Будет сделано!",
        createdAt: new Date("2023-03-09T23:00:05"),
        author: "Попов Даниил",
      },
    ],
  },
  {
    id: "29",
    name: "Ut lectus arcu bibendum at varius vel pharetra vel turpis",
    description: "Praesent tristique magna sit amet.",
    createdAt: new Date("2022-12-14T13:04:57"),
    assignee: "Карпов Влад",
    status: "In progress",
    priority: "Medium",
    isPrivate: false,
    comments: [
      {
        id: "1026",
        text: "Будет сделано!",
        createdAt: new Date("2023-03-09T23:00:05"),
        author: "Евсеев Спартак",
      },
    ],
  },
  {
    id: "30",
    name: "Nulla facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum",
    description:
      "Tortor vitae purus faucibus ornare suspendisse sed nisi lacus sed. Libero id faucibus nisl tincidunt.",
    createdAt: new Date("2023-02-04T01:36:16"),
    assignee: "Никифорова Таисия",
    status: "To Do",
    priority: "Low",
    isPrivate: true,
    comments: [
      {
        id: "1027",
        text: "Будет сделано!",
        createdAt: new Date("2023-03-09T23:00:05"),
        author: "Васильев Ждан",
      },
    ],
  },
  {
    id: "31",
    name: "Non blandit massa enim nec dui nunc mattis enim ut",
    description: "Erat pellentesque adipiscing commodo elit.",
    createdAt: new Date("2022-12-04T23:12:24"),
    assignee: "Бачей Чеслава",
    status: "In progress",
    priority: "Medium",
    isPrivate: false,
    comments: [
      {
        id: "1028",
        text: "Будет сделано!",
        createdAt: new Date("2023-03-09T23:00:05"),
        author: "Тимошенко Марк",
      },
    ],
  },
];

let module = (function () {
  let user = "Иванов Иван";

  function sort(array) {
    array.sort((a, b) => {
      return b.createdAt - a.createdAt;
    });
    return array;
  }
  function getId() {
    let id = Math.floor(1 + Math.random() * 1000).toString();
    let idArray = tasks.map((item) => {
      return item.id;
    });
    let hasThisId = idArray.some((item) => {
      return item == id;
    });
    if (hasThisId) {
      return getId();
    } else {
      return id;
    }
  }
  return {
    user,
    getTasks: (skip = 0, top = 10, filterConfig = {}) => {
      let {
        assignee: filterAssignee,
        dateFrom: filterdateFrom,
        dateTo: filterdateTo,
        status: filterStatus,
        priority: filterPriority,
        isPrivate: filterIsPrivate,
        description: filterDescription,
      } = filterConfig;
      let result = tasks;
      if (filterAssignee !== undefined) {
        result = result.filter((item) => {
          return item.assignee.includes(filterAssignee);
        });
      }
      if (filterdateFrom !== undefined && filterdateTo !== undefined) {
        result = result.filter((item) => {
          return (
            item.createdAt < new Date(filterdateTo) &&
            item.createdAt > new Date(filterdateFrom)
          );
        });
      }
      if (filterStatus !== undefined) {
        result = result.filter((item) => {
          return item.status === filterStatus;
        });
      }
      if (filterPriority !== undefined) {
        result = result.filter((item) => {
          return item.priority === filterPriority;
        });
      }
      if (filterIsPrivate !== undefined) {
        result = result.filter((item) => {
          return item.isPrivate == filterIsPrivate;
        });
      }
      if (filterDescription !== undefined) {
        result = result.filter((item) => {
          return item.description.includes(filterDescription);
        });
      }
      let sortedArr = sort(result).slice(skip, top);
      console.log(sortedArr);
      return sortedArr;
    },
    getTask: (id) => {
      let index;
      if (
        id !== undefined &&
        typeof id == "string" &&
        id !== "" &&
        typeof Number(id) == "number" &&
        id <= tasks.length
      ) {
        index = tasks.findIndex((item) => {
          return item.id == id;
        });
        console.log(tasks[index]);
        return tasks[index];
      } else console.log("The id must be a string with a number");
    },
    validateTask: (task) => {
      let isValid = [];
      if (typeof task.id == "string" && task.id !== "") {
        isValid.push(true);
      }
      if (
        typeof task.name == "string" &&
        task.name !== "" &&
        task.name.length <= 100
      ) {
        isValid.push(true);
      }
      if (
        typeof task.description == "string" &&
        task.description !== "" &&
        task.description.length <= 280
      ) {
        isValid.push(true);
      }
      if (task.createdAt instanceof Date == true) {
        isValid.push(true);
      }
      if (typeof task.assignee == "string" && task.assignee !== "") {
        isValid.push(true);
      }
      if (
        typeof task.status == "string" &&
        task.status !== "" &&
        (task.status == "To Do" ||
          task.status == "In progress" ||
          task.status == "Complete")
      ) {
        isValid.push(true);
      }
      if (
        typeof task.priority == "string" &&
        task.priority !== "" &&
        (task.priority == "Low" ||
          task.priority == "Medium" ||
          task.priority == "High")
      ) {
        isValid.push(true);
      }
      if (typeof task.isPrivate === "boolean") {
        isValid.push(true);
      }
      if (Array.isArray(task.comments)) {
        isValid.push(true);
      }
      if (isValid.length == 9) {
        console.log("Task is valid");
        return true;
      } else {
        console.log("Task is invalid, check the value of the fields");
        return false;
      }
    },
    addTask: (name, description, assignee, status, priority, isPrivate) => {
      const taskAssignee = assignee ?? user;
      let id = getId();
      const newTask = {
        id,
        name,
        description,
        status,
        priority,
        isPrivate,
        comments: [],
        createdAt: new Date(),
        assignee: taskAssignee,
      };
      console.log(newTask);
      if (module.validateTask(newTask)) {
        tasks.push(newTask);
        console.log(`Task added`);
        return true;
      } else {
        console.log(`Task not added`);
        return false;
      }
    },
    editTask: (
      id,
      name,
      description,
      assignee,
      status,
      priority,
      isPrivate = false
    ) => {
      let editTask = module.getTask(id);
      if (editTask.assignee == user) {
        if (assignee !== undefined) {
          editTask.assignee = assignee;
        }
        if (name !== undefined) {
          editTask.name = name;
        }
        if (description !== undefined) {
          editTask.description = description;
        }
        if (status !== undefined) {
          editTask.status = status;
        }
        if (priority !== undefined) {
          editTask.priority = priority;
        }
        if (isPrivate !== undefined) {
          editTask.isPrivate = isPrivate;
        }
        console.log(editTask);
        console.log(module.validateTask(editTask));
        return module.validateTask(editTask);
      } else {
        console.log("You do not have user rights");
        return false;
      }
    },
    removeTask: (id) => {
      let deletedTask = module.getTask(id);
      let index;
      if (
        id !== undefined &&
        typeof id == "string" &&
        id !== "" &&
        typeof Number(id) == "number" &&
        id <= tasks.length
      ) {
        if (deletedTask.assignee == user) {
          index = tasks.findIndex((item) => {
            return item.id == id;
          });
          tasks.splice(index, 1);
          console.log(`You deleted task from id: ${id}`);
          return true;
        } else {
          console.log("You do not have user rights");
          return false;
        }
      } else console.log("The id must be a string with a number");
    },
    validateComment: (com) => {
      let isValid = [];
      if (typeof com.id == "string" && com.id !== "") {
        isValid.push(true);
      }
      if (typeof com.text == "string" && com.text.length <= 280) {
        isValid.push(true);
      }
      if (com.createdAt instanceof Date == true) {
        isValid.push(true);
      }
      if (typeof com.author == "string" && com.author !== "") {
        isValid.push(true);
      }
      if (isValid.length == 4) {
        console.log("Comment is valid");
        return true;
      } else {
        console.log("Comment is invalid, check the value of the fields");
        return false;
      }
    },
    addComment: (id, text) => {
      let newComm = {};
      if (
        id !== undefined &&
        typeof id == "string" &&
        id !== "" &&
        typeof Number(id) == "number" &&
        id <= tasks.length
      ) {
        let task = module.getTask(id);
        if (text !== undefined) {
          newComm = {
            id: getId(),
            text,
            createdAt: new Date(),
            author: user,
          };
        } else console.log("Add text");
        if (module.validateComment(newComm)) {
          task.comments.push(newComm);
          console.log("Comment added");
          return true;
        } else {
          console.log("Comment not added");
          return false;
        }
      } else console.log("The id must be a string with a number");
    },
    changeUser: (usr) => {
      if (typeof usr == "string" && usr !== "") {
        user = usr;
      }
    },
  };
})();
//-------------------------------CHECKING FUNCTIONS--------------------------------
//                           ADD/REMOVE comment     ctr + /

//GETTASKS

// module.getTasks(0, 10, {
//   assignee: "Иван",
// });
// module.getTasks(1, 10, {
//   dateFrom: "2023-01-01",
//   dateTo: "2023-03-31",
// })
// module.getTasks(1, 10, {
// status: "Complete"
// })
// module.getTasks(1, 10, {
//  priority: "Low",
// })
// module.getTasks(1, 10, {
//  isPrivate: false,
// })
// module.getTasks(1, 10, {
// description: "Lorem",
// })

//GETTASK

//module.getTask('2');
//module.getTask('');
//module.getTask(8);

//VALIDATETASK

// let task = {
//   id: "3",
//   name: "Elit at imperdiet dui accumsan",
//   description: "Lorem ipsum dol.",
//   createdAt: new Date("2022-12-25T23:55:30"),
//   assignee: "Игнатьева Жозефина",
//   status: "To Do",
//   priority: "Medium",
//   isPrivate: true,
//   comments: [],
// };
// let taskInval = {
//   id: 3,
//   name: "Elit at imperdiet dui accumsan",
//   description: "Lorem ipsum dol.",
//   createdAt: new Date("2022-12-25T23:55:30"),
//   assignee: "Игнатьева Жозефина",
//   status: "To",
//   priority: "Medium",
//   isPrivate: true,
//   comments: [],
// };
// module.validateTask(task);
// module.validateTask(taskInval);

//ADDTASK

// module.addTask(
//   "Cursus ",
//   "Cursus turpis massa tincidunt",
//   module.user,
//   "To Do",
//   "Low",
//   false
// );
// module.addTask(
//   "Cursus ",
//   "Cursus turpis massa tincidunt",
//   'user',
//   "To Do",
//   "",
//   'false'
// );

//EDITTASK

// module.editTask('7','check');
// module.editTask('7','');
// module.editTask('5','');
// module.editTask('7','feed the cats','some task about cats','Mothers of cats','Complete','High', true);

//REMOVETASK

// module.removeTask('7');
// module.removeTask('5');
// module.removeTask('');
// module.removeTask('two');

//VALIDATECOMMENT

// let com = {
//  id: "789",
//  text: "text",
//  createdAt: new Date("2022-12-29T21:18:05"),
//  author: "linna"
// }
// let comInval= {
//  id: "789",
//  text: "text",
//  createdAt: '15-10-2022',
//  author: "linna"
// }
// module.validateComment(com);
// module.validateComment(comInval);

//ADDCOMMENT

//module.addComment("10", "trewetswetswert");
//module.addComment("11", "trewetswetswert");
//module.addComment("10", );

//CHANGEUSER

//module.changeUser('kate');
//module.changeUser('')

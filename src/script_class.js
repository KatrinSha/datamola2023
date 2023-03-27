const tasks = [
  {
    id: "1",
    name: "Создать логотип приложения",
    description: "Формат изображения – svg, размеры - 100х100px",
    createdAt: new Date("2023-03-09T23:00:00"),
    assignee: "Иванов Иван",
    status: "To Do",
    priority: "High",
    isPrivate: false,
    comments: [
      {
        id: "1031",
        text: "Будет сделано!",
        createdAt: new Date("2023-03-09T23:00:05"),
        author: "Иванов Иван",
      },
      {
        id: "1032",
        text: "Gorem ipsum dolor sit amet, consectetur adipiscing elit. Nuncvulputate libero velit interdum, ac aliquet odio mattis. Nunc vulputate libero etvelit interdum, ac aliquet, odio mattis. Gorem ipsum dolor sit amet, consecteturadipiscing elit Gorem ipsum dolor adipiscing elit amet.",
        createdAt: new Date("2023-02-20T23:00:05"),
        author: "Барановска Устинья",
      },
      {
        id: "1033",
        text: "Gorem ipsum dolor sit amet, consectetur adipiscing elit. Nuncvulputate libero velit interdum, ac aliquet odio mattis. Nunc vulputate libero etvelit interdum, ac aliquet, odio mattis. Gorem ipsum dolor sit amet, consecteturadipiscing elit Gorem ipsum dolor adipiscing elit amet.",
        createdAt: new Date("2022-12-20T23:00:05"),
        author: "Игнатьева Жозефина",
      },
      {
        id: "1034",
        text: "Gorem ipsum dolor sit amet, consectetur adipiscing elit. Nuncvulputate libero velit interdum, ac aliquet odio mattis. Nunc vulputate libero etvelit interdum, ac aliquet, odio mattis. Gorem ipsum dolor sit amet, consecteturadipiscing elit Gorem ipsum dolor adipiscing elit amet.",
        createdAt: new Date("2022-12-19T23:00:05"),
        author: "Иванов Иван",
      },
      {
        id: "1035",
        text: "Gorem ipsum dolor sit amet, consectetur adipiscing elit. Nuncvulputate libero velit interdum, ac aliquet odio mattis. Nunc vulputate libero etvelit interdum, ac aliquet, odio mattis. Gorem ipsum dolor sit amet, consecteturadipiscing elit Gorem ipsum dolor adipiscing elit amet.",
        createdAt: new Date("2022-12-18T23:00:05"),
        author: "Чухрай Зоя",
      },
      {
        id: "1036",
        text: "Gorem ipsum dolor sit amet, consectetur adipiscing elit. Nuncvulputate libero velit interdum, ac aliquet odio mattis. Nunc vulputate libero etvelit interdum, ac aliquet, odio mattis. Gorem ipsum dolor sit amet, consecteturadipiscing elit Gorem ipsum dolor adipiscing elit amet.",
        createdAt: new Date("2022-12-17T23:00:05"),
        author: "Игнатьева Жозефина",
      },
    ],
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
      "!!!!!!!!!!!!!Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Porttitor leo a diam sollicitudin. Natoque penatibus et magnis dis.",
    createdAt: new Date("2023-02-21T07:17:55"),
    assignee: "Иванов Иван",
    status: "Complete",
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

function getUniqId() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0;
    const v = c == "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}
class Task {
  #id;

  #createdAt;

  name;

  description;

  status;

  priority;

  isPrivate;

  comments;

  assignee;

  constructor(
    name,
    description,
    status,
    priority,
    isPrivate,
    comments,
    assignee
  ) {
    this.#id = getUniqId();
    this.name = name;
    this.description = description;
    this.status = status;
    this.priority = priority;
    this.isPrivate = isPrivate;
    this.comments = comments;
    this.assignee = assignee;
    this.#createdAt = new Date();
  }

  get id() {
    return this.#id;
  }

  get createdAt() {
    return this.#createdAt;
  }

  static validate(task) {
    function isIdvalid() {
      return typeof task.id === "string" && task.id !== "";
    }

    function isNameValid() {
      return (
        typeof task.name === "string" &&
        task.name !== "" &&
        task.name.length <= 100
      );
    }

    function isDescriptionValid() {
      return (
        typeof task.description === "string" &&
        task.description !== "" &&
        task.description.length <= 280
      );
    }

    function isDateValid() {
      return task.createdAt instanceof Date;
    }

    function isAssigneeValid() {
      return typeof task.assignee === "string" && task.assignee !== "";
    }

    function isStatusValid() {
      return (
        typeof task.status === "string" &&
        task.status !== "" &&
        ["To Do", "In progress", "Complete"].includes(task.status)
      );
    }

    function isPriorityValid() {
      return (
        typeof task.priority === "string" &&
        task.priority !== "" &&
        ["Low", "Medium", "High"].includes(task.priority)
      );
    }

    function isPrivateValid() {
      return typeof task.isPrivate === "boolean";
    }

    function isArrayValid() {
      return Array.isArray(task.comments);
    }

    return (
      isIdvalid() &&
      isNameValid() &&
      isDescriptionValid() &&
      isDateValid() &&
      isAssigneeValid() &&
      isStatusValid() &&
      isPriorityValid() &&
      isPrivateValid() &&
      isArrayValid()
    );
  }
}

// const task1 = new Task('NameNameName', 'Description', 'To Do', 'Low', true, [], 'assignee', 'Kate Kate');
// Task.validate(task1);
// console.log(task1);

class Comment {
  user = "Иванов Иван";

  #id;

  #createdAt;

  #author;

  constructor(text) {
    this.text = text;
    this.#id = getUniqId();
    this.#createdAt = new Date();
    this.#author = this.user;
  }

  get id() {
    return this.#id;
  }

  get createdAt() {
    return this.#createdAt;
  }

  get author() {
    return this.#author;
  }

  static validate(com) {
    function isIdValid() {
      return typeof com.id === "string" && com.id !== "";
    }

    function isTextValid() {
      return typeof com.text === "string" && com.text.length <= 280;
    }

    function isDateValid() {
      return com.createdAt instanceof Date;
    }

    function isAuthorvalid() {
      return typeof com.author === "string" && com.author !== "";
    }
    console.log(
      isIdValid() && isTextValid() && isDateValid() && isAuthorvalid()
    );
    return isIdValid() && isTextValid() && isDateValid() && isAuthorvalid();
  }
}

// const com = new Comment("ftghfyktgykt", "lala");
// com.print()
// Comment.validate(com)

class TaskCollection {
  #user = "Иванов Иван";

  #tasks;

  constructor(tasks) {
    this.#tasks = tasks;
  }

  addAll(someTasks) {
    const validTask = someTasks.filter((item) => Task.validate(item));
    this.#tasks = [...this.#tasks, ...validTask];
    return someTasks.filter((item) => !Task.validate(item));
  }

  set user(userValue) {
    this.#user = userValue;
  }

  get user() {
    return this.#user;
  }
  get tasks() {
    return this.#tasks;
  }
  getPage(skip = 0, top = 10, filter = {}) {
    function sortCollection(array) {
      array.sort((a, b) => b.createdAt - a.createdAt);
      return array;
    }
    const {
      assignee: filterAssignee,
      dateFrom: filterdateFrom,
      dateTo: filterdateTo,
      status: filterStatus,
      priority: filterPriority,
      isPrivate: filterIsPrivate,
      description: filterDescription,
    } = filter;
    let result = [...this.#tasks];
    if (filterAssignee !== undefined) {
      result = result.filter((item) => item.assignee.includes(filterAssignee));
    }
    if (filterdateFrom !== undefined) {
      result = result.filter(
        (item) => item.createdAt >= new Date(filterdateFrom)
      );
    }
    if (filterdateTo !== undefined) {
      result = result.filter(
        (item) => item.createdAt <= new Date(filterdateTo)
      );
    }
    if (filterStatus !== undefined) {
      result = result.filter((item) => item.status === filterStatus);
    }
    if (filterPriority !== undefined) {
      result = result.filter((item) => item.priority === filterPriority);
    }
    if (filterIsPrivate !== undefined) {
      result = result.filter((item) => item.isPrivate === filterIsPrivate);
    }
    if (filterDescription !== undefined) {
      result = result.filter((item) =>
        item.description.includes(filterDescription)
      );
    }
    const sortedArr = sortCollection(result).slice(skip, top + skip);
    return sortedArr;
  }

  get(id) {
    const index = tasks.findIndex((item) => item.id === id);
    if (index >= 0) {
      return tasks[index];
    }
    return false;
  }

  add(task) {
   // console.log(task);
    if (Task.validate(task)) {
      this.#tasks.push(task);
      return true;
    }
    return false;
  }

  edit(id, task) {
    console.log("test");
  
    const editTask = this.get(id);

    if (editTask.assignee === this.#user) {
      if (task.assignee !== undefined) {
        editTask.assignee = task.assignee;
      } 
      if (task.name !== undefined) {
        editTask.name = task.name;
      } 
      if (task.description !== undefined) {
        editTask.description = task.description;
      } 
      if (task.status !== undefined) {
        editTask.status = task.status;
      }
      if (task.priority !== undefined) {
        editTask.priority = task.priority;
      }
      if (task.isPrivate !== undefined) {
        editTask.isPrivate = task.isPrivate;
      }
      console.log(Task.validate(editTask))
      return Task.validate(editTask);
    }
    return false;
  }

  removeTask(id) {
    const deletedTask = this.get(id);
    let index;
    if (deletedTask.assignee === this.user) {
      index = this.#tasks.findIndex((item) => item.id === id);
      this.#tasks.splice(index, 1);
      return true;
    }
    return false;
  }

  addComment(id, text) {
    const newComm = new Comment(text);
    const task = this.get(id);
    if (Comment.validate(newComm)) {
      task.comments.push(newComm);
      return true;
    }
    return false;
  }

  clear() {
    this.#tasks = [];
  }
}
const array = new TaskCollection(tasks);

// array.addAll(tasks);
// array.clear()
// array.getPage(0, 11, { status: "To Do" });

// array.get("10")
// array.add("NameNameName","Description","To Do","Low",true,[],"assignee","Kate Kate")

// array.edit('9','feed the cats','some task about cats','Иванов Иван','Complete','High', true);
const task = new Task(
  "NameNameName",
  "Description",
  "To Do",
  "Low",
  true,
  [],
  "Иванов Иван",

);
const task2 = new Task(
  "NameNameName",
  "some task about cats",
  "Complete",
  "High",
  true,
  [],
  "Иванов Иван",

);
function editTask(id, task) {
  return array.edit(id, task);
}

editTask('9',task2)
// array.get("1");
// array.removeTask("6");
class HeaderView {
  id;
  constructor(containerId) {
    this.id = containerId;
  }
  display(user) {
    const profileName = document.getElementById(this.id);
    profileName.innerText = user;
    //console.log(user);
  }
}
const collection = new TaskCollection(tasks);

// console.log(collection.user);
const headerView = new HeaderView("profile-name");

function setCurrentUser(user) {
  collection.user = user;
  headerView.display(user);
}

function addTask(task) {
  collection.add(task);
}
setCurrentUser("Иванов Иван");

addTask(task);

class TaskFeedView {
  id;
  constructor(containerId) {
    this.id = containerId;
  }
  display(collect) {
    const array = collect.tasks;
    const headerButton = document.querySelector(".header__button");
    const container = document.getElementById(this.id);
    //--------------create column's header
    //TODO
    const cardsContainerTodo = document.createElement("div");
    cardsContainerTodo.classList.add("cards-container", "todo");
    const cardsInfoTodo = document.createElement("div");
    cardsInfoTodo.classList.add("cards__info");
    const cardsCountTodo = document.createElement("div");
    cardsCountTodo.classList.add("cards__count");
    cardsCountTodo.innerText = "count";
    const cardsTitleTodo = document.createElement("div");
    cardsTitleTodo.classList.add("cards__title");
    cardsTitleTodo.innerText = "TO DO";
    cardsInfoTodo.append(cardsCountTodo, cardsTitleTodo);
    cardsContainerTodo.append(cardsInfoTodo);
    container.append(cardsContainerTodo);

    //INPROGRESS
    const cardsContainerInprogress = document.createElement("div");
    cardsContainerInprogress.classList.add("cards-container", "inprogress");
    const cardsInfoInprogress = document.createElement("div");
    cardsInfoInprogress.classList.add("cards__info");
    const cardsCountInprogress = document.createElement("div");
    cardsCountInprogress.classList.add("cards__count");
    cardsCountInprogress.innerText = "count";
    const cardsTitleInprogress = document.createElement("div");
    cardsTitleInprogress.classList.add("cards__title");
    cardsTitleInprogress.innerText = "IN PROGRESS";
    cardsInfoInprogress.append(cardsCountInprogress, cardsTitleInprogress);
    cardsContainerInprogress.append(cardsInfoInprogress);
    container.append(cardsContainerInprogress);

    //COMPLETE
    const cardsContainerComplete = document.createElement("div");
    cardsContainerComplete.classList.add("cards-container", "complete");
    const cardsInfoComplete = document.createElement("div");
    cardsInfoComplete.classList.add("cards__info");
    const cardsCountComplete = document.createElement("div");
    cardsCountComplete.classList.add("cards__count");
    cardsCountComplete.innerText = "count";
    const cardsTitleComplete = document.createElement("div");
    cardsTitleComplete.classList.add("cards__title");
    cardsTitleComplete.innerText = "COMPLETE";
    cardsInfoComplete.append(cardsCountComplete, cardsTitleComplete);
    cardsContainerComplete.append(cardsInfoComplete);
    container.append(cardsContainerComplete);

    //create tasks boxes
    const todoBox = document.createElement("div");
    todoBox.classList.add("card__wrapper-to768");
    todoBox.setAttribute("id", "todo");
    const inprogressBox = document.createElement("div");
    inprogressBox.classList.add("card__wrapper-to768");
    inprogressBox.setAttribute("id", "inprogress");
    const completeBox = document.createElement("div");
    completeBox.classList.add("card__wrapper-to768");
    completeBox.setAttribute("id", "complete");

    let todoCount = 0;
    let inprogressCount = 0;
    let completeCount = 0;
    array.forEach((item) => {
      //create task's box
      const box = document.createElement("div");
      box.classList.add("card", "card__box");

      const statusWrapper = document.createElement("div");

      const cardStatus = document.createElement("div");
      statusWrapper.classList.add("status__wrapper");
      cardStatus.classList.add("card__status");
      statusWrapper.innerText = item.status;
      cardStatus.append(statusWrapper);

      const cardTitle = document.createElement("div");
      cardTitle.classList.add("card__title");
      cardTitle.innerText = item.name;

      const cardPriority = document.createElement("div");
      cardPriority.classList.add("card__priority");

      const priorityWrapper = document.createElement("div");
      priorityWrapper.classList.add("priority__wrapper");
      priorityWrapper.innerText = item.priority;
      cardPriority.append(priorityWrapper);

      const cardDescription = document.createElement("div");
      cardDescription.classList.add("card__description");
      cardDescription.innerText = item.description;

      const cardAssignee = document.createElement("div");
      cardAssignee.classList.add("card__assignee");
      cardAssignee.innerText = item.assignee;

      const cardDate = document.createElement("div");
      cardDate.classList.add("card__date");
      cardDate.innerText = `${item.createdAt.getFullYear()}-${
        item.createdAt.getMonth() + 1
      }-${item.createdAt.getDate()} ${item.createdAt
        .toLocaleTimeString()
        .slice(0, -3)}`;

      const cardComments = document.createElement("div");
      cardComments.classList.add("card__comments");
      cardComments.innerText = item.comments.length;

      const comments = document.createElement("span");
      comments.classList.add("ico", "comments");
      cardComments.append(comments);

      const cardPrivate = document.createElement("div");
      cardPrivate.classList.add("card__private");
      if (item.isPrivate) {
        cardPrivate.innerText = "Private";
      }

      const cardDeleteBtn = document.createElement("button");
      cardDeleteBtn.classList.add("card__delete-button");

      const deleteBtn = document.createElement("span");
      deleteBtn.classList.add("ico", "delete");
      cardDeleteBtn.append(deleteBtn);

      const cardEditBtn = document.createElement("button");
      cardEditBtn.classList.add("card__edit-button");
      cardEditBtn.innerText = "Edit";

      const editBtn = document.createElement("span");
      editBtn.classList.add("ico", "edit");
      cardEditBtn.append(editBtn);
      box.append(
        cardStatus,
        cardTitle,
        cardPriority,
        cardDescription,
        cardAssignee,
        cardDate,
        cardComments,
        cardPrivate,
        cardDeleteBtn,
        cardEditBtn
      );
      //if the user is not logged in
      if (collect.user == "") {
        cardEditBtn.style.display = "none";
        cardDeleteBtn.style.display = "none";
        headerButton.innerText = "Log in";
      }
      //access to edit and delete btn
      if (collect.user !== item.assignee) {
        cardEditBtn.style.opacity = "50%";
        cardDeleteBtn.style.opacity = "50%";
      }
      if (collect.user == "" && item.isPrivate) {
        box.style.display = "none";

        if (item.status === "To Do" && !item.isPrivate) {
          todoCount += 1;
        }
        if (item.status === "In progress" && !item.isPrivate) {
          inprogressCount += 1;
        }
        if (item.status === "Complete" && !item.isPrivate) {
          completeCount += 1;
        }
      } else if (item.status === "To Do") {
        todoCount += 1;
        todoBox.append(box);
      }
      if (item.status === "In progress") {
        inprogressCount += 1;
        inprogressBox.append(box);
      }
      if (item.status === "Complete") {
        completeCount += 1;
        completeBox.append(box);
      }
    });
    cardsCountTodo.innerText = todoCount;
    cardsCountInprogress.innerText = inprogressCount;
    cardsContainerComplete.innerText = completeCount;
    cardsContainerTodo.append(todoBox);
    cardsContainerInprogress.append(inprogressBox);
    cardsContainerComplete.append(completeBox);
  }
}
const taskFeedView = new TaskFeedView("cards__wrapper");
taskFeedView.display(collection);
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
      const option = document.createElement("option");
      option.value = item;
      option.innerText = item;
      select.append(option);
    });
  }
}

const filter = new FilterView("nameSelected");
filter.display(collection);


function getFeed(skip,top,filter){
  const collect=collection.getPage(skip,top,filter);
  taskFeedView.display(collect);
}
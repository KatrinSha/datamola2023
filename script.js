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
    comments: [],
  },
  {
    id: "2",
    name: "Переименовать константу DELAY_TIME ",
    description:
      "Необходимо переименовать константу с DELAY_TIME на DELAY_API_TIME",
    createdAt: new Date("2023-03-09T23:00:05"),
    assignee: "Иванов Иван",
    status: "Complete",
    priority: "High",
    isPrivate: false,
    comments: [
      {
        id: "912",
        text: "Будет сделано!",
        createdAt: new Date("2023-03-09T23:00:05"),
        author: "Иванов Иван",
      },
    ],
  },
  {
    id: "3",
    name: "Переименовать константу DELAY_TIME ",
    description:
      "Необходимо переименовать константу с DELAY_TIME на DELAY_API_TIME",
    createdAt: new Date("2022-12-25T23:55:30"),
    assignee: "Иванов Иван",
    status: "To Do",
    priority: "Medium",
    isPrivate: true,
    comments: [
      {
        id: "912",
        text: "Будет сделано!",
        createdAt: new Date("2023-03-09T23:00:05"),
        author: "Иванов Иван",
      },
    ],
  },
  {
    id: "4",
    name: "Переименовать константу DELAY_TIME ",
    description:
      "Необходимо переименовать константу с DELAY_TIME на DELAY_API_TIME",
    createdAt: new Date("2023-01-14T23:04:48"),
    assignee: "Иванов Иван",
    status: "Complete",
    priority: "Low",
    isPrivate: false,
    comments: [
      {
        id: "912",
        text: "Будет сделано!",
        createdAt: new Date("2023-03-09T23:00:05"),
        author: "Иванов Иван",
      },
    ],
  },/*
  {
    id: "5",
    name: "Переименовать константу DELAY_TIME ",
    description:
      "Необходимо переименовать константу с DELAY_TIME на DELAY_API_TIME",
    createdAt: new Date("2023-02-27T10:51:10"),
    assignee: "Иванов Иван",
    status: "To Do",
    priority: "Low",
    isPrivate: true,
    comments: [
      {
        id: "912",
        text: "Будет сделано!",
        createdAt: new Date("2023-03-09T23:00:05"),
        author: "Иванов Иван",
      },
    ],
  },
  {
    id: "6",
    name: "Переименовать константу DELAY_TIME ",
    description:
      "Необходимо переименовать константу с DELAY_TIME на DELAY_API_TIME",
    createdAt: new Date("2022-12-01T17:01:16"),
    assignee: "Иванов Иван",
    status: "Complete",
    priority: "High",
    isPrivate: false,
    comments: [
      {
        id: "912",
        text: "Будет сделано!",
        createdAt: new Date("2023-03-09T23:00:05"),
        author: "Иванов Иван",
      },
    ],
  },
  {
    id: "7",
    name: "Переименовать константу DELAY_TIME ",
    description:
      "Необходимо переименовать константу с DELAY_TIME на DELAY_API_TIME",
    createdAt: new Date("2022-12-08T00:44:07"),
    assignee: "Иванов Иван",
    status: "To Do",
    priority: "Low",
    isPrivate: false,
    comments: [
      {
        id: "912",
        text: "Будет сделано!",
        createdAt: new Date("2023-03-09T23:00:05"),
        author: "Иванов Иван",
      },
    ],
  },
  {
    id: "8",
    name: "Переименовать константу DELAY_TIME ",
    description:
      "Необходимо переименовать константу с DELAY_TIME на DELAY_API_TIME",
    createdAt: new Date("2022-12-29T21:18:05"),
    assignee: "Иванов Иван",
    status: "Complete",
    priority: "Low",
    isPrivate: true,
    comments: [
      {
        id: "912",
        text: "Будет сделано!",
        createdAt: new Date("2023-03-09T23:00:05"),
        author: "Иванов Иван",
      },
    ],
  },
  {
    id: "9",
    name: "Переименовать константу DELAY_TIME ",
    description:
      "Необходимо переименовать константу с DELAY_TIME на DELAY_API_TIME",
    createdAt: new Date("2023-02-21T07:17:55"),
    assignee: "Иванов Иван",
    status: "To Do",
    priority: "High",
    isPrivate: false,
    comments: [
      {
        id: "912",
        text: "Будет сделано!",
        createdAt: new Date("2023-03-09T23:00:05"),
        author: "Иванов Иван",
      },
    ],
  },
  {
    id: "10",
    name: "Переименовать константу DELAY_TIME ",
    description:
      "Необходимо переименовать константу с DELAY_TIME на DELAY_API_TIME",
    createdAt: new Date("2023-02-06T21:15:16"),
    assignee: "Иванов Иван",
    status: "To Do",
    priority: "High",
    isPrivate: false,
    comments: [
      {
        id: "912",
        text: "Будет сделано!",
        createdAt: new Date("2023-03-09T23:00:05"),
        author: "Иванов Иван",
      },
    ],
  },
  {
    id: "11",
    name: "Переименовать константу DELAY_TIME ",
    description:
      "Необходимо переименовать константу с DELAY_TIME на DELAY_API_TIME",
    createdAt: new Date("2023-01-25T03:12:33"),
    assignee: "Иванов Иван",
    status: "In progress",
    priority: "Medium",
    isPrivate: false,
    comments: [
      {
        id: "912",
        text: "Будет сделано!",
        createdAt: new Date("2023-03-09T23:00:05"),
        author: "Иванов Иван",
      },
    ],
  },
  {
    id: "12",
    name: "Переименовать константу DELAY_TIME ",
    description:
      "Необходимо переименовать константу с DELAY_TIME на DELAY_API_TIME",
    createdAt: new Date("2023-02-06T21:15:16"),
    assignee: "Иванов Иван",
    status: "Complete",
    priority: "Low",
    isPrivate: false,
    comments: [
      {
        id: "912",
        text: "Будет сделано!",
        createdAt: new Date("2023-03-09T23:00:05"),
        author: "Иванов Иван",
      },
    ],
  },
  {
    id: "13",
    name: "Переименовать константу DELAY_TIME ",
    description:
      "Необходимо переименовать константу с DELAY_TIME на DELAY_API_TIME",
    createdAt: new Date("2023-01-30T13:18:32"),
    assignee: "Иванов Иван",
    status: "To Do",
    priority: "High",
    isPrivate: false,
    comments: [
      {
        id: "912",
        text: "Будет сделано!",
        createdAt: new Date("2023-03-09T23:00:05"),
        author: "Иванов Иван",
      },
    ],
  },
  {
    id: "14",
    name: "Переименовать константу DELAY_TIME ",
    description:
      "Необходимо переименовать константу с DELAY_TIME на DELAY_API_TIME",
    createdAt: new Date("2023-01-05T05:06:34"),
    assignee: "Иванов Иван",
    status: "In progress",
    priority: "Medium",
    isPrivate: false,
    comments: [
      {
        id: "912",
        text: "Будет сделано!",
        createdAt: new Date("2023-03-09T23:00:05"),
        author: "Иванов Иван",
      },
    ],
  },
  {
    id: "15",
    name: "Переименовать константу DELAY_TIME ",
    description:
      "Необходимо переименовать константу с DELAY_TIME на DELAY_API_TIME",
    createdAt: new Date("2023-01-05T05:08:34"),
    assignee: "Иванов Иван",
    status: "Complete",
    priority: "Low",
    isPrivate: false,
    comments: [
      {
        id: "912",
        text: "Будет сделано!",
        createdAt: new Date("2023-03-09T23:00:05"),
        author: "Иванов Иван",
      },
    ],
  },
  {
    id: "16",
    name: "Переименовать константу DELAY_TIME ",
    description:
      "Необходимо переименовать константу с DELAY_TIME на DELAY_API_TIME",
    createdAt: new Date("2022-12-10T15:33:23"),
    assignee: "Иванов Иван",
    status: "High",
    priority: "Medium",
    isPrivate: false,
    comments: [
      {
        id: "912",
        text: "Будет сделано!",
        createdAt: new Date("2023-03-09T23:00:05"),
        author: "Иванов Иван",
      },
    ],
  },
  {
    id: "17",
    name: "Переименовать константу DELAY_TIME ",
    description:
      "Необходимо переименовать константу с DELAY_TIME на DELAY_API_TIME",
    createdAt: new Date("2022-12-17T05:46:49"),
    assignee: "Иванов Иван",
    status: "In progress",
    priority: "Medium",
    isPrivate: false,
    comments: [
      {
        id: "912",
        text: "Будет сделано!",
        createdAt: new Date("2023-03-09T23:00:05"),
        author: "Иванов Иван",
      },
    ],
  },
  {
    id: "18",
    name: "Переименовать константу DELAY_TIME ",
    description:
      "Необходимо переименовать константу с DELAY_TIME на DELAY_API_TIME",
    createdAt: new Date("2023-02-25T21:09:34"),
    assignee: "Иванов Иван",
    status: "To Do",
    priority: "Low",
    isPrivate: true,
    comments: [
      {
        id: "912",
        text: "Будет сделано!",
        createdAt: new Date("2023-03-09T23:00:05"),
        author: "Иванов Иван",
      },
    ],
  },
  {
    id: "19",
    name: "Переименовать константу DELAY_TIME ",
    description:
      "Необходимо переименовать константу с DELAY_TIME на DELAY_API_TIME",
    createdAt: new Date("2022-12-03T01:52:57"),
    assignee: "Иванов Иван",
    status: "Complete",
    priority: "High",
    isPrivate: false,
    comments: [
      {
        id: "912",
        text: "Будет сделано!",
        createdAt: new Date("2023-03-09T23:00:05"),
        author: "Иванов Иван",
      },
    ],
  },
  {
    id: "20",
    name: "Переименовать константу DELAY_TIME ",
    description:
      "Необходимо переименовать константу с DELAY_TIME на DELAY_API_TIME",
    createdAt: new Date("2023-01-31T01:58:39"),
    assignee: "Иванов Иван",
    status: "In progress",
    priority: "Medium",
    isPrivate: false,
    comments: [
      {
        id: "912",
        text: "Будет сделано!",
        createdAt: new Date("2023-03-09T23:00:05"),
        author: "Иванов Иван",
      },
    ],
  },
  {
    id: "21",
    name: "Переименовать константу DELAY_TIME ",
    description:
      "Необходимо переименовать константу с DELAY_TIME на DELAY_API_TIME",
    createdAt: new Date("2022-12-28T17:44:31"),
    assignee: "Иванов Иван",
    status: "Complete",
    priority: "Low",
    isPrivate: false,
    comments: [
      {
        id: "912",
        text: "Будет сделано!",
        createdAt: new Date("2023-03-09T23:00:05"),
        author: "Иванов Иван",
      },
    ],
  },
  {
    id: "22",
    name: "Переименовать константу DELAY_TIME ",
    description:
      "Необходимо переименовать константу с DELAY_TIME на DELAY_API_TIME",
    createdAt: new Date("2022-12-27T10:14:49"),
    assignee: "Иванов Иван",
    status: "To Do",
    priority: "High",
    isPrivate: true,
    comments: [
      {
        id: "912",
        text: "Будет сделано!",
        createdAt: new Date("2023-03-09T23:00:05"),
        author: "Иванов Иван",
      },
    ],
  },
  {
    id: "23",
    name: "Переименовать константу DELAY_TIME ",
    description:
      "Необходимо переименовать константу с DELAY_TIME на DELAY_API_TIME",
    createdAt: new Date("2022-12-07T22:38:10"),
    assignee: "Иванов Иван",
    status: "In progress",
    priority: "Medium",
    isPrivate: false,
    comments: [
      {
        id: "912",
        text: "Будет сделано!",
        createdAt: new Date("2023-03-09T23:00:05"),
        author: "Иванов Иван",
      },
    ],
  },
  {
    id: "24",
    name: "Переименовать константу DELAY_TIME ",
    description:
      "Необходимо переименовать константу с DELAY_TIME на DELAY_API_TIME",
    createdAt: new Date("2022-12-13T07:41:45"),
    assignee: "Иванов Иван",
    status: "Complete",
    priority: "Low",
    isPrivate: false,
    comments: [
      {
        id: "912",
        text: "Будет сделано!",
        createdAt: new Date("2023-03-09T23:00:05"),
        author: "Иванов Иван",
      },
    ],
  },
  {
    id: "25",
    name: "Переименовать константу DELAY_TIME ",
    description:
      "Необходимо переименовать константу с DELAY_TIME на DELAY_API_TIME",
    createdAt: new Date("2023-01-25T00:35:07"),
    assignee: "Иванов Иван",
    status: "To Do",
    priority: "High",
    isPrivate: false,
    comments: [
      {
        id: "912",
        text: "Будет сделано!",
        createdAt: new Date("2023-03-09T23:00:05"),
        author: "Иванов Иван",
      },
    ],
  },
  {
    id: "26",
    name: "Переименовать константу DELAY_TIME ",
    description:
      "Необходимо переименовать константу с DELAY_TIME на DELAY_API_TIME",
    createdAt: new Date("2022-12-17T17:13:36"),
    assignee: "Иванов Иван",
    status: "In progress",
    priority: "Medium",
    isPrivate: false,
    comments: [
      {
        id: "912",
        text: "Будет сделано!",
        createdAt: new Date("2023-03-09T23:00:05"),
        author: "Иванов Иван",
      },
    ],
  },
  {
    id: "27",
    name: "Переименовать константу DELAY_TIME ",
    description:
      "Необходимо переименовать константу с DELAY_TIME на DELAY_API_TIME",
    createdAt: new Date("2023-01-06T02:27:11"),
    assignee: "Иванов Иван",
    status: "Complete",
    priority: "Medium",
    isPrivate: false,
    comments: [
      {
        id: "912",
        text: "Будет сделано!",
        createdAt: new Date("2023-03-09T23:00:05"),
        author: "Иванов Иван",
      },
    ],
  },
  {
    id: "28",
    name: "Переименовать константу DELAY_TIME ",
    description:
      "Необходимо переименовать константу с DELAY_TIME на DELAY_API_TIME",
    createdAt: new Date("2022-12-31T16:01:50"),
    assignee: "Иванов Иван",
    status: "To Do",
    priority: "High",
    isPrivate: false,
    comments: [
      {
        id: "912",
        text: "Будет сделано!",
        createdAt: new Date("2023-03-09T23:00:05"),
        author: "Иванов Иван",
      },
    ],
  },
  {
    id: "29",
    name: "Переименовать константу DELAY_TIME ",
    description:
      "Необходимо переименовать константу с DELAY_TIME на DELAY_API_TIME",
    createdAt: new Date("2022-12-14T13:04:57"),
    assignee: "Иванов Иван",
    status: "In progress",
    priority: "Medium",
    isPrivate: false,
    comments: [
      {
        id: "912",
        text: "Будет сделано!",
        createdAt: new Date("2023-03-09T23:00:05"),
        author: "Иванов Иван",
      },
    ],
  },
  {
    id: "30",
    name: "Переименовать константу DELAY_TIME ",
    description:
      "Необходимо переименовать константу с DELAY_TIME на DELAY_API_TIME",
    createdAt: new Date("2023-02-04T01:36:16"),
    assignee: "Иванов Иван",
    status: "To Do",
    priority: "Low",
    isPrivate: true,
    comments: [
      {
        id: "912",
        text: "Будет сделано!",
        createdAt: new Date("2023-03-09T23:00:05"),
        author: "Иванов Иван",
      },
    ],
  },
  {
    id: "31",
    name: "Переименовать константу DELAY_TIME ",
    description:
      "Необходимо переименовать константу с DELAY_TIME на DELAY_API_TIME",
    createdAt: new Date("2022-12-04T23:12:24"),
    assignee: "Иванов Иван",
    status: "In progress",
    priority: "Medium",
    isPrivate: false,
    comments: [
      {
        id: "912",
        text: "Будет сделано!",
        createdAt: new Date("2023-03-09T23:00:05"),
        author: "Иванов Иван",
      },
    ],
  },*/
];

let neName = "holly";

const myModule = (function (usernane) {
  let user = "Kat";
  const module = {};

  module.getTask = function (skip = 0, top = 10, filterConfig = {}) {
    arr.sort((prev, next) => prev. createdAt - next. createdAt);
  };

  module.setName = function (username) {
    user = username;
    console.log(user);
  };

  return module;
})();

myModule.getTask();

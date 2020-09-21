import { defineMessages } from "react-intl";

const base = "pages.home";

export default defineMessages({
    welcome: {
        id: `${base}.welcome`,
        defaultMessage: "Welcome to React Wahio",
    },
    appDescription: {
        id: `${base}.appDescription`,
        defaultMessage:
            "This is a React application that uses 100% hooks, and replaces Redux, Redux-saga, and Redux-persist using only React Context. It also uses Styled-components and supports i18n internationalization with message extractor.",
    },
    moreInfo: {
        id: `${base}.moreInfo`,
        defaultMessage: "For more information, see README.md",
    },
    taskTitle: {
        id: `${base}.taskTitle`,
        defaultMessage: "Tasks",
    },
    taskSubtitle: {
        id: `${base}.tasksSubtitle`,
        defaultMessage: "Create, edit and delete tasks, your tasks will be kept in memory, even if you refresh the browser.",
    },
    noTasksFound: {
        id: `${base}.noTasksFound`,
        defaultMessage: "No tasks found",
    },
    completed: {
        id: `${base}.completed`,
        defaultMessage: "Completed",
    },
});

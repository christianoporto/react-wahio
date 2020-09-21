import React, { useContext } from "react";
import TodoCard from "../../components/TodoCard";
import CreateTodo from "../../components/CreateTodo";
import { TodoContext } from "../../store/contexts/TodoContext";
import { MainContainer, TitleTask } from "./styled";
import { FormattedMessage } from "react-intl";
import messages from "./messages";

export default function Home() {
    const { todoState } = useContext(TodoContext);

    const pendingTasks = todoState.todos.filter((x) => !x.completed);
    const completedTasks = todoState.todos.filter((x) => x.completed);

    return (
        <MainContainer>
            <TitleTask>
                <FormattedMessage {...messages.welcome} />
            </TitleTask>
            <p>
                <FormattedMessage {...messages.appDescription} />
                <br />
                <span className="subtitle">
                    <FormattedMessage {...messages.moreInfo} />
                </span>
            </p>
            <br />
            <hr />
            <TitleTask>
                <FormattedMessage {...messages.taskTitle} />
            </TitleTask>
            <span className="subtitle">
                <FormattedMessage {...messages.taskSubtitle} />
            </span>
            <div>
                <CreateTodo />
            </div>
            {todoState.todos.length === 0 && (
                <div>
                    <h4 className="empty-task">
                        <FormattedMessage {...messages.noTasksFound} />
                    </h4>
                </div>
            )}
            <div>
                {pendingTasks.map((todo, key) => (
                    <TodoCard key={todo.id} todo={todo} />
                ))}
                {completedTasks.length > 0 && (
                    <>
                        <h4>
                            <FormattedMessage {...messages.completed} />
                        </h4>
                        {completedTasks.map((todo, key) => (
                            <TodoCard key={todo.id} todo={todo} />
                        ))}
                    </>
                )}
            </div>
        </MainContainer>
    );
}

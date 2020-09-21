import React, { useContext, useState } from "react";
import { ButtomComplete, TodoContainer, ButtonsContainer, TodoBody, InputTitle, EditTitle } from "./styled";
import CheckedIcon from "../../assets/images/checked.png";
import { FormattedMessage } from "react-intl";
import messages from "./messages";
import { ITodo } from "../../store/types/todo";
import { DeleteIcon, EditIcon } from "../../assets/icons";
import { TodoContext } from "../../store/contexts/TodoContext";
import moment from "moment";
import { AppSettingsContext } from "../../appSettings/AppSettingsContext";

interface IProps {
    todo: ITodo;
}

export default function TodoCard({ todo }: IProps) {
    const { todoActions } = useContext(TodoContext);
    const { appSettingsState } = useContext(AppSettingsContext);
    const [editMode, setEditMode] = useState(false);

    const [editValue, setEditValue] = useState(todo.title);

    const activeEditMode = () => {
        setEditMode(true);
        const element = document.getElementById(todo.id);
        element?.focus();
    };
    const onBlurEdit = () => {
        setEditMode(false);
        if (editValue.length === 0) {
            setEditValue(todo.title);
        } else todoActions.updateTodo({ ...todo, title: editValue });
    };
    const deleteTodo = () => {
        todoActions.deleteTodo(todo.id);
    };
    const onChangeStatus = () => {
        todoActions.updateTodo({ ...todo, completed: !todo.completed });
    };

    return (
        <TodoContainer editMode={editMode}>
            <div>
                {editMode && (
                    <EditTitle>
                        <FormattedMessage {...messages.edit} />
                    </EditTitle>
                )}
                {!editMode && (
                    <ButtomComplete active={todo.completed} onClick={onChangeStatus}>
                        {todo.completed && <img src={CheckedIcon} alt="checked" />}
                    </ButtomComplete>
                )}
            </div>
            <TodoBody active={todo.completed}>
                <InputTitle
                    onBlur={onBlurEdit}
                    onClick={activeEditMode}
                    id={todo.id}
                    disabled={todo.completed}
                    active={editMode}
                    type="text"
                    value={editValue}
                    onChange={(e: any) => setEditValue(e.target.value)}
                />
                {!editMode && (
                    <span key={appSettingsState.language} className="date">
                        {moment(todo.dateCreated).fromNow()}
                    </span>
                )}
            </TodoBody>

            <ButtonsContainer>
                {!todo.completed && !editMode && (
                    <button onClick={activeEditMode} className="edit actions">
                        <EditIcon />
                    </button>
                )}
                <button className="delete actions" onClick={deleteTodo}>
                    <DeleteIcon />
                </button>
            </ButtonsContainer>
        </TodoContainer>
    );
}

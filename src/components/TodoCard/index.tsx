import React, { useState } from "react";
import { ButtomComplete, TodoContainer, DeleteContainer, TodoBody } from "./styled";
import CheckedIcon from "../../images/checked.png";
import { FormattedMessage } from "react-intl";
import messages from "./messages";
import { ITodo } from "../../store/types/todo";

interface IProps {
    todo: ITodo;
}

export default function TodoCard({ todo }: IProps) {
    const [complete, setComplete] = useState(false);

    return (
        <TodoContainer>
            <div>
                <ButtomComplete active={complete} onClick={() => setComplete(!complete)}>
                    {complete && <img src={CheckedIcon} alt="checked" />}
                </ButtomComplete>
            </div>
            <TodoBody active={complete}>
                <span className="title">{todo.title}</span>
                <span className="date">{todo.dateCreated.toString()}</span>
            </TodoBody>
            <DeleteContainer>
                <button>
                    Editar
                </button>
                <button>
                    <FormattedMessage {...messages.delete} />
                </button>
            </DeleteContainer>
        </TodoContainer>
    );
}

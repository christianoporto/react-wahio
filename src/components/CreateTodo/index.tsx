import React, { useContext,  useState } from "react";
import { TodoContext } from "../../store/contexts/TodoContext";
import { CustomInput, Container, ButtonAdd } from "./styled";
import { v4 as uuidv4 } from "uuid";
import { ITodo } from "../../store/types/todo";
import { FormattedMessage, useIntl } from "react-intl";
import messages from "./messages";

export default function CreateTodo() {
    const { todoActions } = useContext(TodoContext);
    const intl = useIntl();
    const [focus, setFocus] = useState(false);
    const [value, setValue] = useState("");

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    };

    const onCreateTask = () => {
        setFocus(false);
        if (value.length === 0) return;
        const newTodo: ITodo = {
            id: uuidv4(),
            title: value,
            completed: false,
            dateCreated: new Date(),
        };
        todoActions.addTodo(newTodo);
        setValue("");
    };

    return (
        <Container focus={focus}>
            <CustomInput
                id="createtask"
                value={value}
                onChange={onChange}
                onBlur={onCreateTask}
                onFocus={() => setFocus(true)}
                type="text"
                placeholder={intl.formatMessage(messages.addTask)}
            />
            {focus && value.length > 0 && (
                <ButtonAdd id="addtask">
                    <FormattedMessage {...messages.add} />
                </ButtonAdd>
            )}
        </Container>
    );
}

import React, { useContext } from "react";
import TodoCard from "../../components/TodoCard";
import { TodoContext } from "../../store/contexts/TodoContext";
import { MainContainer } from "./styled";

export default function Home() {
    const { todoState } = useContext(TodoContext);
    return (
        <MainContainer>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, maiores. Molestiae expedita aut facilis, earum error
                perspiciatis. Expedita, facilis natus optio, doloribus eum, ullam iste sunt omnis doloremque harum numquam!
            </p>

            <div>
                {todoState.todos.map((todo, key) => (
                    <TodoCard key={key} todo={todo} />
                ))}
            </div>
        </MainContainer>
    );
}

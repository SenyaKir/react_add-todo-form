import { Todo } from '../../App';
import { TodoInfo } from '../TodoInfo';

type Props = {
  todos: Todo[];
};

export const TodoList = ({ todos }: Props) => {
  return <TodoInfo todos={todos} />;
};

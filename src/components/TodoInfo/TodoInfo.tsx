import cn from 'classnames';

import { Todo } from '../../App';
import { UserInfo } from '../UserInfo';

type Props = {
  todos: Todo[];
};

export const TodoInfo = ({ todos =[] }: Props) => {
  return (
    <section className="TodoList">
      {todos.map(todo => (
        <article
          key={todo.id}
          data-id={todo.id}
          className={cn('TodoInfo', { 'TodoInfo--completed': todo.completed })}
        >
          <h2 className="TodoInfo__title">{todo.title}</h2>

          {todo.user && <UserInfo user={todo.user} />}
        </article>
      ))}
    </section>
  );
};

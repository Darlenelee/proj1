import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Todo } from './todo.model';

export class InMemoryTodoDbService implements InMemoryDbService {
  createDb() {
    const todos: Todo[] = [
      {id: '67c16601-1e7b-bb7f-2791-0ff6322d740f', desc: 'Getting up', completed: true},
      {id: '7fa6b4af-d55f-2b94-3620-fcdb0ff338be', desc: 'Go to school', completed: false}
    ];
    return {todos};  // equals to return {todos: todos}
  }
}

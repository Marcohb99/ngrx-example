# NgrxTutorial
This is a simple project to create a task list with NgRx following
[this video](https://www.youtube.com/watch?v=HqxY0JPlh54).

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.2.8.

## How the store works

Brief explanation of each CRUD's operation process:

### Create

1. The user enters the title and presses enter.
2. The component calls the store's ``addTodo`` method.
3. The store:
   1. Calls the services ``addTodo`` method, which creates a new Todo instance.
   2. Updates the state adding the new Todo.

### Retrieve (List and filter)

For list:

### Retrieve (List and filter)

1. When the application is loaded, the app component calls the store's ``loadAll`` method.
2. The store:
   1. Sets the state as loading.
   2. Calls the ``getTodos`` method of the service.
   3. Sets the state as not loading.
3. Since the initial state's filter is ``"all"``, the ``filteredTodos`` signal is triggered,
and all todos are retrieved.
4. The filtered todos are loaded into the component's view.

For filter:

1. The user clicks one of the provided filter to filter the tasks by status.
2. When the filter is changed, the component calls the store's ``updateFilter`` method.
3. The store just updates the state with the new value.
   - This triggers the computed signal ``filteredTodos`` and updates the store's todo list with the proper todos.
4. This also trigger the ``effect`` declared in the component's constructor.

### Update

1. The user marks the task as completed (or pending) by clicking the item.
2. The component calls the store's ``updateTodo`` method.
3. The store:
   1. Calls the services ``updateTodo``.
      - In this case, this method does nothing, but this would be the place to call the backend.
   2. Updates the state, marking the todo in its list that has the provided id as completed (or not).

### Delete

1. The user click the bin icon in the task list.
2. The component calls the store's ``deleteTodo`` method.
3. The store:
   1. Calls the service's ``deleteTodo`` method.
      - In this case, this method does nothing, but this would be the place to call the backend.
   2. Updates the state and now the list is the previous one except the one with the provided id which is filtered out.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

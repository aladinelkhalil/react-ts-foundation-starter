# Exercise: react-testing-library
This exercise introduces the react-testing-library (also part of Create React App) and how to use it for unit testing components.

## Forms
In the `todo` example, create a folder `__tests__` and add a test file `TodoForm.spec.js`, which will be used to test the TodoForm component.

Import the following:

```javascript
import {
  render,
  screen,
  fireEvent 
} from '@testing-library/react';

import userEvent from '@testing-library/user-event';
```

> The `fireEvent` import will be explained below.

Create and run the following (separate) tests:

1.  TodoForm initially renders with an empty title.

    To figure out what query to use for getting the input (for checking its value), try both of the following options: 
    
    *   On the [Which query should I use?](https://testing-library.com/docs/guide-which-query/) page, see if there is any recommended query for the input (hint: could the _placeholder_ text be of use?).
    
    *   Add a `screen.debug()` call after the render. Copy the resulting markup into the [Testing playground](https://testing-playground.com/) and see what it recommends.

2.  Simulate entering a title and submitting the form.

    This part involves several steps:

    *   To successfully submit a form, a prop (callback) `createTodo` must be passed to the TodoForm. Create and pass a mock callback that can be used later to assert the test:

        ```javascript
        const createTodo = jest.fn();
        ```

    *   Get the input element and simulate entering a text. This can be done as follows:
    
        ```javascript
        userEvent.type(input, 'foo')
        ```

        Assert that the input element has the corresponding value set after this has run.

    *   Submit the form and assert that 1) the input element has been reset to an empty title, and 2) the mock callback has been called _exactly_ once with title.

        > Note 1: `fireEvent.submit` must used instead of `userEvent`, as the latter does not support submitting.

        > Note 2: Getting the form is a bit tricky; for the purposes of this example, consider adding a `data-testid="todo-form"` attribute to the form element, and query it with `getByTestId`.

3. (Optional) Submit a form with an empty title.

    Try submitting the form when no title has been entered. Assert the expected results.
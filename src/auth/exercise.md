# Exercise: auth

In this exercise you will utilize React Context to share global state among many components and add routing to navigate between different views in your application.

## Part 1 - Routing

The application has a link to navigate to a page component ("view") - `pages/Users` - to display a list of users.

1. Set up a route to navigate to the `/users` route. Follow the example of the `/login` route.

2. If the user tries to navigate to a route that does not exist, it's important to catch it and inform the user.

   Add a catch-all route; see the [documentation](https://reactrouter.com/docs/en/v6/getting-started/tutorial#adding-a-no-match-route) for more information. Use the `components/NotFound` component.

   Try a path such as _http://localhost:3000/foo_ to verify that the catch-all route works.

## Part 2 - App Context

As part of the application requirements, the /users route must be protected, i.e. an user must be logged in to see the list of users.

The state of a logged in user must be shared among several components in the component tree, including:

- The `components/RouteGuard` component, which determines whether or not a route should be rendered based on authentication status.

- The `pages/Login` view, which enables a user to log in.

- The `components/Navigation` component, which renders a logout button only if the user is logged in.

As such, authentication state is best placed in a context that the application is rendered with.

> Refer to the `dependencyContext` example for guidance when implementing the steps below.

1. In the `AppProvider.tsx` file:

- Create an `AppContext`.

- Create an `AppProvider` component which handles the auth logic, see below for the code it should contain.

  ```typescript
  const [user, setUser] = useState<string | null>(null);
  const [loginError, setLoginError] = useState<boolean>(false);

  const login = async (credential: string): Promise<void> => {
  	if (credential === "admin") {
  		setUser(credential);
  		setLoginError(false);
  	} else {
  		setLoginError(true);
  	}
  };

  const logout = (): void => {
  	setUser(null);
  };

  // Render AppContext.Provider with these two state variables and methods as the context value. Don't forget to type everything up.
  ```

- Return the context from the `useAppContext` helper hook which you will figure out yourself how to create.

2. Render the AppProvider component as the top-level component in _index.tsx_.

To verify that the application context is working, do the following:

- Wrapp the Users component with the `RouteGuard` component in the element-prop of the Route that handles the path "users".

- Navigate to the /users route; it should redirect to the Login view.

If you inspect the RouteGuard component, you'll see that it accesses the authentication state to determine whether or not to render a guarded route. As the user has not logged in (and as we haven't implemented login functionality yet), it redirects to the Login view.

## Optional

_No solution exists for this optional_

Now the _Users_ component renders a _User_ whenever we click on a name in the users-list. A different approach can be made here. _User_ is already its own component, the thing we could do is to give it its own route aswell, much like _Login_ and _Users_ already have. The challenge here is to render the same _User_ component but with different props depending on the name we click on. We need a couple of things in order to achieve this.

- First we need to lift up the state of the _Users_ component (_i.e. the users-list_) to the context in order for _User_ component to access it. Make sure that the context also shares that state with the rest of the application.

- Secondly, create a new route for the _User_ component. Check out the [docs](https://reactrouter.com/docs/en/v6/getting-started/overview#reading-url-parameters) for route parameters (_URL-parameters_), and how to access those parameters from within the components.

- Thirdly, when everything is set up it's time for the _User_ component to make sure that it displays the correct data depending on which name we clicked on in the _Users_ component. `Hint`: it involves using the **array.find()** method and the **useParams()** hook.

- Finally, add a back button so it's easy to get back to the _Users_ list.

## Part 3 - Authentication

The `pages/Login` component renders a view for authenticating a user, using the global state available via the application context.

Implement the comments marked with _TODO_.

> Note that authentication state is not saved between sessions; simply reload the page to reset the state.

### Logout

To allow the user to logout, implement the comments marked with _TODO_ in the `components/Navigation` component.

## Optional Parts

Description of optional parts to this exercise. _No solution exists for this part._

### Loading Data with 3rd Party Library

If you try to navigate to the /users route and then _quickly_ navigate back to home, you'll notice the following error in the console:

`Warning: Can't perform a React state update on an unmounted component. This is a no-op, but it indicates a memory leak in your application. To fix, cancel all subscriptions and asynchronous tasks in a useEffect cleanup function.`

This happens because the code in useEffect, once data has been fetched, tries to update state, even though the component has already been unmounted (which occurred when you quickly navigated back to home).

This problem can be solved in a couple of ways ([here](https://www.debuggr.io/react-update-unmounted-component/) is one solution) but along with using the useState and useEffect hooks, it all gets a bit cumbersome. Notice also that the users data is not cached but loaded everytime you navigate to the Users view.

For these and other reasons, it's recommended to use a robust 3rd party library for efficient data fetching. There are several libraries available, such as [SWR](https://swr.vercel.app/) and [react-query](https://react-query.tanstack.com/).

For our purposes, **react-query** is an excellent choice: follow the [documentation](https://react-query.tanstack.com/overview) and refactor the data fetching code in the Users page component accordingly.

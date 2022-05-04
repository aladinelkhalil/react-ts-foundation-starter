# Exercise: feed

In this exercise you will implement a number of component to render a simple "feed".

## Part 0.5 - Typescript interfaces and types

Create an **interface.ts** in the src folder. Place most of your different interfaces in this files so you have an easy acces point to the interfaces that you will use throughout this course. An interface can look like this:

```javascript
export interface ISomeInterface {
	name: string;
	isShiny: boolean;
	age: number;
}
```

The export keyword is needed if you want to import the interface to your other files. I would also suggest that you prefix all your interfaces with a captial **I**. It's a pattern that is standard in C# and makes it easy to distinguish between variables and interfaces.

My suggestion is that you keep all interfaces that are used in multiple files in the **interface.ts** file. Interfaces that are created for props (or will only be used in its specific file) should be kept in their respective file since they are only going to be used there.

If you find a use case for a _type_, e.g.:

```typescript
const type specialId = number | string;

// or

const type someVariableFunction = (someString: string) => void;
```

Create a _types.ts_ and place it next to the _interface.ts_ file in the root folder.

## Part 1 - Feed components

Implement the components listed below.

- `index.tsx`

  Should render a _CardList_ component, passing a list of items as a prop.

- `CardList.tsx`

  Should accept a list of items as a prop and render corresponding _Card_ components. Don't forget to type up the props, and correct return value on the component itself.

  Ensure that the list is rendered without any warnings! [Read about rendering lists](https://reactjs.org/docs/lists-and-keys.html), up to the section named _Keys_.

  > Hint: Use the array index of an item as the value for the _key_ prop.

- `Card.tsx`

  Return the following markup from the _Card_ component:

  ```html
  <div className="card card-medium">
  	<p className="card-title">{title.toUpperCase()}</p>
  	<div><img className="card-image" src="{image}" alt="" /></div>
  </div>
  ```

  This component renders the _title_ prop with uppercase letters. Don't forget to create the interface for the props.

  > Note that CSS classes are added to an element using the attribute _className_ instead of _class_.

- OPTIONAL:

  Currently, a _Card_ is rendered with a default width of 350px (see the CSS class _card-medium_ in `style.css`).

  Make the _Card_ component more flexible by passing an additional _size_ prop (should be optional) with one of the following (string) values: **small**, **medium** and **large**.

  The component should **not** contain logic for determining the actual width values, these are set in the CSS file. The component should combine the _size_ prop with the CSS classes contained in `style.css` in a generic fashion.

  If the _size_ prop is not provided the component should default to **medium**.

# Part 2 - Error handling

Create an _ErrorBoundary_ component with the following implementation, in a file named `ErrorBoundary.tsx`:

```javascript
import React, { Component, ReactNode } from "react";

interface IProps {
	children: ReactNode;
}

interface IState {
	hasError: boolean;
}

class ErrorBoundary extends Component<IProps, IState> {
	state: IState = { hasError: false };

	static getDerivedStateFromError(_: Error): IState {
		return { hasError: true };
	}

	render() {
		// TODO: Check if error has been caught, and render a fallback UI.
		return this.props.children;
	}
}

export default ErrorBoundary;
```

1. In _CardList_, wrap the rendering of items in an error boundary. Also add logic in the ErrorBoundary component for checking if an error has been caught and if so, render the following fallback UI:

```html
<p>An error occurred while rendering the feed</p>
```

2. A React application should strive for maximum _fault tolerance_, i.e. to continue function even if errors occur. In our case, if rendering a single feed item throws an error, the other feed items should still be displayed, while rendering a fallback _Card_ for the faulty feed item.

Change _CardList_ to wrap each _Card_ in an error boundary instead. In the _ErrorBoundary_ component, render the following fallback UI:

```javascript
<Card
	title="Oops, an error occurred"
	image="https://cdn.dribbble.com/users/1078347/screenshots/2799566/oops.png"
/>
```

### Render Props

(_This code pattern is just one way to solve the reusability of the ErrorBoundary, you can also use custom hooks or just regular props that the ErrorBoundary can accept_)

Currently, the _ErrorBoundary_ component contains logic for rendering specific fallbacks related to feed items and _Card_ components; this makes _ErrorBoundary_ less reusable in other contexts.

In order to build a reusable _ErrorBoundary_ component, the logic for rendering a fallback UI must be **externalized**. Imagine if _ErrorBoundary_ were to be used as follows:

```javascript
<ErrorBoundary>
	{(error) => {
		if (error) {
			return "An error occurred while trying to render SomeComponent";
		}

		return <SomeComponent />;
	}}
</ErrorBoundary>
```

Notice that we're passing a _function_ as the value for the `children` prop; this is an example of the [Render Props patterns](https://reactjs.org/docs/render-props.html) and helps us to share logic across components.

Change _ErrorBoundary_ to support the Render Props pattern, and change _CardList_ from step 2 accordingly.

### Optional
_No solution exists for this optional_

Currently, if a component throws an error while rendering, _ErrorBoundary_ does not allow for retrying rendering the component.

E.g., if a _CardList_ is passed a list of items which is `null` or `undefined`, it will throw an error. Handle this error as follows:

1. Add a (top-level) error boundary which wraps the rendering of _CardList_ in the _App_ component.

2. In _ErrorBoundary_, add logic for "resetting" the error state in a `retry` method.

   > A method which updates (in this case, resets) the state in a class component typically looks as follows:
   >
   > ```javascript
   > retry = (): void => {
   > 	this.setState({
   > 		// ...
   > 	});
   > };
   > ```

3. Render a _Retry_ button (which calls the above `retry` method when clicked) if an error occurs while rendering _CardList_, to allow the user to retry rendering the feed if it fails.

In `App.tsx`, add the following function:

```typescript
const getItems = (): number | null => {
	return Math.random() > 0.5 ? items : null;
}
```

and render _CardList_ as follows:

```javascript
<CardList items={getItems()} />
```

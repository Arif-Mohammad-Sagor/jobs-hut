import React from 'react'

const Blog = () => {
  return (
    <div className="container flex flex-col mt-8">
      <div className="my-4 p-4 shadow-md bg-pink-200">
        <p className="font-semibold my-4">When should you use context API ?</p>
        <p>
          The Context API in React is a way to share state data across the
          component tree without the need to pass down props through multiple
          levels of components. It is a useful tool in certain situations, such
          as:
          <br />
          <br /> When multiple components in your application need to access the
          same data, but they are not directly related to each other in the
          component tree.
          <br /> When you want to avoid prop drilling, which occurs when you
          pass data down through multiple levels of components just to get it to
          the component that needs it.
          <br /> When you want to create a theme or a global state that can be
          accessed by all components in your application.
          <br /> When you want to create a provider/consumer pattern to share
          state between components.
          <br />
          <br /> In general, the Context API can be used to simplify data
          management and reduce the complexity of passing data between
          components. However, it should be used judiciously and only in
          situations where it makes sense to do so. If you have a small
          application with only a few components, the Context API may not be
          necessary.
        </p>
      </div>
      <div className="my-4 p-4 shadow-md bg-pink-200">
        <p className="font-semibold my-4">When should you use context API ?</p>
        <p>
          In React, a custom hook is a JavaScript function that uses one or more
          of the built-in React hooks (such as useState, useEffect, useContext,
          etc.) to encapsulate reusable stateful logic that can be shared across
          multiple components.
          <br />
          <br />
          Custom hooks allow you to extract common logic from your components
          and reuse it in a more organized and efficient way. They are called
          custom hooks because they are not built-in hooks provided by React,
          but rather custom-made hooks that are created by developers to
          encapsulate their own logic and functionality.
          <br />
          <br />
          Custom hooks allow you to reuse and share stateful logic across
          multiple components without having to repeat the same code in each
          component. They are a powerful tool for creating more maintainable and
          reusable code in your React applications.
        </p>
      </div>
      <div className="my-4 p-4 shadow-md bg-pink-200">
        <p className="font-semibold my-4">What is useRef?</p>
        <p>
          In React, useRef is a tool that allows you to create a reference to a
          specific element or value that persists across component renders. It's
          like giving a name to something that you can use to refer to it later.
          <br />
          <br />
          Sure, let me explain useRef in simpler terms. In React, useRef is a
          tool that allows you to create a reference to a specific element or
          value that persists across component renders. It's like giving a name
          to something that you can use to refer to it later. One common use
          case for useRef is to access and manipulate DOM elements. For example,
          you could use useRef to create a reference to an input field, and then
          use that reference to set the focus on that field when a button is
          clicked.
          <br />
          <br />
          useRef can also be used to store any value that needs to persist
          across multiple renders without causing the component to re-render
          unnecessarily. For example, you could use useRef to store a counter
          value that needs to persist across multiple renders without triggering
          a re-render.
          <br />
          <br />
          Overall, useRef is a simple tool that can make it easier to work with
          mutable values in your React components, without triggering
          unnecessary re-renders.
        </p>
      </div>
      <div className="my-4 p-4 shadow-md bg-pink-200">
        <p className="font-semibold my-4">What is useRef?</p>
        <p>
          n React, useMemo is a tool that helps you speed up your app by
          remembering the result of a function so you don't have to calculate it
          again. It works by caching the result of the function and only
          recalculating it if the inputs to the function change.
          <br />
          <br />
          For example, if you have a complex function that takes a long time to
          run, you can use useMemo to remember the result of the function so
          that you don't have to run it again and again every time your
          component re-renders. This can save you a lot of time and make your
          app faster.
          <br />
          <br />
          To use useMemo, you pass it a function and an array of dependencies.
          The function is the one you want to remember, and the dependencies are
          the values that the function depends on. If the dependencies don't
          change, useMemo returns the cached result of the function, otherwise
          it re-runs the function and returns the new result.
        </p>
      </div>
    </div>
  );
}

export default Blog
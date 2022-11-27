import React from "react";

const Blog = () => {
  return (
    <div className="px-4 pb-16 m-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
      <div className="text-center">
        <h1 className="text-center text-5xl font-bold text-red-600 mt-14 mb-3">
          Question and answer
        </h1>
        <img
          className="mx-auto mt-5 mb-10"
          src="https://i.ibb.co/Mp877Sg/separator-1.png"
          alt="separator-1"
        />
      </div>
      <div className="mt-6">
        <h4 className="text-xl">
          <span class="text-primary font-bold">Question-1:</span> What are the different
          ways to manage a state in a React application?
        </h4>
        <p>
          <span class="text-yellow-400 font-bold">Answer:- </span>
          There are two accepted models for state management: the front-end -- or
          client-side -- and back-end -- or server/application-side models. There are four
          main types of state you need to properly manage in your React apps: 1.Local
          state. 2.Global state. 3.Server state. 4.URL state.
        </p>
      </div>
      <div className="mt-4">
        <h4 className="text-xl">
          <span class="text-primary font-bold">Question-2:</span> How does prototypical
          inheritance work?
        </h4>
        <p>
          <span class="text-yellow-400 font-bold">Answer:- </span>
          The Prototypal Inheritance is a feature in javascript used to add methods and
          properties in objects. It is a method by which an object can inherit the
          properties and methods of another object. Traditionally, in order to get and set
          the [[Prototype]] of an object, we use Object. getPrototypeOf and Object.
        </p>
      </div>
      <div className="mt-4">
        <h4 className="text-xl">
          <span class="text-primary font-bold">Question-3:</span> What is a unit test? Why
          should we write unit tests?
        </h4>
        <p>
          <span class="text-yellow-400 font-bold">Answer:- </span>A unit test is of
          testing a unit - the smallest piece of code that can be logically isolated in a
          system. In most programming languages, that is a function, a subroutine, a
          method or property. The isolated part of the definition is important. The main
          objective of unit testing is to isolate written code to test and determine if it
          works as intended. Unit testing is an important step in the development process,
          because if done correctly, it can help detect early flaws in code which may be
          more difficult to find in later testing stages.
        </p>
      </div>
      <div className="mt-4">
        <h4 className="text-xl">
          <span class="text-primary font-bold">Question-4:</span> React vs. Angular vs. Vue?
        </h4>
        <p>
          <span class="text-yellow-400 font-bold">Answer:- </span>
          Vue provides higher customizability and hence is easier to learn than Angular or React. Further, Vue has an overlap with Angular and React with respect to their functionality like the use of components. Hence, the transition to Vue from either of the two is an easy option.
        </p>
      </div>
    </div>
  );
};

export default Blog;

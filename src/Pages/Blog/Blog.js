import React from "react";

const Blog = () => {
  return (
    <div className="mx-12">
      <div className="grid gap-6 m-12">
        <div className="card  bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">
              What are the different ways to manage a state in a React
              application?
            </h2>
            <p>
              When we talk about state in our applications, it’s important to be
              clear about what types of state actually matter. There are four
              main types of state you need to properly manage in your React
              apps: Local state Global state Server state URL state
            </p>

            <p>
              Local (UI) state – Local state is data we manage in one or another
              component. Local state is most often managed in React using the
              useState hook. For example, local state would be needed to show or
              hide a modal component or to track values for a form component,
              such as form submission, when the form is disabled and the values
              of a form’s inputs. <br />
              <br /> Global (UI) state – Global state is data we manage across
              multiple components. Global state is necessary when we want to get
              and update data anywhere in our app, or in multiple components at
              least. A common example of global state is authenticated user
              state. If a user is logged into our app, it is necessary to get
              and change their data throughout our application. Sometimes state
              we think should be local might become global. <br /> <br /> Server
              state – Data that comes from an external server that must be
              integrated with our UI state. Server state is a simple concept,
              but can be hard to manage alongside all of our local and global UI
              state. There are several pieces of state that must be managed
              every time you fetch or update data from an external server,
              including loading and error state. Fortunately there are tools
              such as SWR and React Query that make managing server state much
              easier. <br /> <br /> URL state – Data that exists on our URLs,
              including the pathname and query parameters. URL state is often
              missing as a category of state, but it is an important one. In
              many cases, a lot of major parts of our application rely upon
              accessing URL state. Try to imagine building a blog without being
              able to fetch a post based off of its slug or id that is located
              in the URL! There are undoubtedly more pieces of state that we
              could identify, but these are the major categories worth focusing
              on for most applications you build.
            </p>
          </div>
        </div>

        <div className="card  bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">
            React vs. Angular vs. Vue?
            </h2>
            <p>
              This post is a comprehensive guide on which is perhaps the right
              solution for you: Angular vs React vs Vue. Just a couple of years
              ago, developers were mainly debating whether they should be using
              Angular vs React for their projects. But over the course of the
              last couple of years, we’ve seen a growth of interest in a third
              player called Vue.js. If you are a developer starting out on a
              project and cannot decide on which JavaScript framework to use,
              this guide should help you make a decision.
            </p>
          </div>
        </div>
        <div className="card  bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">
              What is a unit test? Why should we write unit tests?
            </h2>
            <p>
              The main objective of unit testing is to isolate written code to
              test and determine if it works as intended. Unit testing is an
              important step in the development process, because if done
              correctly, it can help detect early flaws in code which may be
              more difficult to find in later testing stages.
            </p>
          </div>
        </div>
        <div className="card  bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">
              What are the different ways to manage a state in a React
              application?
            </h2>
            <p>
              JavaScript is a prototype-based, Object Oriented programming
              language. After the ES6 updates, JavaScript allowed for
              “prototypal inheritance”, meaning that objects and methods can be
              shared, extended, and copied. Sharing amid objects makes for easy
              inheritance of structure (data fields), behavior (functions /
              methods), and state (data values). JavaScript is the most common
              of the prototype-capable languages, and its capabilities are
              relatively unique. When used appropriately, prototypical
              inheritance in JavaScript is a powerful tool that can save hours
              of coding. Today, we want to get you acquainted with prototypal
              inheritance in JavaScript to get you up to date with the ES6
              capabilities.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;

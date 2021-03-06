# Dynamic Components & File Reusability in Vue.js

Presented at the Utah Vue.js Meetup on 8/1/2018

> This repo is meant to be an introduction to using Dyanmic components, Mixins, and Javascript Spread syntax to make your Vue project
> more maintainable and readable. This project displays an arbitrary list of Star Wars characters each separated by their character
> type (e.g. 'Sith', 'Jedi', 'Ewok' etc). Follow the steps below to see a progression of how I make the code more reusable.

# Follow Along

You can follow along by checking out the following branches in order. They each build on each other, with the last and most complete
branch being `master`

1. Checkout the branch `start` from the repo.
    1. Notice the `v-for` in StarWars.vue. We currently are rendering each component using a `v-if`
2. Checkout the branch `with-dynamic-rendering`
    1. We now use a vue `component` with an `:is` binding to render the component based on the type in the object itself
3. Checkout the branch `with-expanded-props`
    1. We have now added the `characterProps.js` file, and imported the props into each of the character's components
    2. This is *not* a Vuejs principle. This is the Javascript ES6 spread syntax. 
4. Checkout the branch `master`
    1. We have added the file `charactersMixin.js`
    2. In this file, we create an object that Vue recognizes and can merge into other Vue files. See `StarWars.vue` for the syntax.

## Pros to Dynamic Components:

- Remove duplicate code
- Make template easily readable
- Good for "separation of responsibilities"
- Easy to debug

## Cons to Dynamic Components:
- Abstraction of Code (can be difficult to follow)
- Defeats purpose of single file components
- Unecessarily large number of files

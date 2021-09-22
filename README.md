# Robofriends

[See-it-live](https://ronyahmed1200.github.io/Robofriends/)

## Some notes about this project

- we need to use class component when we need to deal with state and setState.
- we need to pass constructor function, and inside the constructor there have to super. so that we can get access to this.state or this.setState. Furthermore, we also need to pass props inside constructor and super to use props in the constructor function.
- Asynchronus setState: there is prevState and prevProps to deal with the multiple event running with the setState(). here setState() is asynchronus function. so it won't update emmediately, but it will do it in asynchronusly.

### There are four react fundementals

- Don't touch the dom. react will do it.
- build websites like legoblocks (where everything is component and inside of a component).
- Unidirectional (one way) data flow.
- UI, the rest is up to you.

### The job of react developer

- decide on components.
- decide on state and where it lives.
- what changes when state changes.
  [img-to-understand-it-better](https://imgur.com/00pgeCz.png)

### understanding life cycle hooks

- componentDidMount - to put it on the rendered page. It runs after executing constructor and rendering it.
- componentDidUpdate - to only update the part or state which just changed. and we don't need to render the full app again. So componentDidUpdate is good for performance issue.
- componentWillUnmount - if there is something or some state that doesn't change and react doesn't to render this again. It is just a left over memory in users pc. componentWillUnmount will remove this.

## hook

### hook的注意事项

1. 只在最顶层使用 Hook
  不要在循环，条件或嵌套函数中调用 Hook， 确保总是在你的 React 函数的最顶层调用他们。
2. 只在 React 函数中调用 Hook

  > 那么 React 怎么知道哪个 state 对应哪个 useState？答案是 React 靠的是 Hook 调用的顺序。 所以hook不能加到条件判断语句里面 我们可以把条件判断语句加到hook里面

### useState
> 如果你的更新函数返回值与当前 state 完全相同，则随后的重渲染会被完全跳过。
```
function Counter({initialCount}) {
  const [count, setCount] = useState(initialCount);
  return (
    <>
      Count: {count}
      <!-- 这里是使用普通形式 -->
      <button onClick={() => setCount(initialCount)}>Reset</button>
      <!-- prevCount 为上一次count的值， 下面两个是函数形式 -->
      <button onClick={() => setCount(prevCount => prevCount - 1)}>-</button>
      <button onClick={() => setCount(prevCount => prevCount + 1)}>+</button>
    </>
  );
}
```
> 注意   与 class 组件中的 setState 方法不同，useState 不会自动合并更新对象。你可以用函数式的 setState 结合展开运算符来达到合并更新对象的效果。

    setState(prevState => {
      // 也可以使用 Object.assign
      return {...prevState, ...updatedValues};
    });

useReducer 是另一种可选方案，它更适合用于管理包含多个子值的 state 对象。

如果初始的state需要通过复杂的计算来实现 可以通过在useState(()=> { reture dealResult})
### useEffect

useEffect 会在浏览器绘制后延迟执行，但会保证在任何新的渲染前执行
```
import React, { useState, useEffect } from 'react';

function Example() {
  const [count, setCount] = useState(0);
// 如果你熟悉 React class 的生命周期函数，你可以把 useEffect Hook 看做 componentDidMount，componentDidUpdate 和 componentWillUnmount 这三个函数的组合。
  componentDidMount的时候会执行一次， componentDidUpdate也会执行， 
  可以通过第二个参数依赖来判断是否执行
  通过第一个函数的return 来执行componentWillUnmount里的内容 ==> 比如清除定时器
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`;
  }, [count]);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
export default Example
```
> 如果想执行只运行一次的 effect（仅在组件挂载和卸载时执行），可以传递一个空数组（[]）作为第二个参数。这就告诉 React 你的 effect 不依赖于 props 或 state 中的任何值，所以它永远都不需要重复执行。

### useContext
> 提示
  如果你在接触 Hook 前已经对 context API 比较熟悉，那应该可以理解，useContext(MyContext) 相当于 class 组件中的 static contextType = MyContext 或者 <MyContext.Consumer>。
  useContext(MyContext) 只是让你能够读取 context 的值以及订阅 context 的变化。你仍然需要在上层组件树中使用 <MyContext.Provider> 来为下层组件提供 context。
```
const themes = {
  light: {
    foreground: "#000000",
    background: "#eeeeee"
  },
  dark: {
    foreground: "#ffffff",
    background: "#222222"
  }
};

const ThemeContext = React.createContext(themes.light);

function App() {
  return (
    <ThemeContext.Provider value={themes.dark}>
      <Toolbar />
    </ThemeContext.Provider>
  );
}

function Toolbar(props) {
  return (
    <div>
      <ThemedButton />
    </div>
  );
}

function ThemedButton() {
  const theme = useContext(ThemeContext);
  return (
    <button style={{ background: theme.background, color: theme.foreground }}>
      I am styled by theme context!
    </button>
  );
}
```

### useMemo
传入 useMemo 的函数会在渲染期间执行。请不要在这个函数内部执行与渲染无关的操作，诸如副作用这类的操作属于 useEffect 的适用范畴，而不是 useMemo。
  如果没有提供依赖项数组，useMemo 在每次渲染时都会计算新的值
### 自定义hook 
  通过自定义 Hook，可以将组件逻辑提取到可重用的函数中。 =>也表明了自定义hook的作用，去除重复的逻辑

  自定义 Hook 是一个函数，其名称以 “use” 开头，函数内部可以调用其他的 Hook

  > 在 React 中有两种流行的方式来共享组件之间的状态逻辑: render props 和高阶组件，hook是第三种
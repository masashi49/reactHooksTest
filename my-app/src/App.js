
import { useCounter } from "./hooks/useCounter.ts"
import { useCounterEx } from "./hooks/useCounterEx.ts"

function App () {
  const { count, increment, value } = useCounter()
  const { countEx } = useCounterEx() // objectとして受け取る
  return (
    <div className="App">
      hello count is { count }<br />
      value is { value }<br />
      <button onClick={ increment }>increment</button>

      <hr />
      <br />

      hello countEx is{ countEx }<br />


    </div>
  );
}

export default App;

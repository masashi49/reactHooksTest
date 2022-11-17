
import { useCounter } from "./hooks/useCounter.ts"

function App () {
  const { count, increment } = useCounter()
  return (
    <div className="App">
      hello count is { count }

      <br />

      <button onClick={ increment }>increment</button>
    </div>
  );
}

export default App;

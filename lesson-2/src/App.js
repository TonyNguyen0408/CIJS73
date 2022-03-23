import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <input type="text" name="" value="" size="50" placeholder="Enter your task here..."/>
        </div>

        <div>
          <input type="radio" id="task_2" name="task" value="task_1" />
            <label for="task_1">Clean up bed room</label>
        </div>

        <div>
          <input type="radio" id="task_2" name="task" value="task_2" />
            <label for="task_2">Buy some milk</label>
        </div>

        <div>
          <input type="radio" id="task_3" name="task" value="task_3" />
            <label for="task_3">Jogging</label>
        </div>

        <div>
          <input type="radio" id="task_4" name="task" value="task_4" />
            <label for="task_4">Learn React</label>
        </div>

        <div>
          <input type="radio" id="task_5" name="task" value="task_5" />
            <label for="task_5">Doing Exercise</label>
        </div>

        <div>
          <p>MindX todolist</p>
        </div>
      </header>
    </div>
  );
}

export default App;

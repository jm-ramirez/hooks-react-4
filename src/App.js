import logo from './logo.svg';
import './App.css';
import { MyComponent } from './components/MyComponent';
import { CustomTest } from './components/CustomTest';
import { MyForm } from './components/MyForm';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* hook useId */}
        <MyComponent/>
        {/* custom hook */}
        <CustomTest/>

        <MyForm/>
      </header>
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import { MyComponent } from './components/MyComponent';
import { CustomTest } from './components/CustomTest';
import { MyForm } from './components/MyForm';
import { MyUser } from './components/MyUser';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* custom hook useString */}
        <CustomTest/>
        {/* custom hook useForm */}
        <MyForm/>
        <MyUser/>
        {/* hook useId */}
        <MyComponent/>
      </header>
    </div>
  );
}

export default App;

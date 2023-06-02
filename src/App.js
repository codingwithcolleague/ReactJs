import logo from './logo.svg';
import './App.css';
import ClassCom from './component/ClassCom';
import FunCom from './component/FuncCom';
import FunProp from './props/funcProp';
import Classprop from './props/classProp';


function App() {
  return (
    <div className="App">
      <FunProp name="Rahul"  />
      <Classprop nam="Rahul" /> 
    </div>
  );
}

export default App;

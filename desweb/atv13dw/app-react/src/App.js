import logo from './logo.svg';
import './App.css';
import Welcome from './components/welcome';
import Link from './components/link';
import Counter from './components/contador';
import List from './components/list';
import Mega from './components/mega';

function App() {
  return (
    <div className="App">
      <Welcome text="JocaCGS" cor="#000000"/>
      <Link url="https://www.google.com/search?q=Contador&rlz=1C1GCEA_enBR1028BR1028&oq=Contador&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIHCAEQABiPAjIHCAIQABiPAjIHCAMQABiPAtIBCDEyMThqMGoxqAIAsAIA&sourceid=chrome&ie=UTF-8" text="Contador" />
      <Counter value="0"/>
      <List />
      <Mega />
    </div>
  );
}

export default App;

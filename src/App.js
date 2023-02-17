import classes from './App.module.css';
import Toolbar from './components/Navigation/Toolbar/Toolbar';
import Layout from './hoc/Layout/Layout';

function App() {
  return (
    <div className={classes.App}>
      <Toolbar />
      <Layout />
    </div>
  );
}

export default App;

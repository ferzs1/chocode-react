import classes from './App.module.css';
import Toolbar from './components/Navigation/Toolbar/Toolbar';
import Layout from './hoc/Layout/Layout';

function App() {
  return (
    <div className={classes.App}>
      <Layout>
        <h2> HEADER</h2>
      </Layout>
    </div>
  );
}

export default App;

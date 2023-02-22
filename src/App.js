import classes from './App.module.css';
import Toolbar from './components/Navigation/Toolbar/Toolbar';
import Layout from './hoc/Layout/Layout';
import Header from './components/UI/Header/Header';
import { ParallaxProvider } from 'react-scroll-parallax';

function App() {
  return (
    <ParallaxProvider>
      <div className={classes.App}>
        <Layout>
          <Header />
          <h1>ASD</h1>
          <h1>ASD</h1>
          <h1>ASD</h1>
          <h1>ASD</h1>
          <h1>ASD</h1>
          <h1>ASD</h1>
          <h1>ASD</h1>
          <h1>ASD</h1>
          <h1>ASD</h1>
          <h1>ASD</h1>
          <h1>ASD</h1>
          <h1>ASD</h1>
          <h1>ASD</h1>
          <h1>ASD</h1>
          <h1>ASD</h1>
          {/* <Aboutus /> */}
          {/* <Courses /> */}
          {/* <Teachers /> */}
          {/* <Contact /> */}
          {/* <Footer /> */}
        </Layout>
      </div>
    </ParallaxProvider>
  );
}

export default App;

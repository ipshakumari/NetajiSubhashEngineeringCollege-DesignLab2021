import React from 'react';
// import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer/footer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from './pages/about';
import Careers from './pages/careers';
import Engineering from './pages/engineering';
import Team from './pages/team';
import News from './pages/news';
import Products from './pages/products';
import Agnikul from './pages';
import Launch from './pages/book-a-launch';

function App() {
return (
	<Router>
	<Navbar />
	<Switch>
		<Route path='/index' component={Agnikul} />
		<Route path='/about' component={About} />
    	<Route path='/engineering' component={Engineering} />
		<Route path='/products' component={Products} />
		<Route path='/team' component={Team} />
		<Route path='/news' component={News} />
		<Route path='/careers' component={Careers} />
		<Route path='/book-a-launch' component={Launch} />
	</Switch>
	<Footer />
	</Router>
);
}

export default App;

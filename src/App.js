
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import SubscriptionForm from './containers/SubscriptionForm/SubscriptionForm';
import ApplicationForm from './containers/ApplicationForm/ApplicationForm';
import Home from './components/content/Home/Home';
import Layout from './hoc/Layout/Layout';
import PageText from './components/content/PageText/PageText';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				{/* <Route path="blogs" element={< />} /> */}
				<Route index element={ <Layout> <Home /> </Layout> } />
				<Route path="apply" element={ <Layout> <ApplicationForm /> </Layout> } />
				<Route path="subscribe" element={ <Layout> <SubscriptionForm /> </Layout> } />
				<Route path="aszf" element={ <Layout> <PageText txt="aszf"/> </Layout> } />
				<Route path="adatkezeles" element={ <Layout> <PageText txt="adatkezeles"/> </Layout> } />
				<Route path="*" element={<Navigate to="/" replace />} />
				{/* <Route path="*" element={<NoPage />} /> */}
			</Routes>
		</BrowserRouter>
	);
}

export default App;

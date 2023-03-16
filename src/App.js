
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import SubscriptionForm from './containers/SubscriptionForm/SubscriptionForm';
import Home from './components/content/Home/Home';
import Layout from './hoc/Layout/Layout';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				{/* <Route path="blogs" element={< />} /> */}
				<Route
					index
					element={
						<Layout>
							<Home />
						</Layout>
					}
				/>
				<Route
					path="apply"
					element={
						<Layout>
							<SubscriptionForm />
						</Layout>
					}
				/>
				<Route path="*" element={<Navigate to="/" replace />} />
				{/* <Route path="*" element={<NoPage />} /> */}
			</Routes>
		</BrowserRouter>
	);
}

export default App;

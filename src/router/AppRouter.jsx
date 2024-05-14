import { Route, Routes } from 'react-router-dom';
import { Navbar } from '../Navbar';
import {
	HomePage,
	DashboardPage,
	LoginPage,
	RegisterPage,
	Skerepage,
	SecretPage
} from '../pages';
import { PrivateRoute } from './PrivateRouter';


export const AppRouter = () => {
	return (
		<>
			<Routes>
				<Route path='/' element={<Navbar />}>
					<Route index element={<HomePage />} />
					<Route path='login' element={<LoginPage />} />
					<Route path='register' element={<RegisterPage />} />
					<Route
						path='dashboard'
						element={
							<PrivateRoute>
								<DashboardPage />
							</PrivateRoute>
						}
					/>
					<Route
						path='secretpage'
						element={
							<PrivateRoute>
								<SecretPage />
							</PrivateRoute>
						}
					/>
					<Route
						path='skerepage'
						element={
							<PrivateRoute>
								<Skerepage />
							</PrivateRoute>
						}
					/>
				</Route>
				
			</Routes>
		</>
	);
};
import React from "react";
import { Route, BrowserRouter, Routes} from 'react-router-dom';
import Layout from "./pages/Layout";
import { Home, Profile, Onboarding } from "./pages";
import MedicalRecords from "./pages/records/index";
import ScreeningSchedule from "./pages/ScreeningSchedule";
import SingleRecordDetails from "./pages/records/single-record-details";
import { AuthContextProvider } from "./context";
import FrontLayout from "./pages/FrontLayout";
import LandingPage from "./pages/LandingPage";

const routes = [
  {
    path:'/',
    element: <FrontLayout/>,
    children:[
      {path:'',element:<LandingPage />},
      {path:'/onboarding',element:<Onboarding />},
    ]
  }, 
  {
    path: '/',
    element: <Layout/>,
    children: [
      {path: 'Dashboard/',element:<Home/>},
      {path:'/Profile',element:<Profile />},
      {path:'/medical-records',element:<MedicalRecords />},
      {path:'/medical-records/:id',element:<SingleRecordDetails />},
      {path:'/screening-schedules',element:<ScreeningSchedule />},
    ]

  }
];

const router = (
	<BrowserRouter>
		<Routes>
			{routes.map((route) => (
				<Route key={route.path} path={route.path} element={route.element}>
					{route.children.map((child) => (
						<Route key={child.path} path={child.path} element={child.element} />
					))}
				</Route>
			))}
		</Routes>
	</BrowserRouter>
);

const App = () => {
 return router;
};

export default App;

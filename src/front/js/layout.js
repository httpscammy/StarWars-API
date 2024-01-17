import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./components/scrollToTop";
import { BackendURL } from "./components/backendURL";

import { Home } from "./pages/home";
import { Login } from "./pages/login";
import { Signup } from "./pages/signup";
import { Private} from "./pages/private"
import PeoplePage from "./pages/people"
import injectContext from "./store/appContext";

import { Navbar } from "./components/navbar";
import { Footer } from "./components/footer";
import PlanetsPage from "./pages/planets";
import VehiclesPage from "./pages/vehicles";
import FilmsPage from "./pages/films";
import SpeciesPage from "./pages/species";
import StarshipsPage from "./pages/starships";

//create your first component
const Layout = () => {
    //the basename is used when your project is published in a subdirectory and not in the root of the domain
    // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
    const basename = process.env.BASENAME || "";

    if(!process.env.BACKEND_URL || process.env.BACKEND_URL == "") return <BackendURL/ >;

    return (
        <div>
            <BrowserRouter basename={basename}>
                <ScrollToTop>
                    <Navbar />
                    <Routes>
                        <Route element={<Home />} path="/" />
                        <Route element={<Login />} path="/login" />
                        <Route element={<PeoplePage />} path="/people" />
                        <Route element={<PlanetsPage />} path="/planets" />
                        <Route element={<VehiclesPage />} path="/vehicles" />
                        <Route element={<FilmsPage />} path="/films" />
                        <Route elemet={<SpeciesPage />} path="/species" />
                        <Route element={<StarshipsPage />} path="/starships" />
                        <Route element={< Signup />} path="/signup" />
                        <Route element={< Private />} path="/private" />
                        <Route element={<h1>Not found!</h1>} />
                    </Routes>
                    <Footer />
                </ScrollToTop>
            </BrowserRouter>
        </div>
    );
};

export default injectContext(Layout);

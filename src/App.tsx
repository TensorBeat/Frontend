import React from 'react';
import './App.css';
import {useRoutes} from "hookrouter"
import Home from "./pages/Home";
import {Error} from "./pages/Error";
import Songs from "./pages/Songs";

const routes = {
    "/": () => <Home/>,
    "/songs": () => <Songs/>,
}

function App() {
    return useRoutes(routes) ?? <Error code={404}/>;
}

export default App;

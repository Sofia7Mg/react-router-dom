//App.js
import React from 'react';
import './App.css';
import Home from './pages/Home.js';
import List from './pages/List.js';
import ListItem from './pages/ListItem.js';
import { useRoutes } from 'react-router';
import Navbar from './component/Navbar.js'; //import d'un component

function App() {

let routes = useRoutes([
    
    {
        path: '/',
        element: <Home />, //! importer les pages uniquement (à ne pas confondre avec un component)
    },
    {
        path: '/list',
        element: <List />, //Page qui contiendra l'Outlet
        children: [
            {
                path: ":id",
                element: <ListItem /> // Détails de mon Item
            }
        ]
    }


]);

return (
    <div className="App">
        {/* En dehors de "{routes}" Afficher les components qui seront visibles sur chaque page (tel le footer ou la navbar) */}
        <Navbar /> 

        {/* C'est ici que s'afficheront vos pages  */}
        {routes}
    </div>
);
}

export default App;
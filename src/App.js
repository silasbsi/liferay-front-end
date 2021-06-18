import React, { useState, useEffect } from 'react';
import './App.css'

import api from './services/api';

import Header from './components/Header';
import Content from './components/Content';

function App() {

    const [repositories, setRepositories] = useState([]);
    const [loadContent, setLoadContent] = useState(false);

    const getRepositories = () => {
        api.get('user/repos')
        .then((response) => {
            setRepositories(response.data)
        })
    }

    const handleLoadContent = () => {
        setLoadContent(!loadContent);
    }

    useEffect(() => {
        getRepositories();
    }, [loadContent])

    return (
        <>
            <Header loadContent={handleLoadContent} />
            <Content repositories={repositories} />
        </>
    );
}

export default App;
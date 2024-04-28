import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await axios.get('https://api.github.com/users/vophihungvn/repos');
        setRepos(response.data);
      } catch (error) {
        console.error('Error fetching repositories:', error);
      }
    };

    fetchRepos();
  }, []);

  return (
    <div className="App">
      <h1>List of GitHub Repositories</h1>
      <ul>
        {repos.map(repo => (
          <li key={repo.id}>
            <a href={repo.html_url} target="_blank" rel="noopener noreferrer">{repo.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

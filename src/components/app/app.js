import React from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import PostStatusFilter from '../post-status-filter';
import PostList from '../post-list';
import PostAddForm from '../post-add-form';

import './app.css';

const App = () => {

  const data = [
    1,
    {label: 'Going to learn React', important: true, id: 'qdqwe'},
    {label: 'Nice one', important: false, id: 'qdagfa'},
    {label: 'Good job!', important: false, id: 'svqe'}
  ]

  return (
    <div className="app">
      <AppHeader/>
      <div className="search-panel d-flex">
        <SearchPanel/>
        <PostStatusFilter/>
      </div>
      <PostList posts={data} />
      <PostAddForm/>
    </div>
  );
}

export default App;
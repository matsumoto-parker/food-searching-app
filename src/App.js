import React, { useState } from 'react';
import './App.css';
import axios from 'axios';
import Recipe from './components/Recipe';
import Alert from './components/Alert';

const App = () => {
  const [query, setQuery] = useState('');
  const [recipes, setRecipes] = useState([]);
  const [alert, setAlert] = useState('');

  const APP_ID = '40d80400';

  const APP_KEY = '4ab78069a0e68918c9c86a97c42c4b89';

  const URL = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;

  const getData = async () => {
    if (query !== '') {
      const result = await axios.get(URL);
      if (!result.data.more) {
        return setAlert('料理が見つかりません');
      }
      setRecipes(result.data.hits);
      console.log(result);
      setAlert('');
      setQuery('');
    } else {
      setAlert('料理名を入力してください');
    }
  };

  const onChange = (e) => {
    setQuery(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    getData();
  };

  return (
    <div className="App">
      <h1 onClick={getData}>Food Searching App</h1>
      <form className="search-form" onSubmit={onSubmit}>
        {alert !== '' && <Alert alert={alert} />}
        <input
          type="text"
          placeholder="レシピを探そう"
          autoComplete="off"
          onChange={onChange}
          value={query}
        />
        <input type="submit" value="検索" />
      </form>
      <div className="recipes">
        {recipes !== [] &&
          recipes.map((recipe, index) => (
            <Recipe recipe={recipe} key={index} />
          ))}
      </div>
    </div>
  );
};

export default App;

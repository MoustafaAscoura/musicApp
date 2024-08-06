import './App.css';
import AlbumSection from './components/AlbumSection/AlbumSection';
import AppRoute from './routes/Route';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux'
import store from "./store/store"
import { useState } from 'react';
import themeContext from './context/themeContext';
import languageContext from './context/languageContext';

function App() {
  const [darkMode, setDarkMode] = useState(false)
  const [language, setLanguage] = useState("en")

  return (
    <div className="App">
      <Provider store={store}>
        <themeContext.Provider value={{darkMode, setDarkMode}}>
          <languageContext.Provider value={{language, setLanguage}}>
            <AppRoute />
          </languageContext.Provider>
        </themeContext.Provider>
      </Provider>
        
    </div>
  );
}

export default App;

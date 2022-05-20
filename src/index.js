import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import store from './redux/store';
import { I18nextProvider } from 'react-i18next';
import i18next from 'i18next';
import global_es from "./locales/es/global.json"
import global_en from "./locales/en/global.json"

i18next.init({
  interpolation: { escapeValue: false },
  lng: "en",
  resources: {
    es: {
      global: global_es
    },
    en: {
      global: global_en
    },
  }
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <I18nextProvider i18n={ i18next }>
    <Provider store={store}>
        <React.StrictMode>
          <App />
        </React.StrictMode>
    </Provider>
  </I18nextProvider>
);

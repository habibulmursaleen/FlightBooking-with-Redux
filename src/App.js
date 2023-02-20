import React from "react";
import { Provider } from "react-redux";
import Header from "./components/Header";
import MainSection from "./components/MainSection";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <div>
        <Header />
        <MainSection />
      </div>
    </Provider>
  );
}

export default App;

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import "./App.css";
import { store } from "./store";
import NavBar from "./components/NavBar";
import LoginContainer from "./components/signup/LoginContainer";
import HomeContainer from "./components/HomeContainer";
import SignUpContainer from "./components/signup/SignupContainer";
import PrayerButton from "./components/PrayerButton";
import MinistriesContainer from "./components/MinistriesContainer";
import ResourcesContainer from "./components/ResourcesContainer";
import AboutUsContainer from "./components/AboutUsContainer";

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <>
          <NavBar />
          <Routes>
            <Route path="/" element={<HomeContainer />} />
            <Route path="/profile" element={<LoginContainer />} />
            <Route path="/register" element={<SignUpContainer />} />
            <Route path="/who-are-we" element={<AboutUsContainer />} />
            <Route path="/ministries" element={<MinistriesContainer />} />
            <Route path="/resources" element={<ResourcesContainer />} />
          </Routes>
          {/* <PrayerButton /> */}
        </>
      </BrowserRouter>
    </Provider>
  );
};

export default App;

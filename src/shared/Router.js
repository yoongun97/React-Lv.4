import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import NewError from "../pages/NewError";
import ErrorList from "../pages/ErrorList";
import Detail from "../pages/Detail";
import Header from "../Components/UI/Header";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Header />}>
          <Route path="/" element={<Home />} />
          <Route path="/error/add" element={<NewError />} />
          <Route path="/errors" element={<ErrorList />} />
          <Route path="/error/detail/:id" element={<Detail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;

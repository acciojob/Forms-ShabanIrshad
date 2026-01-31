import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import '../styles/App.css';
import Form from "./Form";
import FormRef from './FormRef';
import FormState from './FormState';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
            <div>
                <Link to="/form" id="form-link">Section 1</Link> <br />
                <Link to="/form-ref" id="form-ref-link">Section 2</Link> <br />
                <Link to="/form-state" id="form-state-link">Section 3</Link>
            </div>
        } />
        <Route path="/form" element={<Form />}></Route>
        <Route path="/form-ref" element={<FormRef />}></Route>
        <Route path="/form-state" element={<FormState />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;

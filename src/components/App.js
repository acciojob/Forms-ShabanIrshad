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
                <Link to="/formRef" id="form-ref-link">Section 2</Link> <br />
                <Link to="/formState" id="form-state-link">Section 3</Link>
            </div>
        } />
        <Route path="/form" element={<Form />}></Route>
        <Route path="/formRef" element={<FormRef />}></Route>
        <Route path="/formState" element={<FormState />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;

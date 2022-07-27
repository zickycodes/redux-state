import React from "react";
import { Routes, Route } from "react-router-dom";

import Header from "../feautures/header/Header";
// Streams
import StreamDelete from "./streams/StreamDelete";
import StreamEdit from "./streams/StreamEdit";
import StreamList from "./streams/StreamList";
import StreamsCreate from "./streams/StreamCreate";
import StreamsShow from "./streams/StreamShow";


const App = () => {


  return (
    <div className="ui container">
      
      <Header  />
      
      <Routes>
        <Route path="/" element={<StreamList/>} />
        <Route path="/streams/show" element={<StreamsShow />} />
        <Route path="/streams/delete" element={<StreamDelete />} />
        <Route path="/streams/edit" element={<StreamEdit />} />
        <Route path="/streams/new" element={<StreamsCreate />} />
      </Routes>
    </div>
  );
};

  export default App
  

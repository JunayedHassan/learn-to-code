import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CourseCont from './Components/CourseCont/CourseCont';
import Header from './Components/Header/Header';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <CourseCont></CourseCont>
    </div>
  );
}

export default App;

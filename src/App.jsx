import React from 'react';
import "./styles.css";
import { catData } from "./data";
import { CatPanelLayout } from "./CatPanelLayout";

export default function App() {
  return (
    <div className="App">
      <CatPanelLayout catData={catData} />
    </div>
  );
}

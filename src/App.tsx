import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout"
import Feed from "./components/Feed";
import Post from "./pages/Post";

const App: React.FC = () => {
  return (
    <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Feed />} />
      <Route path=":postId" element={<Post />} />
    </Route>
    </Routes>
  );
};

export default App;

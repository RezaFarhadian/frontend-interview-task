import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout"
import Feed from "./components/Feed";
import Post from "./pages/Post";
import useStore from "./store/useStore";

const App: React.FC = () => {
  const clearNotifications = useStore((state) => state.clearNotifications);
  useEffect(() => {
    clearNotifications()
  })

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

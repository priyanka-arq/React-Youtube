import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import "./_app.scss";
import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import SkeletonVideo from "./components/skeletons/SkeletonVideo";
import Watch from "./pages/watch/Watch";
import Search from "./pages/search/Search";
import Subscriptions from "./pages/subscriptions/Subscriptions";
import ChannelScreen from "./pages/channel/ChannelScreen";
import LikedVideos from "./pages/likedVideos/LikedVideos";

const Layout = ({ children }) => {
  const [sidebar, setSidebar] = useState(false);
  const handleSidebarToggle = () => setSidebar(!sidebar);

  return (
    <>
      <Header handleSidebarToggle={handleSidebarToggle} />
      <div className="app__container ">
        <Sidebar sidebar={sidebar} handleSidebarToggle={handleSidebarToggle} />
        <Container fluid className="app__main">
          {children}
        </Container>
      </div>
    </>
  );
};

function App() {
  const { accessToken, loading } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && !accessToken) {
      navigate("/login");
    }
  }, [accessToken, loading, navigate]);
  return (
    <Routes>
      <Route
        exact
        path="/"
        element={
          <Layout>
            <Home />
          </Layout>
        }
      />
      <Route
        path="/search/:query"
        element={
          <Layout>
            <Search />
          </Layout>
        }
      />
      <Route
        path="/watch/:id"
        element={
          <Layout>
            <Watch />
          </Layout>
        }
      />
      <Route
        path="/feed/subscriptions"
        element={
          <Layout>
            <Subscriptions />
          </Layout>
        }
      />
      <Route
        path="/playlist"
        element={
          <Layout>
            <LikedVideos />
          </Layout>
        }
      />
      <Route
        path="/channel/:channelId"
        element={
          <Layout>
            <ChannelScreen />
          </Layout>
        }
      />
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default App;

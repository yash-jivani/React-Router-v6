import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./Ncomponents/pages/Home";
import About from "./Ncomponents/pages/About";
import Contact from "./Ncomponents/pages/Contact";
import Post from "./Ncomponents/pages/Post";
import Layout from "./Ncomponents/Layout";
import PostLayout from "./Ncomponents/PostLayout";
import PostDetail from "./Ncomponents/pages/PostDetail";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* '/' => main layout */}
          <Route path="/" element={<Layout />}>
            {/* '/' share page with index component (Home) */}
            <Route index element={<Home />} />
            {/* child of '/' => about, contact */}
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            {/* 'post' => 2nd layout */}
            <Route path="post" element={<PostLayout />}>
              {/* 'post' share page with index component (Post) */}
              <Route index element={<Post />} />
              {/* child of 'post' => :category (dynamic url) */}
              <Route path=":category" element={<PostDetail />} />
            </Route>
          </Route>
          <Route path="*" element={<h1>Error 404 Page not Found !!</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

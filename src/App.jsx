import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Feed } from "./components/feed";
import { ChannelDetail } from "./components/channelDetail";
import { Navbar } from "./components/navbar";
import { SearchFeed } from "./components/searchFeed";

const App = () => (
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route exact path="/" element={<Feed />} />
      <Route path="/channel/:id" element={<ChannelDetail />} />
      <Route path="/search/:searchTerm" element={<SearchFeed />} />
    </Routes>
  </BrowserRouter>
);

export default App;

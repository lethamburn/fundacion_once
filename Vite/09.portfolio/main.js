import "./style.css";
import Navigator from "./components/Navigator/Navigator";
import Home from "./page/Home/Home";
import About from "./page/About/About";
import Music from "./page/Music/Music";
import Tour from "./page/Tour/Tour";
import linkPage from "./utils/linkPage";

Navigator();
Home();

const pages = [
  {
    id: "#home-link",
    page: Home,
  },
  {
    id: "#about-link",
    page: About,
  },
  {
    id: "#music-link",
    page: Music,
  },
  {
    id: "#tour-link",
    page: Tour,
  },
];

for (const page of pages) {
  linkPage(page.id, page.page);
}

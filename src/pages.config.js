/**
 * pages.config.js - Page routing configuration
 *
 * This file is AUTO-GENERATED. Do not add imports or modify PAGES manually.
 * Pages are auto-registered when you create files in the ./pages/ folder.
 *
 * THE ONLY EDITABLE VALUE: mainPage
 * This controls which page is the landing page (shown when users visit the app).
 *
 * Example file structure:
 *
 *   import HomePage from './pages/HomePage';
 *   import Dashboard from './pages/Dashboard';
 *   import Settings from './pages/Settings';
 *
 *   export const PAGES = {
 *       "HomePage": HomePage,
 *       "Dashboard": Dashboard,
 *       "Settings": Settings,
 *   }
 *
 *   export const pagesConfig = {
 *       mainPage: "HomePage",
 *       Pages: PAGES,
 *   };
 *
 * Example with Layout (wraps all pages):
 *
 *   import Home from './pages/Home';
 *   import Settings from './pages/Settings';
 *   import __Layout from './Layout.jsx';
 *
 *   export const PAGES = {
 *       "Home": Home,
 *       "Settings": Settings,
 *   }
 *
 *   export const pagesConfig = {
 *       mainPage: "Home",
 *       Pages: PAGES,
 *       Layout: __Layout,
 *   };
 *
 * To change the main page from HomePage to Dashboard, use find_replace:
 *   Old: mainPage: "HomePage",
 *   New: mainPage: "Dashboard",
 *
 * The mainPage value must match a key in the PAGES object exactly.
 */
import Home from './pages/Home';
import Compare from './pages/Compare';
import Categories from './pages/Categories';
import CategoryDetail from './pages/CategoryDetail';
import ToolDetail from './pages/ToolDetail';
import VSIndex from './pages/VSIndex';
import VSDetail from './pages/VSDetail';
import BestFor from './pages/BestFor';
import BestForDetail from './pages/BestForDetail';
import Guides from './pages/Guides';
import GuideDetail from './pages/GuideDetail';
import AffiliateDisclosure from './pages/AffiliateDisclosure';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import __Layout from './Layout.jsx';


export const PAGES = {
    "Home": Home,
    "Compare": Compare,
    "Categories": Categories,
    "CategoryDetail": CategoryDetail,
    "ToolDetail": ToolDetail,
    "VSIndex": VSIndex,
    "VSDetail": VSDetail,
    "BestFor": BestFor,
    "BestForDetail": BestForDetail,
    "Guides": Guides,
    "GuideDetail": GuideDetail,
    "AffiliateDisclosure": AffiliateDisclosure,
    "Privacy": Privacy,
    "Terms": Terms,
}

export const pagesConfig = {
    mainPage: "Home",
    Pages: PAGES,
    Layout: __Layout,
};
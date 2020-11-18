import HomePage from './Home';
import PrivacyPage from './Privacy';
import SupportPage from './Support';
import AppStorePage from './AppStore';

const routes = {
  '/privacy': PrivacyPage,
  '/support': SupportPage,
  '/appstore': AppStorePage,
  '/': HomePage,
};

export default routes;

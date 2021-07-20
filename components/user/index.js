import Header from './header/header';
import Body from './body/body';
import Footer from './footer/footer';
import Contact from './footer/contact';
import New from './news/news';
import Partner from './partner/partners';
import Target from './topic/target';
import ItnuoiIt from './topic/ItnuoiIt';
import Formcontact from './footer/formcontact';
import Donate from './formDonate/donate';
const Index = ({ children }) => {
  return (
    <div>
      <Header />
      <Body />
      <Donate />
      <ItnuoiIt />
      <Target />
      <New />
      <Partner />
      <Formcontact />
      <Footer />
    </div>
  );
};

export default Index;

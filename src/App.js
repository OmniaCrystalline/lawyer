import { Routes, Route } from "react-router";
import { Layout } from "./components/Layout";
import { ServicesPage } from '../src/pages/ServicesPage'
import { HomePage } from '../src/pages/HomePage'
import { ContactsPage } from "./pages/ContactsPage";
import { Helmet } from "react-helmet-async";
import { PersonalPage } from "./pages/PersonalPage";
//import { Services2Page } from "./pages/Services2Page";
//import { GoLaw } from 'react-icons/go'
import "./App.css"
import { Alimony, Divorce } from "./components/articles/Divorce";
import { Victim } from "./components/articles/Victim";
//import { SideBar } from "./components/Services2";
import { Inheritance } from "./components/articles/Inheritance";
import { Landing } from "./components/articles/Landing";
import { Housing } from "./components/articles/Housing";
import { Contract } from "./components/articles/Contract";
import { Admin } from "./components/articles/Admin";


function App() {
  return (
    <div>
      <Helmet>
        <meta charSet='utf-8' />
        <title>Послуги адвоката</title>
        <link rel='canonical' href='https://lawyer-help5.firebaseapp.com/' />
        <link
          rel='icon'
          href='https://live.staticflickr.com/65535/52692761711_ff5ec86e52_q.jpg'
        />
        <meta
          name='description'
          content='надаю послуги у вирішенні питань житлових спорів, спадкових спорів, сімейних спорах, земельні спори, договірні правовідносини, адміністративні правопорушення, представництво інтересів потерпілих у кримінальному провадженні. Адвокат Львів недорого. Адвокат Україна. Кваліфіковані юридичні послуги'
        />
        <meta property='og:locale' content='uк'></meta>
        <meta
          property='og:site_name'
          content='Юридична допомога - lawyer-help5'></meta>
        <meta property='og:type' content='article'></meta>
        <meta property='og:title' content='допомога адвоката Львів'></meta>
        <meta
          property='og:description'
          content='надаю послуги у вирішенні питань житлових спорів, спадкових спорів, сімейних спорах, земельні спори, договірні правовідносини, адміністративні правопорушення, представництво інтересів потерпілих у кримінальному провадженні. Адвокат Львів недорого. Кваліфіковані юридичні послуги'></meta>
        <meta
          property='og:url'
          content='https://lawyer-help5.firebaseapp.com/'></meta>
        <meta
          name='google-site-verification'
          content='Xr9roVGkagTpMZxBYqdhcVOfxbC1imUBtsMO1Y7xvd4'
        />
      </Helmet>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<HomePage />}></Route>
          <Route path='contacts' element={<ContactsPage />}></Route>
          <Route path='lawyer' element={<PersonalPage />}></Route>
          <Route path='services' element={<ServicesPage />}>
            <Route path='criminal' element={<Victim />} />
            <Route path='divorce' element={<Divorce />} />
            <Route path='inheritance' element={<Inheritance />} />
            <Route path='landing' element={<Landing />} />
            <Route path='housing' element={<Housing />} />
            <Route path='contract' element={<Contract />} />
            <Route path='inheritance' element={<Inheritance />} />
            <Route path='alimony' element={<Alimony />} />
            <Route path='admin' element={<Admin/>} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;

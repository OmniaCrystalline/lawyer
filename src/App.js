import { Routes, Route } from "react-router";
import { Layout } from "./components/Layout";
import { ServicesPage } from '../src/pages/ServicesPage'
import { HomePage } from '../src/pages/HomePage'
import { ContactsPage } from "./pages/ContactsPage";
import { Helmet } from "react-helmet-async";
import { PersonalPage } from "./pages/PersonalPage";
//import { GoLaw } from 'react-icons/go'


function App() {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Послуги адвоката</title>
        <link rel="canonical" href="https://lawyer-help5.web.app/" />
        <link rel="icon" href="https://live.staticflickr.com/65535/52692761711_ff5ec86e52_q.jpg" />
        <meta name="description" content="надаю послуги у вирішенні питань житлових спорів, спадкових спорів, сімейних спорах, земельні спори, договірні правовідносини, адміністративні правопорушення, представництво інтересів потерпілих у кримінальному провадженні. Адвокат Львів недорого. Кваліфіковані юридичні послуги" />
      </Helmet>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/' element={<HomePage />}></Route>
          <Route path='/services' element={<ServicesPage />}></Route>
          <Route path='/contacts' element={<ContactsPage />}></Route>
          <Route path='/lawyer' element={<PersonalPage/>}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;

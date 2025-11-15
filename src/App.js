import { Routes, Route } from "react-router";
import { Layout } from "./components/Layout";
import { ServicesPage } from '../src/pages/ServicesPage'
import { HomePage } from '../src/pages/HomePage'
import { ContactsPage } from "./pages/ContactsPage";
import { Helmet } from "react-helmet-async";
import { PersonalPage } from "./pages/PersonalPage";
import { PrivacyPage } from "./pages/PrivacyPage";
import "./App.css"
import { Alimony, Divorce } from "./components/articles/Divorce";
import { Victim } from "./components/articles/Victim";
import { Inheritance } from "./components/articles/Inheritance";
import { Landing } from "./components/articles/Landing";
import { Housing } from "./components/articles/Housing";
import { Contract } from "./components/articles/Contract";
import { Admin } from "./components/articles/Admin";


function App() {
  return (
    <div>
      <Helmet>
        <html lang="uk" />
        <meta charSet='utf-8' />
        <title>Адвокат Львів | Юридична допомога | Ірина Судомляк</title>
        <meta name="title" content="Адвокат Львів | Юридична допомога | Ірина Судомляк" />
        <link rel='canonical' href='https://lawyer-help5.firebaseapp.com/' />
        <link
          rel='icon'
          href='https://live.staticflickr.com/65535/52692761711_ff5ec86e52_q.jpg'
        />
        <meta
          name='description'
          content='Професійна юридична допомога у Львові. Адвокат Ірина Судомляк надає послуги у вирішенні житлових спорів, спадкових справ, сімейних питань, земельних спорів, договірних правовідносин, адміністративних правопорушень, представництва інтересів потерпілих у кримінальному провадженні. Адвокат Львів недорого.'
        />
        <meta name="keywords" content="адвокат Львів, юридична допомога, адвокат Україна, сімейні спори, спадкові спори, житлові спори, земельні спори, кримінальне право, договірні правовідносини, адвокат недорого" />
        <meta name="author" content="Ірина Судомляк" />
        <meta name="robots" content="index, follow" />
        <meta property='og:locale' content='uk_UA' />
        <meta
          property='og:site_name'
          content='Юридична допомога - Адвокат Львів' />
        <meta property='og:type' content='website' />
        <meta property='og:title' content='Адвокат Львів | Юридична допомога | Ірина Судомляк' />
        <meta
          property='og:description'
          content='Професійна юридична допомога у Львові. Адвокат Ірина Судомляк надає кваліфіковані юридичні послуги.' />
        <meta
          property='og:url'
          content='https://lawyer-help5.firebaseapp.com/' />
        <meta property='og:image' content='https://lawyer-help5.firebaseapp.com/femida.jpg' />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Адвокат Львів | Юридична допомога" />
        <meta name="twitter:description" content="Професійна юридична допомога у Львові. Адвокат Ірина Судомляк." />
        <meta
          name='google-site-verification'
          content='Xr9roVGkagTpMZxBYqdhcVOfxbC1imUBtsMO1Y7xvd4'
        />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LegalService",
            "name": "Юридична допомога - Адвокат Ірина Судомляк",
            "description": "Професійна юридична допомога у Львові",
            "url": "https://lawyer-help5.firebaseapp.com/",
            "telephone": "+380933354154",
            "email": "sodo4ka@gmail.com",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Львів",
              "addressCountry": "UA"
            },
            "areaServed": {
              "@type": "City",
              "name": "Львів"
            },
            "priceRange": "$$"
          })}
        </script>
      </Helmet>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<HomePage />}></Route>
          <Route path='contacts' element={<ContactsPage />}></Route>
          <Route path='lawyer' element={<PersonalPage />}></Route>
          <Route path='privacy' element={<PrivacyPage />}></Route>
          <Route path='services' element={<ServicesPage />}>
            <Route path='criminal' element={<Victim />} />
            <Route path='divorce' element={<Divorce />} />
            <Route path='inheritance' element={<Inheritance />} />
            <Route path='landing' element={<Landing />} />
            <Route path='housing' element={<Housing />} />
            <Route path='contract' element={<Contract />} />
            <Route path='alimony' element={<Alimony />} />
            <Route path='admin' element={<Admin/>} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;

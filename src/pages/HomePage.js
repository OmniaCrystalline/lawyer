/** @format */

import { Home } from "../components/Home";
import { Helmet } from "react-helmet-async";

export const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>Головна | Адвокат Львів | Юридична допомога</title>
        <meta
          name='description'
          content='Професійна юридична допомога у Львові. Адвокат Ірина Судомляк надає кваліфіковані юридичні послуги: сімейні спори, спадкові спори, житлові спори, земельні спори, кримінальне право.'
        />
        <meta
          name='keywords'
          content='адвокат Львів, юридична допомога, адвокат Україна, сімейні спори, спадкові спори, житлові спори'
        />
        <link rel='canonical' href='https://lawyer-help5.firebaseapp.com/' />
        <meta
          property='og:title'
          content='Головна | Адвокат Львів | Юридична допомога'
        />
        <meta
          property='og:description'
          content='Професійна юридична допомога у Львові. Адвокат Ірина Судомляк.'
        />
        <meta
          property='og:url'
          content='https://lawyer-help5.firebaseapp.com/'
        />
      </Helmet>
      <Home />
    </>
  );
};

import { Contacts } from "../components/Contacts"
import { Helmet } from "react-helmet-async"

export const ContactsPage = () => {
    return(
        <>
            <Helmet>
                <title>Контакти | Адвокат Львів | Зв'яжіться з нами</title>
                <meta name="description" content="Контакти адвоката Ірини Судомляк у Львові. Телефон: +380 93 335 41 54. Email: sodo4ka@gmail.com. Telegram, Viber. Зв'яжіться для консультації." />
                <meta name="keywords" content="контакти адвоката Львів, телефон адвоката, адвокат Львів контакти" />
                <link rel="canonical" href="https://lawyer-help5.firebaseapp.com/contacts" />
                <meta property="og:title" content="Контакти | Адвокат Львів" />
                <meta property="og:description" content="Зв'яжіться з адвокатом Іриною Судомляк у Львові для консультації." />
                <meta property="og:url" content="https://lawyer-help5.firebaseapp.com/contacts" />
                <script type="application/ld+json">
                  {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "ContactPage",
                    "name": "Контакти адвоката",
                    "description": "Контакти адвоката Ірини Судомляк у Львові",
                    "url": "https://lawyer-help5.firebaseapp.com/contacts",
                    "mainEntity": {
                      "@type": "LegalService",
                      "telephone": "+380933354154",
                      "email": "sodo4ka@gmail.com"
                    }
                  })}
                </script>
            </Helmet>
            <Contacts/>
        </>
    )
}
import { Routes, Route } from "react-router";
import { Layout } from "./components/Layout";
import { ServicesPage } from '../src/pages/ServicesPage'
import { HomePage } from '../src/pages/HomePage'
import { ContactsPage } from "./pages/ContactsPage";


function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/' element={<HomePage/>}></Route>
          <Route path='/services' element={<ServicesPage />}></Route>
          <Route path='/contacts' element={<ContactsPage />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;

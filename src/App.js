import { Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import { LoginPage } from "./pages/LoginPage";
import { ForgotPasswordPage } from "./pages/ForgotPasswordPage";
import { ResetPasswordPage } from "./pages/ResetPasswordPage";
import { ToastContainer } from "react-toastify";

function App() {

  return (
    <Layout>
      <Routes>
        <Route path='/' element={<LoginPage/>}></Route>
        <Route path='forgot' element={<ForgotPasswordPage/>}></Route>
        <Route path='reset' element={<ResetPasswordPage/>}></Route>
      </Routes>

      <ToastContainer autoClose={5000} className="flex items-center text-center w-full max-w-xs p-2 mb-1 text-gray-500 bg-gray-200 rounded-lg shadow dark:text-gray-600 dark:bg-gray-800" position='bottom-right'/>
    </Layout>
  );
}

export default App;

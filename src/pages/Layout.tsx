import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Toasts from "../components/Toasts";

export default function Layout() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <Toasts />
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  )
}

import { Outlet } from "react-router-dom";
import { Navbar, Footer } from "../components";
function MyLayout() {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default MyLayout;

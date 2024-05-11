
import NavBar from "@/components/NavBar";
import "../../globals.css";
import TopBar from "@/components/TopBar";

export default function RootLayout({ children }) {
  return (
      <div>
        <TopBar/>
        <NavBar/>
        {children}
      </div>
   
  );
}


import NavBar from "@/components/NavBar";
import "../../globals.css";
import TopBar from "@/components/TopBar";
import { auth } from "@/auth";

export default async function RootLayout({ children }) {

  const session = await auth();

  return (
      <div>
        <TopBar session={session}/>
        <NavBar/>
        {children}
      </div>
   
  );
}

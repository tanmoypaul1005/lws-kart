import Banner from "@/components/home/Banner";
import Category from "@/components/home/Category";
import Features from "@/components/home/Features";
import NewArrival from "@/components/home/NewArrival";
import Trending from "@/components/home/Trending";
import NavBar from "@/components/NavBar";

import ProductCard from "@/components/ProductCard";
import TopBar from "@/components/TopBar";

export default function Home() {
  return (
    <main>
      <TopBar />
      <NavBar />
      <Banner />
      <Features />
      <Category />

      <NewArrival />

      <div className="container pb-16">
        {/* <a href="#">
          <img src="assets/images/offer.jpg" alt="ads" className="w-full" />
        </a> */}
      </div>

      <Trending/>
    </main>
  );
}

import Banner from "@/components/home/Banner";
import Category from "@/components/home/Category";
import Features from "@/components/home/Features";
import NewArrival from "@/components/home/NewArrival";
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
        <a href="#">
          <img src="assets/images/offer.jpg" alt="ads" className="w-full" />
        </a>
      </div>

      <div className="container pb-16">
        <h2 className="mb-6 text-2xl font-medium text-gray-800 uppercase">
          TRENDING PRODUCTS
        </h2>
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
    </main>
  );
}

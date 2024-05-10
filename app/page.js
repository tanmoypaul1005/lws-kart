import Banner from "@/components/home/Banner";
import Category from "@/components/home/Category";
import Features from "@/components/home/Features";
import NavBar from "@/components/NavBar";
import ProductCard from "@/components/ProductCard";
import TopBar from "@/components/TopBar";

export default function Home() {
  return (
    <main>
      <body>
        <TopBar />
        <NavBar />
        <Banner />
        <Features />
        <Category />

        <div className="container pb-16">
          <h2 className="text-2xl font-medium text-gray-800 uppercase mb-6">
            top new arrival
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>

        <div className="container pb-16">
          <a href="#">
            <img src="assets/images/offer.jpg" alt="ads" className="w-full" />
          </a>
        </div>

        <div className="container pb-16">
          <h2 className="text-2xl font-medium text-gray-800 uppercase mb-6">
            TRENDING PRODUCTS
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>
      </body>
    </main>
  );
}

import React from 'react';

const ProductDetails = () => {
    return (
<body>

    <header className="py-4 shadow-sm bg-white">
        <div className="container flex items-center justify-between">
            <a href="index.html">
                <img src="../assets/images/logo.svg" alt="Logo" className="w-32"/>
            </a>

            <div className="w-full max-w-xl relative flex">
                <span className="absolute left-4 top-3 text-lg text-gray-400">
                    <i className="fa-solid fa-magnifying-glass"></i>
                </span>
                <input type="text" name="search" id="search"
                    className="w-full border border-primary border-r-0 pl-12 py-3 pr-3 rounded-l-md focus:outline-none"
                    placeholder="search"/>
                <button
                    className="bg-primary border border-primary text-white px-8 rounded-r-md hover:bg-transparent hover:text-primary transition">Search</button>
            </div>

            <div className="flex items-center space-x-4">
                <a href="#" className="text-center text-gray-700 hover:text-primary transition relative">
                    <div className="text-2xl">
                        <i className="fa-regular fa-heart"></i>
                    </div>
                    <div className="text-xs leading-3">Wishlist</div>
                    <div
                        className="absolute right-0 -top-1 w-5 h-5 rounded-full flex items-center justify-center bg-primary text-white text-xs">
                        8</div>
                </a>
                <a href="#" className="text-center text-gray-700 hover:text-primary transition relative">
                    <div className="text-2xl">
                        <i className="fa-solid fa-bag-shopping"></i>
                    </div>
                    <div className="text-xs leading-3">Cart</div>
                    <div
                        className="absolute -right-3 -top-1 w-5 h-5 rounded-full flex items-center justify-center bg-primary text-white text-xs">
                        2</div>
                </a>
                <a href="#" className="text-center text-gray-700 hover:text-primary transition relative">
                    <div className="text-2xl">
                        <i className="fa-regular fa-user"></i>
                    </div>
                    <div className="text-xs leading-3">Account</div>
                </a>
            </div>
        </div>
    </header>

    <nav className="bg-gray-800">
        <div className="container flex">
            <div className="px-8 py-4 bg-primary flex items-center cursor-pointer relative group">
                <span className="text-white">
                    <i className="fa-solid fa-bars"></i>
                </span>
                <span className="capitalize ml-2 text-white">All Categories</span>

   
                <div
                    className="absolute w-full left-0 top-full bg-white shadow-md py-3 divide-y divide-gray-300 divide-dashed opacity-0 group-hover:opacity-100 transition duration-300 invisible group-hover:visible">
                    <a href="#" className="flex items-center px-6 py-3 hover:bg-gray-100 transition">
                        <img src="../assets/images/icons/sofa.svg" alt="sofa" className="w-5 h-5 object-contain"/>
                        <span className="ml-6 text-gray-600 text-sm">Sofa</span>
                    </a>
                    <a href="#" className="flex items-center px-6 py-3 hover:bg-gray-100 transition">
                        <img src="../assets/images/icons/terrace.svg" alt="terrace" className="w-5 h-5 object-contain"/>
                        <span className="ml-6 text-gray-600 text-sm">Terarce</span>
                    </a>
                    <a href="#" className="flex items-center px-6 py-3 hover:bg-gray-100 transition">
                        <img src="../assets/images/icons/bed.svg" alt="bed" className="w-5 h-5 object-contain"/>
                        <span className="ml-6 text-gray-600 text-sm">Bed</span>
                    </a>
                    <a href="#" className="flex items-center px-6 py-3 hover:bg-gray-100 transition">
                        <img src="../assets/images/icons/office.svg" alt="office" className="w-5 h-5 object-contain"/>
                        <span className="ml-6 text-gray-600 text-sm">office</span>
                    </a>
                    <a href="#" className="flex items-center px-6 py-3 hover:bg-gray-100 transition">
                        <img src="../assets/images/icons/outdoor-cafe.svg" alt="outdoor" className="w-5 h-5 object-contain"/>
                        <span className="ml-6 text-gray-600 text-sm">Outdoor</span>
                    </a>
                    <a href="#" className="flex items-center px-6 py-3 hover:bg-gray-100 transition">
                        <img src="../assets/images/icons/bed-2.svg" alt="Mattress" className="w-5 h-5 object-contain"/>
                        <span className="ml-6 text-gray-600 text-sm">Mattress</span>
                    </a>
                </div>
            </div>

            <div className="flex items-center justify-between flex-grow pl-12">
                <div className="flex items-center space-x-6 capitalize">
                    <a href="../index.html" className="text-gray-200 hover:text-white transition">Home</a>
                    <a href="pages/shop.html" className="text-gray-200 hover:text-white transition">Shop</a>
                    <a href="#" className="text-gray-200 hover:text-white transition">About us</a>
                    <a href="#" className="text-gray-200 hover:text-white transition">Contact us</a>
                </div>
                <a href="#" className="text-gray-200 hover:text-white transition">Login/Register</a>
            </div>
        </div>
    </nav>

    <div className="container py-4 flex items-center gap-3">
        <a href="../index.html" className="text-primary text-base">
            <i className="fa-solid fa-house"></i>
        </a>
        <span className="text-sm text-gray-400">
            <i className="fa-solid fa-chevron-right"></i>
        </span>
        <p className="text-gray-600 font-medium">Product</p>
    </div>

    <div className="container grid grid-cols-2 gap-6">
        <div>
            <img src="../assets/images/products/product1.jpg" alt="product" className="w-full"/>
            <div className="grid grid-cols-5 gap-4 mt-4">
                <img src="../assets/images/products/product2.jpg" alt="product2"
                    className="w-full cursor-pointer border border-primary"/>
                <img src="../assets/images/products/product3.jpg" alt="product2" className="w-full cursor-pointer border"/>
                <img src="../assets/images/products/product4.jpg" alt="product2" className="w-full cursor-pointer border"/>
                <img src="../assets/images/products/product5.jpg" alt="product2" className="w-full cursor-pointer border"/>
                <img src="../assets/images/products/product6.jpg" alt="product2" className="w-full cursor-pointer border"/>
            </div>
        </div>

        <div>
            <h2 className="text-3xl font-medium uppercase mb-2">Italian L Shape Sofa</h2>
            <div className="flex items-center mb-4">
                <div className="flex gap-1 text-sm text-yellow-400">
                    <span><i className="fa-solid fa-star"></i></span>
                    <span><i className="fa-solid fa-star"></i></span>
                    <span><i className="fa-solid fa-star"></i></span>
                    <span><i className="fa-solid fa-star"></i></span>
                    <span><i className="fa-solid fa-star"></i></span>
                </div>
                <div className="text-xs text-gray-500 ml-3">(150 Reviews)</div>
            </div>
            <div className="space-y-2">
                <p className="text-gray-800 font-semibold space-x-2">
                    <span>Availability: </span>
                    <span className="text-green-600">In Stock</span>
                </p>
                <p className="space-x-2">
                    <span className="text-gray-800 font-semibold">Brand: </span>
                    <span className="text-gray-600">Apex</span>
                </p>
                <p className="space-x-2">
                    <span className="text-gray-800 font-semibold">Category: </span>
                    <span className="text-gray-600">Sofa</span>
                </p>
                <p className="space-x-2">
                    <span className="text-gray-800 font-semibold">SKU: </span>
                    <span className="text-gray-600">BE45VGRT</span>
                </p>
            </div>
            <div className="flex items-baseline mb-1 space-x-2 font-roboto mt-4">
                <p className="text-xl text-primary font-semibold">$45.00</p>
                <p className="text-base text-gray-400 line-through">$55.00</p>
            </div>

            <p className="mt-4 text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos eius eum
                reprehenderit dolore vel mollitia optio consequatur hic asperiores inventore suscipit, velit
                consequuntur, voluptate doloremque iure necessitatibus adipisci magnam porro.</p>


            <div className="mt-4">
                <h3 className="text-sm text-gray-800 uppercase mb-1">Quantity</h3>
                <div className="flex border border-gray-300 text-gray-600 divide-x divide-gray-300 w-max">
                    <div className="h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none">-</div>
                    <div className="h-8 w-8 text-base flex items-center justify-center">4</div>
                    <div className="h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none">+</div>
                </div>
            </div>

            <div className="mt-6 flex gap-3 border-b border-gray-200 pb-5 pt-5">
                <a href="#"
                    className="bg-primary border border-primary text-white px-8 py-2 font-medium rounded uppercase flex items-center gap-2 hover:bg-transparent hover:text-primary transition">
                    <i className="fa-solid fa-bag-shopping"></i> Add to cart
                </a>
                <a href="#"
                    className="border border-gray-300 text-gray-600 px-8 py-2 font-medium rounded uppercase flex items-center gap-2 hover:text-primary transition">
                    <i className="fa-solid fa-heart"></i> Wishlist
                </a>
            </div>

            <div className="flex gap-3 mt-4">
                <a href="#"
                    className="text-gray-400 hover:text-gray-500 h-8 w-8 rounded-full border border-gray-300 flex items-center justify-center">
                    <i className="fa-brands fa-facebook-f"></i>
                </a>
                <a href="#"
                    className="text-gray-400 hover:text-gray-500 h-8 w-8 rounded-full border border-gray-300 flex items-center justify-center">
                    <i className="fa-brands fa-twitter"></i>
                </a>
                <a href="#"
                    className="text-gray-400 hover:text-gray-500 h-8 w-8 rounded-full border border-gray-300 flex items-center justify-center">
                    <i className="fa-brands fa-instagram"></i>
                </a>
            </div>
        </div>
    </div>

    <div className="container pb-16">
        <h3 className="border-b border-gray-200 font-roboto text-gray-800 pb-3 font-medium">Product details</h3>
        <div className="w-3/5 pt-6">
            <div className="text-gray-600">
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur necessitatibus deleniti natus
                    dolore cum maiores suscipit optio itaque voluptatibus veritatis tempora iste facilis non aut
                    sapiente dolor quisquam, ex ab.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, quae accusantium voluptatem
                    blanditiis sapiente voluptatum. Autem ab, dolorum assumenda earum veniam eius illo fugiat possimus
                    illum dolor totam, ducimus excepturi.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error quia modi ut expedita! Iure molestiae
                    labore cumque nobis quasi fuga, quibusdam rem? Temporibus consectetur corrupti rerum veritatis
                    numquam labore amet.</p>
            </div>

        </div>
    </div>

    <div className="container pb-16">
        <h2 className="text-2xl font-medium text-gray-800 uppercase mb-6">Related products</h2>
        <div className="grid grid-cols-4 gap-6">
            <div className="bg-white shadow rounded overflow-hidden group">
                <div className="relative">
                    <img src="../assets/images/products/product1.jpg" alt="product 1" className="w-full"/>
                    <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center 
                    justify-center gap-2 opacity-0 group-hover:opacity-100 transition">
                        <a href="#"
                            className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
                            title="view product">
                            <i className="fa-solid fa-magnifying-glass"></i>
                        </a>
                        <a href="#"
                            className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
                            title="add to wishlist">
                            <i className="fa-solid fa-heart"></i>
                        </a>
                    </div>
                </div>
                <div className="pt-4 pb-3 px-4">
                    <a href="#">
                        <h4 className="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition">Guyer
                            Chair</h4>
                    </a>
                    <div className="flex items-baseline mb-1 space-x-2">
                        <p className="text-xl text-primary font-semibold">$45.00</p>
                        <p className="text-sm text-gray-400 line-through">$55.90</p>
                    </div>
                    <div className="flex items-center">
                        <div className="flex gap-1 text-sm text-yellow-400">
                            <span><i className="fa-solid fa-star"></i></span>
                            <span><i className="fa-solid fa-star"></i></span>
                            <span><i className="fa-solid fa-star"></i></span>
                            <span><i className="fa-solid fa-star"></i></span>
                            <span><i className="fa-solid fa-star"></i></span>
                        </div>
                        <div className="text-xs text-gray-500 ml-3">(150)</div>
                    </div>
                </div>
                <a href="#"
                    className="block w-full py-1 text-center text-white bg-primary border border-primary rounded-b hover:bg-transparent hover:text-primary transition">Add
                    to cart</a>
            </div>
            <div className="bg-white shadow rounded overflow-hidden group">
                <div className="relative">
                    <img src="../assets/images/products/product4.jpg" alt="product 1" className="w-full"/>
                    <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center 
                    justify-center gap-2 opacity-0 group-hover:opacity-100 transition">
                        <a href="#"
                            className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
                            title="view product">
                            <i className="fa-solid fa-magnifying-glass"></i>
                        </a>
                        <a href="#"
                            className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
                            title="add to wishlist">
                            <i className="fa-solid fa-heart"></i>
                        </a>
                    </div>
                </div>
                <div className="pt-4 pb-3 px-4">
                    <a href="#">
                        <h4 className="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition">Bed
                            King Size</h4>
                    </a>
                    <div className="flex items-baseline mb-1 space-x-2">
                        <p className="text-xl text-primary font-semibold">$45.00</p>
                        <p className="text-sm text-gray-400 line-through">$55.90</p>
                    </div>
                    <div className="flex items-center">
                        <div className="flex gap-1 text-sm text-yellow-400">
                            <span><i className="fa-solid fa-star"></i></span>
                            <span><i className="fa-solid fa-star"></i></span>
                            <span><i className="fa-solid fa-star"></i></span>
                            <span><i className="fa-solid fa-star"></i></span>
                            <span><i className="fa-solid fa-star"></i></span>
                        </div>
                        <div className="text-xs text-gray-500 ml-3">(150)</div>
                    </div>
                </div>
                <a href="#"
                    className="block w-full py-1 text-center text-white bg-primary border border-primary rounded-b hover:bg-transparent hover:text-primary transition">Add
                    to cart</a>
            </div>
            <div className="bg-white shadow rounded overflow-hidden group">
                <div className="relative">
                    <img src="../assets/images/products/product2.jpg" alt="product 1" className="w-full"/>
                    <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center 
                    justify-center gap-2 opacity-0 group-hover:opacity-100 transition">
                        <a href="#"
                            className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
                            title="view product">
                            <i className="fa-solid fa-magnifying-glass"></i>
                        </a>
                        <a href="#"
                            className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
                            title="add to wishlist">
                            <i className="fa-solid fa-heart"></i>
                        </a>
                    </div>
                </div>
                <div className="pt-4 pb-3 px-4">
                    <a href="#">
                        <h4 className="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition">
                            Couple Sofa</h4>
                    </a>
                    <div className="flex items-baseline mb-1 space-x-2">
                        <p className="text-xl text-primary font-semibold">$45.00</p>
                        <p className="text-sm text-gray-400 line-through">$55.90</p>
                    </div>
                    <div className="flex items-center">
                        <div className="flex gap-1 text-sm text-yellow-400">
                            <span><i className="fa-solid fa-star"></i></span>
                            <span><i className="fa-solid fa-star"></i></span>
                            <span><i className="fa-solid fa-star"></i></span>
                            <span><i className="fa-solid fa-star"></i></span>
                            <span><i className="fa-solid fa-star"></i></span>
                        </div>
                        <div className="text-xs text-gray-500 ml-3">(150)</div>
                    </div>
                </div>
                <a href="#"
                    className="block w-full py-1 text-center text-white bg-primary border border-primary rounded-b hover:bg-transparent hover:text-primary transition">Add
                    to cart</a>
            </div>
            <div className="bg-white shadow rounded overflow-hidden group">
                <div className="relative">
                    <img src="../assets/images/products/product3.jpg" alt="product 1" className="w-full"/>
                    <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center 
                    justify-center gap-2 opacity-0 group-hover:opacity-100 transition">
                        <a href="#"
                            className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
                            title="view product">
                            <i className="fa-solid fa-magnifying-glass"></i>
                        </a>
                        <a href="#"
                            className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
                            title="add to wishlist">
                            <i className="fa-solid fa-heart"></i>
                        </a>
                    </div>
                </div>
                <div className="pt-4 pb-3 px-4">
                    <a href="#">
                        <h4 className="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition">
                            Mattrass X</h4>
                    </a>
                    <div className="flex items-baseline mb-1 space-x-2">
                        <p className="text-xl text-primary font-semibold">$45.00</p>
                        <p className="text-sm text-gray-400 line-through">$55.90</p>
                    </div>
                    <div className="flex items-center">
                        <div className="flex gap-1 text-sm text-yellow-400">
                            <span><i className="fa-solid fa-star"></i></span>
                            <span><i className="fa-solid fa-star"></i></span>
                            <span><i className="fa-solid fa-star"></i></span>
                            <span><i className="fa-solid fa-star"></i></span>
                            <span><i className="fa-solid fa-star"></i></span>
                        </div>
                        <div className="text-xs text-gray-500 ml-3">(150)</div>
                    </div>
                </div>
                <a href="#"
                    className="block w-full py-1 text-center text-white bg-primary border border-primary rounded-b hover:bg-transparent hover:text-primary transition">Add
                    to cart</a>
            </div>
        </div>
    </div>

    <footer className="bg-white pt-16 pb-12 border-t border-gray-100">
        <div className="container grid grid-cols-3">
            <div className="col-span-1 space-y-8 mr-2">
                <img src="../assets/images/logo.svg" alt="logo" className="w-30"/>
                <div className="mr-2">
                    <p className="text-gray-500">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, hic?
                    </p>
                </div>
                <div className="flex space-x-6">
                    <a href="#" className="text-gray-400 hover:text-gray-500"><i
                            className="fa-brands fa-facebook-square"></i></a>
                    <a href="#" className="text-gray-400 hover:text-gray-500"><i
                            className="fa-brands fa-instagram-square"></i></a>
                    <a href="#" className="text-gray-400 hover:text-gray-500"><i
                            className="fa-brands fa-twitter-square"></i></a>
                    <a href="#" className="text-gray-400 hover:text-gray-500">
                        <i className="fa-brands fa-github-square"></i>
                    </a>
                </div>
            </div>

            <div className="col-span-2 grid grid-cols-2 gap-8">
                <div className="grid grid-cols-2 gap-8">
                    <div>
                        <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Solutions</h3>
                        <div className="mt-4 space-y-4">
                            <a href="#" className="text-base text-gray-500 hover:text-gray-900 block">Marketing</a>
                            <a href="#" className="text-base text-gray-500 hover:text-gray-900 block">Analitycs</a>
                            <a href="#" className="text-base text-gray-500 hover:text-gray-900 block">Commerce</a>
                            <a href="#" className="text-base text-gray-500 hover:text-gray-900 block">Insights</a>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Support</h3>
                        <div className="mt-4 space-y-4">
                            <a href="#" className="text-base text-gray-500 hover:text-gray-900 block">Pricing</a>
                            <a href="#" className="text-base text-gray-500 hover:text-gray-900 block">Documentation</a>
                            <a href="#" className="text-base text-gray-500 hover:text-gray-900 block">Guides</a>
                            <a href="#" className="text-base text-gray-500 hover:text-gray-900 block">API Status</a>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-8">
                    <div>
                        <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Solutions</h3>
                        <div className="mt-4 space-y-4">
                            <a href="#" className="text-base text-gray-500 hover:text-gray-900 block">Marketing</a>
                            <a href="#" className="text-base text-gray-500 hover:text-gray-900 block">Analitycs</a>
                            <a href="#" className="text-base text-gray-500 hover:text-gray-900 block">Commerce</a>
                            <a href="#" className="text-base text-gray-500 hover:text-gray-900 block">Insights</a>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Support</h3>
                        <div className="mt-4 space-y-4">
                            <a href="#" className="text-base text-gray-500 hover:text-gray-900 block">Pricing</a>
                            <a href="#" className="text-base text-gray-500 hover:text-gray-900 block">Documentation</a>
                            <a href="#" className="text-base text-gray-500 hover:text-gray-900 block">Guides</a>
                            <a href="#" className="text-base text-gray-500 hover:text-gray-900 block">API Status</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>

    <div className="bg-gray-800 py-4">
        <div className="container flex items-center justify-between">
            <p className="text-white">&copy; TailCommerce - All Right Reserved</p>
            <div>
                <img src="../assets/images/methods.png" alt="methods" className="h-5"/>
            </div>
        </div>
    </div>



</body>
    );
};

export default ProductDetails;
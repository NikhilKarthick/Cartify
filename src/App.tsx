// src/App.tsx
import { useState } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { ShoppingCart } from "lucide-react";
import toast, { Toaster } from "react-hot-toast";

// Pages
import Home from "./pages/Home";
import Discounts from "./pages/Discounts";
import EventsPage from "./pages/EventsPage";
import ActionPage from "./pages/Action";
import AnotherActionPage from "./pages/AnotherAction";
import SomethingElsePage from "./pages/SomethingElse";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Cart from "./pages/Cart";
import ItemPageOne from "./pages/ItemPageOne";
import ItemPageTwo from "./extrapages/ItemPageTwo";
import ItemPageThree from "./extrapages/ItemPageThree";
import ItemPageFour from "./extrapages/ItemPageFour";
import ItemPageFive from "./extrapages/ItemPageFive";
import ItemPageSix from "./extrapages/ItemPageSix";
import Payment from "./pages/Payment";
import Summary from "./pages/Summary";

interface CartItem {
  title: string;
  price: string;
  image: string;
  [key: string]: unknown;
}

function App() {
  const location = useLocation();
  const navigate = useNavigate();

  const hideNavbarRoutes = ["/login", "/payment", "/summary"];
  const shouldHideNavbar = hideNavbarRoutes.includes(location.pathname);

  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [wishlistItems, setWishlistItems] = useState<CartItem[]>([]);
  const [selectedWishlist, setSelectedWishlist] = useState<number[]>([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userInitials, setUserInitials] = useState("A");

  const addToCart = (item: CartItem) => {
    setCartItems((prev) => [...prev, item]);
    toast.success(`${item.title} added to cart`);
  };

  const removeFromCart = (index: number) => {
    const itemTitle = cartItems[index]?.title;
    setCartItems((prev) => prev.filter((_, i) => i !== index));
    toast.success(`${itemTitle} removed from cart`);
  };

  const addToWishlist = (item: CartItem) => {
    setWishlistItems((prev) => [...prev, item]);
    toast.success(`${item.title} added to wishlist`);
  };

  const toggleWishlistSelection = (index: number) => {
    setSelectedWishlist((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const moveSelectedToCart = () => {
    const itemsToAdd = selectedWishlist.map((i) => wishlistItems[i]);
    setCartItems((prev) => [...prev, ...itemsToAdd]);
    setWishlistItems((prev) =>
      prev.filter((_, i) => !selectedWishlist.includes(i))
    );
    setSelectedWishlist([]);
    toast.success("Selected wishlist items moved to cart");
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white relative">
      <Toaster position="top-right" />

      {!shouldHideNavbar && (
        <Navbar
          logo={
            <span
              className="cursor-pointer"
              onClick={() => navigate("/home")}
            >
              Cartify
            </span>
          }
          navItems={[
            { label: "Home", href: "/home" },
            { label: "Discounts", href: "/discounts" },
            { label: "Events", href: "/events" },
            { label: "Disabled", href: "#", disabled: true },
          ]}
          rightContent={
            <form
              className="flex items-center space-x-3"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="text"
                placeholder="Search"
                className="px-2 py-1 rounded text-white border border-gray-400 bg-transparent placeholder-gray-400"
              />
              <button
                type="button"
                className="bg-green-500 px-3 py-1 rounded hover:bg-green-600 text-white"
              >
                Search
              </button>
              {!isLoggedIn ? (
                <button
                  type="button"
                  onClick={() => navigate("/login")}
                  className="bg-green-500 px-3 py-1 rounded hover:bg-green-400 text-white"
                >
                  Login
                </button>
              ) : (
                <div
                  className="w-8 h-8 flex items-center justify-center bg-gray-300 text-white rounded-full font-semibold"
                  title="Account"
                >
                  {userInitials}
                </div>
              )}
              <div className="relative">
                <button
                  type="button"
                  onClick={() => navigate("/cart")}
                  className="p-2 rounded hover:bg-gray-800 transition"
                  aria-label="Cart"
                >
                  <ShoppingCart className="w-5 h-5 text-white" />
                </button>
                {cartItems.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                    {cartItems.length}
                  </span>
                )}
              </div>
            </form>
          }
        />
      )}

      <main className="p-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/discounts" element={<Discounts />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/action" element={<ActionPage />} />
          <Route path="/another" element={<AnotherActionPage />} />
          <Route path="/something" element={<SomethingElsePage />} />
          <Route
            path="/login"
            element={
              <Login
                onLoginSuccess={(initials: string) => {
                  setIsLoggedIn(true);
                  setUserInitials(initials);
                  navigate("/home");
                }}
              />
            }
          />
          <Route path="/register" element={<Register />} />
          <Route
            path="/cart"
            element={
              <Cart
                cartItems={cartItems}
                wishlistItems={wishlistItems}
                removeFromCart={removeFromCart}
                toggleWishlistSelection={toggleWishlistSelection}
                selectedWishlist={selectedWishlist}
                moveSelectedToCart={moveSelectedToCart}
              />
            }
          />
          <Route path="/payment" element={<Payment />} />
          <Route
            path="/summary"
            element={
              <Summary
                cartItems={cartItems}
                clearCart={() => setCartItems([])}
              />
            }
          />
          <Route
            path="/discounts/1"
            element={
              <ItemPageOne
                addToCart={addToCart}
                addToWishlist={addToWishlist}
              />
            }
          />
          <Route
            path="/discounts/2"
            element={
              <ItemPageTwo
                addToCart={addToCart}
                addToWishlist={addToWishlist}
              />
            }
          />
          <Route
            path="/discounts/3"
            element={
              <ItemPageThree
                addToCart={addToCart}
                addToWishlist={addToWishlist}
              />
            }
          />
          <Route
            path="/discounts/4"
            element={
              <ItemPageFour
                addToCart={addToCart}
                addToWishlist={addToWishlist}
              />
            }
          />
          <Route
            path="/discounts/5"
            element={
              <ItemPageFive
                addToCart={addToCart}
                addToWishlist={addToWishlist}
              />
            }
          />
          <Route
            path="/discounts/6"
            element={
              <ItemPageSix
                addToCart={addToCart}
                addToWishlist={addToWishlist}
              />
            }
          />
        </Routes>
      </main>
    </div>
  );
}

export default App;

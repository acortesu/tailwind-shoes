import { useEffect, useState } from "react";
import { Nav } from "./components/Nav";
import { NewArrivalSection } from "./components/NewArrivalSection";
import { ShoeDetail } from "./components/ShoeDetail";
import { Sidebar } from "./components/Sidebar";
import { SHOE_LIST } from "./constant";
import { Cart } from "./components/Cart";
import { BiMoon, BiSun } from "react-icons/bi"

export function App() {

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [currentShoe, setCurrentShoe] = useState(SHOE_LIST[0])
  const [cartItems, setCartItems] = useState([])


  useEffect(() => {
    const isDarkMode = localStorage.getItem("isDarkMode")
    if (isDarkMode === "true") {
      window.document.documentElement.classList.add("dark");
    }
  });

  const toggleDarkMode = () => {
    window.document.documentElement.classList.toggle("dark");

    localStorage.setItem(
      "isDarkMode",
      window.document.documentElement.classList.contains("dark"),
    );
  };

  const addToCart = (product, qty, size) => {
    if (qty && size) {
      const updatedCartItems = [...cartItems]
      const existingItemsIndex = cartItems.findIndex(item => item.product.id === product.id)
      if (existingItemsIndex > -1) {
        updatedCartItems[existingItemsIndex].qty = qty
        updatedCartItems[existingItemsIndex].size = size
      } else {
        updatedCartItems.push({ product, qty, size });
      }

      setCartItems(updatedCartItems);
    }
  }

  const removeFromCart = (productId) => {
    const updatedCartItems = [...cartItems];
    const existingItemsIndex = cartItems.findIndex(item => item.product.id === productId);
    updatedCartItems.splice(existingItemsIndex, 1);
    setCartItems(updatedCartItems);

  }

  return (
    <div className="animate-fadeIn p-10 xl:px-24 dark:bg-night">
      <Nav onClickShoppingBtn={() => setIsSidebarOpen(true)} />
      <ShoeDetail shoe={currentShoe} onClickAdd={addToCart} />
      <NewArrivalSection items={SHOE_LIST} onClickCard={setCurrentShoe} />
      <Sidebar
        isOpen={isSidebarOpen}
        onClickClose={() => setIsSidebarOpen(false)} >
        <Cart
          cartItems={cartItems}
          onClickTrash={removeFromCart} />
      </Sidebar>
      <div className="fixed bottom-4 right-4">
        <button
          onClick={toggleDarkMode}
          className="shadow-lg bg-night-50 text-white px-4 py-2 rounded-full dark:bg-white dark:text-night-50">
          <BiSun className="hidden dark:block" />
          <BiMoon className="dark:hidden" />
        </button>

      </div>
    </div>
  );
}

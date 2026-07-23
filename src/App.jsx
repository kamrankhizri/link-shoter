import { useEffect, useState } from "react";
import axios from "axios";
import { AnimatePresence, motion } from "framer-motion";
import ItemForm from "./ItemForm";
import ItemCard from "./ItemCard";

const API_URL = "http://localhost:5000/items";

export default function App() {
  const [items, setItems] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios.get(API_URL).then((res) => {
      console.log(res.data);
      setItems(res.data.data);
    });
  }, []);

  const handleAddItem = async (newItem) => {
    const res = await axios.post(API_URL, newItem);
    setItems((prevItems) => [res.data.data, ...prevItems]);
  };

  const handleDelete = async (id) => {
    await axios.delete(`${API_URL}/${id}`);
    setItems((prevItems) => prevItems.filter((item) => item._id !== id));
  };

  const filteredItems = items.filter((item) =>
    item.name?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900 text-white p-6 md:p-12">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <header className="mb-10 text-center">
          <h1 className="text-5xl font-extrabold bg-gradient-to-r from-cyan-400 via-sky-300 to-purple-400 bg-clip-text text-transparent">
            Inventory Dashboard
          </h1>

          <p className="text-slate-300 mt-3 text-lg">
            Manage stock levels, original prices, and special sale offers.
          </p>
        </header>

        {/* Search Box */}
        <div className="mb-8">
          <input
            type="text"
            placeholder="🔍 Search by item name..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="
              w-full
              px-5
              py-3
              rounded-2xl
              bg-white/10
              backdrop-blur-lg
              border border-white/20
              text-white
              placeholder:text-slate-400
              shadow-lg
              outline-none
              transition-all
              duration-300
              focus:border-cyan-400
              focus:ring-2
              focus:ring-cyan-400/50
            "
          />
        </div>

        {/* Add Item Form */}
        <ItemForm onItemAdded={handleAddItem} />

        {/* Item Cards */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10"
        >
          <AnimatePresence>
            {filteredItems.map((item) => (
              <ItemCard
                key={item._id}
                item={item}
                onDelete={handleDelete}
              />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
}
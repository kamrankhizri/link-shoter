import { useState } from "react";
import { motion } from "framer-motion";
import { PlusCircle } from "lucide-react";

export default function ItemForm({ onItemAdded }) {
  const [form, setForm] = useState({
    name: "",
    quantity: "",
    originalPrice: "",
    salePrice: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name) return;
    onItemAdded(form);
    setForm({
      name: "",
      quantity: "",
      originalPrice: "",
      salePrice: "",
    });
  };

  return (
    <motion.form
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      onSubmit={handleSubmit}
      className="
        bg-white/10
        backdrop-blur-xl
        border border-white/20
        shadow-2xl
        rounded-3xl
        p-6
        mb-10
        grid
        grid-cols-1
        md:grid-cols-2
        lg:grid-cols-5
        gap-4
      "
    >
      <input
        type="text"
        placeholder="Item Name"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
        className="
          px-4
          py-3
          rounded-xl
          bg-white/5
          border
          border-white/20
          text-white
          placeholder:text-slate-400
          outline-none
          backdrop-blur-md
          transition-all
          duration-300
          focus:border-cyan-400
          focus:ring-2
          focus:ring-cyan-400/40
        "
        required
      />

      <input
        type="number"
        placeholder="Quantity"
        value={form.quantity}
        onChange={(e) => setForm({ ...form, quantity: e.target.value })}
        className="
          px-4
          py-3
          rounded-xl
          bg-white/5
          border
          border-white/20
          text-white
          placeholder:text-slate-400
          outline-none
          backdrop-blur-md
          transition-all
          duration-300
          focus:border-cyan-400
          focus:ring-2
          focus:ring-cyan-400/40
        "
      />

      <input
        type="number"
        placeholder="Original Price ($)"
        value={form.originalPrice}
        onChange={(e) =>
          setForm({ ...form, originalPrice: e.target.value })
        }
        className="
          px-4
          py-3
          rounded-xl
          bg-white/5
          border
          border-white/20
          text-white
          placeholder:text-slate-400
          outline-none
          backdrop-blur-md
          transition-all
          duration-300
          focus:border-cyan-400
          focus:ring-2
          focus:ring-cyan-400/40
        "
      />

      <input
        type="number"
        placeholder="Sale Price ($) [Optional]"
        value={form.salePrice}
        onChange={(e) =>
          setForm({ ...form, salePrice: e.target.value })
        }
        className="
          px-4
          py-3
          rounded-xl
          bg-white/5
          border
          border-white/20
          text-white
          placeholder:text-slate-400
          outline-none
          backdrop-blur-md
          transition-all
          duration-300
          focus:border-cyan-400
          focus:ring-2
          focus:ring-cyan-400/40
        "
      />

      <motion.button
        whileHover={{
          scale: 1.05,
          boxShadow: "0px 0px 25px rgba(56,189,248,0.45)",
        }}
        whileTap={{ scale: 0.96 }}
        type="submit"
        className="
          flex
          items-center
          justify-center
          gap-2
          rounded-xl
          py-3
          font-semibold
          text-white
          bg-gradient-to-r
          from-cyan-500
          via-sky-500
          to-purple-600
          shadow-lg
          shadow-cyan-500/30
          transition-all
          duration-300
        "
      >
        <PlusCircle size={18} />
        Add Item
      </motion.button>
    </motion.form>
  );
}
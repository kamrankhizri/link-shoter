import { motion } from "framer-motion";
import { Trash2, Tag } from "lucide-react";

export default function ItemCard({ item, onDelete }) {
  const hasSale = item.salePrice !== null && item.salePrice !== undefined;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      whileHover={{
        y: -10,
        scale: 1.03,
      }}
      className="
        relative
        overflow-hidden
        rounded-3xl
        bg-white/20
        backdrop-blur-2xl
        border
        border-white/30
        shadow-[0_20px_60px_rgba(0,0,0,0.35)]
        hover:shadow-[0_25px_70px_rgba(56,189,248,0.25)]
        p-6
        flex
        flex-col
        justify-between
        transition-all
        duration-500
      "
    >
      {/* Background Glow */}
      <div className="absolute -top-16 -right-16 h-40 w-40 rounded-full bg-cyan-400/15 blur-3xl"></div>
      <div className="absolute -bottom-16 -left-16 h-40 w-40 rounded-full bg-violet-400/15 blur-3xl"></div>

      <div className="relative z-10">
        {/* Item Name */}
        <h3 className="text-2xl font-bold text-white tracking-wide mb-3">
          {item.name}
        </h3>

        {/* Stock */}
        <p className="text-sm text-slate-200 mb-6">
          Stock
          <span className="ml-3 inline-flex items-center rounded-full border border-cyan-300/20 bg-white/15 px-3 py-1 font-semibold text-cyan-200">
            {item.quantity} pcs
          </span>
        </p>

        {/* Price */}
        <div className="flex flex-wrap items-center gap-3">
          {hasSale ? (
            <>
              <div className="flex items-center gap-2 rounded-2xl border border-emerald-300/20 bg-gradient-to-r from-emerald-500/20 to-green-500/20 px-4 py-2">
                <Tag size={16} className="text-emerald-300" />
                <span className="text-2xl font-bold text-emerald-300">
                  Rs {item.salePrice}
                </span>
              </div>

              <span className="text-lg text-slate-400 line-through">
                Rs {item.originalPrice}
              </span>
            </>
          ) : (
            <div className="flex items-center gap-2 rounded-2xl border border-cyan-300/20 bg-gradient-to-r from-cyan-500/20 to-sky-500/20 px-4 py-2">
              <Tag size={16} className="text-cyan-300" />
              <span className="text-2xl font-bold text-cyan-300">
                Rs {item.originalPrice}
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Delete Button */}
      <div className="relative z-10 mt-6 flex justify-end border-t border-white/15 pt-4">
        <motion.button
          whileHover={{
            scale: 1.12,
            rotate: -10,
          }}
          whileTap={{ scale: 0.9 }}
          onClick={() => onDelete(item._id)}
          className="
            rounded-2xl
            border
            border-white/20
            bg-white/10
            p-3
            text-rose-300
            shadow-lg
            transition-all
            duration-300
            hover:border-rose-400
            hover:bg-rose-500
            hover:text-white
            hover:shadow-rose-500/40
          "
        >
          <Trash2 size={18} />
        </motion.button>
      </div>
    </motion.div>
  );
}
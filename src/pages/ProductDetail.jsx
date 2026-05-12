import { useParams, useNavigate } from "react-router-dom";
import {
  FaArrowLeft,
  FaTag,
  FaLayerGroup,
  FaWarehouse,
} from "react-icons/fa";

import products from "../data/products";

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const product = products.find(
    (p) => p.id === Number(id)
  );

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#F8F9FB]">

        <h1 className="text-4xl font-bold text-red-500 mb-4">
          Product Not Found
        </h1>

        <button
          onClick={() => navigate("/product")}
          className="px-5 py-3 rounded-2xl bg-green-500 text-white hover:bg-green-600 transition"
        >
          Back to Product
        </button>

      </div>
    );
  }

  const stockStyle =
    product.stock > 20
      ? "bg-green-100 text-green-700"
      : product.stock > 10
      ? "bg-yellow-100 text-yellow-700"
      : "bg-red-100 text-red-600";

  return (
    <div className="min-h-screen bg-[#F8F9FB] p-6">

      {/* HEADER */}
      <div className="flex items-center justify-between mb-8">

        <div>
          <h1 className="text-3xl font-bold text-gray-800">
            Product Detail
          </h1>

          <p className="text-gray-400 mt-1">
            Complete information about selected product
          </p>
        </div>

        <button
          onClick={() => navigate("/product")}
          className="flex items-center gap-2 bg-white border border-gray-200 px-5 py-3 rounded-2xl hover:bg-gray-50 transition"
        >
          <FaArrowLeft />
          Back
        </button>

      </div>

      {/* MAIN CARD */}
      <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">

        {/* TOP */}
        <div className="grid lg:grid-cols-2 gap-10 p-8">

          {/* IMAGE */}
          <div className="bg-[#F8F9FB] rounded-3xl flex items-center justify-center p-6">

            <img
              src={product.image}
              alt={product.title}
              className="w-full max-w-md h-80 object-cover rounded-2xl"
            />

          </div>

          {/* INFO */}
          <div className="flex flex-col justify-center">

            <span className="text-green-500 font-semibold uppercase tracking-wider text-sm mb-3">
              {product.category}
            </span>

            <h1 className="text-5xl font-bold text-gray-800 leading-tight">
              {product.title}
            </h1>

            <p className="text-gray-400 mt-4 text-lg">
              Product Code : {product.code}
            </p>

            <h2 className="text-4xl font-bold text-green-600 mt-6">
              Rp {product.price.toLocaleString()}
            </h2>

            <div className="mt-6">

              <span
                className={`px-5 py-3 rounded-xl text-sm font-semibold ${stockStyle}`}
              >
                {product.stock} Items Available
              </span>

            </div>

          </div>

        </div>

        {/* INFO CARD */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 px-8 pb-8">

          {/* CATEGORY */}
          <div className="bg-[#F8F9FB] rounded-2xl p-5 border border-gray-100">

            <div className="flex items-center gap-4">

              <div className="w-12 h-12 rounded-xl bg-green-100 text-green-600 flex items-center justify-center">
                <FaLayerGroup />
              </div>

              <div>

                <p className="text-sm text-gray-400">
                  Category
                </p>

                <h2 className="font-bold text-gray-800">
                  {product.category}
                </h2>

              </div>

            </div>

          </div>

          {/* BRAND */}
          <div className="bg-[#F8F9FB] rounded-2xl p-5 border border-gray-100">

            <div className="flex items-center gap-4">

              <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center">
                <FaTag />
              </div>

              <div>

                <p className="text-sm text-gray-400">
                  Brand
                </p>

                <h2 className="font-bold text-gray-800">
                  {product.brand}
                </h2>

              </div>

            </div>

          </div>

          {/* STOCK */}
          <div className="bg-[#F8F9FB] rounded-2xl p-5 border border-gray-100">

            <div className="flex items-center gap-4">

              <div className="w-12 h-12 rounded-xl bg-red-100 text-red-500 flex items-center justify-center">
                <FaWarehouse />
              </div>

              <div>

                <p className="text-sm text-gray-400">
                  Stock
                </p>

                <h2 className="font-bold text-gray-800">
                  {product.stock} PCS
                </h2>

              </div>

            </div>

          </div>

        </div>

        {/* DESCRIPTION */}
        <div className="px-8 pb-8">

          <div className="bg-[#F8F9FB] rounded-3xl p-7 border border-gray-100">

            <h1 className="text-2xl font-bold text-green-600 mb-4">
              Product Information
            </h1>

            <p className="text-gray-600 leading-relaxed">

              <span className="font-semibold text-gray-800">
                {product.title}
              </span>{" "}
              is one of the premium products from{" "}
              <span className="font-semibold text-gray-800">
                {product.brand}
              </span>
              . This product belongs to the{" "}
              <span className="font-semibold text-gray-800">
                {product.category}
              </span>{" "}
              category and currently has{" "}
              <span className="font-semibold text-gray-800">
                {product.stock} items
              </span>{" "}
              available in stock.

            </p>

          </div>

        </div>

      </div>

    </div>
  );
}
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AddProduct() {

  const navigate = useNavigate();

  const [form, setForm] = useState({
    title: "",
    code: "",
    category: "",
    brand: "",
    price: "",
    stock: "",
  });

  const [error, setError] = useState("");

  // HANDLE INPUT
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  // HANDLE SUBMIT
  const handleSubmit = (e) => {
    e.preventDefault();

    // VALIDASI
    if (
      !form.title ||
      !form.code ||
      !form.category ||
      !form.brand ||
      !form.price ||
      !form.stock
    ) {
      setError("Semua field wajib diisi!");
      return;
    }

    console.log("DATA PRODUCT:", form);

    // kembali ke halaman product
    navigate("/product");
  };

  return (
    <div className="max-w-2xl mx-auto bg-white p-6 rounded-2xl shadow">

      <h1 className="text-2xl font-semibold mb-4">
        Add Product
      </h1>

      {error && (
        <div className="mb-3 text-red-500 text-sm">
          {error}
        </div>
      )}

      <form
        onSubmit={handleSubmit}
        className="space-y-4"
      >

        {/* TITLE */}
        <div>
          <label className="text-sm text-gray-600">
            Product Title
          </label>

          <input
            type="text"
            name="title"
            value={form.title}
            onChange={handleChange}
            placeholder="Enter product title"
            className="w-full mt-1 border px-3 py-2 rounded-lg focus:ring-2 focus:ring-green-400 outline-none"
          />
        </div>

        {/* CODE */}
        <div>
          <label className="text-sm text-gray-600">
            Product Code
          </label>

          <input
            type="text"
            name="code"
            value={form.code}
            onChange={handleChange}
            placeholder="Contoh: PRD-101"
            className="w-full mt-1 border px-3 py-2 rounded-lg focus:ring-2 focus:ring-green-400 outline-none"
          />
        </div>

        {/* CATEGORY */}
        <div>
          <label className="text-sm text-gray-600">
            Category
          </label>

          <select
            name="category"
            value={form.category}
            onChange={handleChange}
            className="w-full mt-1 border px-3 py-2 rounded-lg focus:ring-2 focus:ring-green-400 outline-none"
          >
            <option value="">Select Category</option>
            <option>Mouse</option>
            <option>Keyboard</option>
            <option>Monitor</option>
            <option>Headset</option>
          </select>
        </div>

        {/* BRAND */}
        <div>
          <label className="text-sm text-gray-600">
            Brand
          </label>

          <input
            type="text"
            name="brand"
            value={form.brand}
            onChange={handleChange}
            placeholder="Enter product brand"
            className="w-full mt-1 border px-3 py-2 rounded-lg focus:ring-2 focus:ring-green-400 outline-none"
          />
        </div>

        {/* PRICE */}
        <div>
          <label className="text-sm text-gray-600">
            Price
          </label>

          <input
            type="text"
            name="price"
            value={form.price}
            onChange={handleChange}
            placeholder="Contoh: Rp 500000"
            className="w-full mt-1 border px-3 py-2 rounded-lg focus:ring-2 focus:ring-green-400 outline-none"
          />
        </div>

        {/* STOCK */}
        <div>
          <label className="text-sm text-gray-600">
            Stock
          </label>

          <input
            type="number"
            name="stock"
            value={form.stock}
            onChange={handleChange}
            placeholder="Enter stock"
            className="w-full mt-1 border px-3 py-2 rounded-lg focus:ring-2 focus:ring-green-400 outline-none"
          />
        </div>

        {/* BUTTON */}
        <div className="flex justify-end gap-2 pt-4">

          <button
            type="button"
            onClick={() => navigate("/product")}
            className="px-4 py-2 border rounded-lg"
          >
            Cancel
          </button>

          <button
            type="submit"
            className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
          >
            Save Product
          </button>

        </div>

      </form>
    </div>
  );
}
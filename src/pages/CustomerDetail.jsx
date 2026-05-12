import { useParams, useNavigate } from "react-router-dom";
import {
  FaArrowLeft,
  FaEnvelope,
  FaPhone,
  FaCrown,
} from "react-icons/fa";

import customers from "../data/customers";

export default function CustomerDetail() {

  const { id } = useParams();
  const navigate = useNavigate();

  const customer = customers.find(
    (c) => c.id === Number(id)
  );

  if (!customer) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-3xl font-bold text-red-500">
          Customer Not Found
        </h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F8F9FB] p-6">

      {/* HEADER */}
      <div className="flex justify-between items-center mb-8">

        <div>

          <h1 className="text-3xl font-bold text-gray-800">
            Customer Detail
          </h1>

          <p className="text-gray-400 mt-1">
            Complete customer information
          </p>

        </div>

        <button
          onClick={() => navigate("/customers")}
          className="flex items-center gap-2 bg-white border border-gray-200 px-5 py-3 rounded-2xl shadow-sm hover:bg-gray-50 transition"
        >
          <FaArrowLeft />
          Back
        </button>

      </div>

      {/* CARD */}
      <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">

        {/* TOP */}
        <div className="bg-gradient-to-r from-green-500 to-emerald-400 p-10 text-white">

          <div className="flex flex-col md:flex-row items-center gap-10">

            <img
              src={customer.image}
              alt={customer.name}
              className="w-48 h-48 rounded-full object-cover border-4 border-white shadow-xl"
            />

            <div>

              <h1 className="text-5xl font-bold">
                {customer.name}
              </h1>

              <p className="mt-3 text-green-50 text-lg">
                Customer ID : #{customer.id}
              </p>

              <div className="mt-6 inline-flex items-center gap-2 bg-white/20 px-5 py-3 rounded-2xl">

                <FaCrown />

                <span className="font-semibold">
                  {customer.loyalty} Member
                </span>

              </div>

            </div>

          </div>

        </div>

        {/* CONTENT */}
        <div className="grid md:grid-cols-2 gap-6 p-8">

          {/* EMAIL */}
          <div className="bg-[#F8F9FB] rounded-2xl p-6 border border-gray-100">

            <div className="flex items-center gap-4">

              <div className="w-14 h-14 rounded-2xl bg-blue-100 text-blue-500 flex items-center justify-center text-xl">
                <FaEnvelope />
              </div>

              <div>

                <p className="text-sm text-gray-400">
                  Email Address
                </p>

                <h2 className="text-lg font-bold text-gray-800">
                  {customer.email}
                </h2>

              </div>

            </div>

          </div>

          {/* PHONE */}
          <div className="bg-[#F8F9FB] rounded-2xl p-6 border border-gray-100">

            <div className="flex items-center gap-4">

              <div className="w-14 h-14 rounded-2xl bg-green-100 text-green-500 flex items-center justify-center text-xl">
                <FaPhone />
              </div>

              <div>

                <p className="text-sm text-gray-400">
                  Phone Number
                </p>

                <h2 className="text-lg font-bold text-gray-800">
                  {customer.phone}
                </h2>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}
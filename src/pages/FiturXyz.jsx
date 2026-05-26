import PageHeader from "../components/PageHeader";

export default function FiturXyz() {
  return (
    <div className="p-6 bg-[#F8F9FB] min-h-screen">
      <PageHeader title="Fitur Xyz" breadcrumb={["Dashboard", "Order List"]} />

      <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-6">
        <p className="text-gray-600">Ini Halaman Fitur Xyz</p>
      </div>
    </div>
  );
}

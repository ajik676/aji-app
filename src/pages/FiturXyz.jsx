import PageHeader from "../components/PageHeader";

function SampleTable({ index }) {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4 mb-6">
      <h2 className="text-lg font-semibold text-gray-800 mb-3">
        Table {index}
      </h2>

      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead className="bg-gray-50 text-gray-600">
            <tr>
              <th className="px-4 py-2">ID</th>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Category</th>
              <th className="px-4 py-2">Price</th>
            </tr>
          </thead>

          <tbody>
            {[1, 2, 3].map((r) => (
              <tr
                key={r}
                className="border-t border-gray-100 hover:bg-green-50/30"
              >
                <td className="px-4 py-3 text-gray-600">
                  #{index}-{r}
                </td>
                <td className="px-4 py-3 text-gray-800">
                  Item {index}-{r}
                </td>
                <td className="px-4 py-3 text-gray-600">
                  Category {((r + index) % 3) + 1}
                </td>
                <td className="px-4 py-3 text-gray-800">
                  Rp {((r + index) * 10000).toLocaleString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default function FiturXyz() {
  return (
    <div className="p-6 bg-[#F8F9FB] min-h-screen">
      <PageHeader title="Fitur Xyz" breadcrumb={["Dashboard", "Order List"]} />

      <div className="mt-6">
        {Array.from({ length: 10 }).map((_, i) => (
          <SampleTable key={i} index={i + 1} />
        ))}
      </div>
    </div>
  );
}

import PageHeader from "../components/PageHeader";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/ui/Card";

function SampleTable({ index }) {
  const rows = [
    {
      title: "Evaluasi & Standardisasi Program Makan Gratis (MBG)",
      category: "Sosial / Kebijakan Publik",
      summary:
        "Badan Gizi Nasional memperketat evaluasi anggaran dan operasional program, beberapa unit sempat ditangguhkan demi menjaga standar kualitas dan gizi.",
      impact:
        "Sorotan terhadap pemotongan anggaran, kualitas gizi, dan keberlanjutan program jangka panjang.",
    },
    {
      title: "Fluktuasi Nilai Tukar Rupiah & Stabilitas Keuangan",
      category: "Ekonomi / Moneter",
      summary:
        "Nilai tukar Rupiah mengalami tekanan; kebijakan BI dan fiskal mempengaruhi arus impor dan cadangan devisa.",
      impact:
        "Kenaikan biaya impor dan tekanan pada harga barang pokok berdampak pada daya beli masyarakat.",
    },
    {
      title: "Efisiensi BUMN & Pemangkasan Anak Usaha",
      category: "Ekonomi / Korporasi",
      summary:
        "Program restrukturisasi BUMN berlangsung, termasuk merger dan pemangkasan anak usaha untuk meningkatkan efisiensi.",
      impact:
        "Berpotensi mempengaruhi tenaga kerja, layanan publik, dan kinerja keuangan negara.",
    },
    {
      title: "Ketinggian Capaian Penurunan Stunting",
      category: "Kesehatan",
      summary:
        "Data terbaru menunjukkan penurunan stunting di beberapa daerah, namun distribusi belum merata antara wilayah.",
      impact:
        "Menjadi fokus kebijakan publik untuk pemerataan layanan kesehatan dan gizi.",
    },
    {
      title: "Kasus Korupsi Komoditas / CPO (Minyak Goreng)",
      category: "Hukum / Korupsi",
      summary:
        "Kasus besar terkait tata niaga CPO berujung pada penyidikan pejabat dan pelaku usaha, menimbulkan sorotan publik.",
      impact:
        "Menurunkan kepercayaan publik dan mendorong tuntutan transparansi pada rantai pasok komoditas strategis.",
    },
  ];

  return (
    <Card className="mb-6">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold text-gray-800">
              10 Isu Terhot di Indonesia (Mei 2026) — Seri {index}
            </h3>
            <p className="text-xs text-gray-500">
              Daftar tren pemberitaan nasional, dinamika kebijakan publik, dan
              sorotan sosial-ekonomi terkini.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Badge>Top 10</Badge>
            <Button variant="outline">Export</Button>
            <Button variant="destructive">Hapus</Button>
          </div>
        </div>
      </CardHeader>

      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="text-xs text-gray-600 bg-gray-50">
                <th className="px-3 py-3 w-12">NO</th>
                <th className="px-3 py-3">NAMA ISU / TOPIK</th>
                <th className="px-3 py-3 w-48">KATEGORI</th>
                <th className="px-3 py-3">
                  RINGKASAN KONTEKS & DINAMIKA TERKINI
                </th>
                <th className="px-3 py-3 w-72">
                  DAMPAK / FOKUS UTAMA MASYARAKAT
                </th>
              </tr>
            </thead>

            <tbody>
              {rows.map((r, i) => (
                <tr
                  key={i}
                  className="align-top border-t border-gray-100 hover:bg-green-50/30"
                >
                  <td className="px-3 py-4 text-gray-700">{i + 1}</td>
                  <td className="px-3 py-4 text-gray-800 font-semibold">
                    {r.title}
                  </td>
                  <td className="px-3 py-4 text-sm">
                    <Badge variant="default">{r.category}</Badge>
                  </td>
                  <td className="px-3 py-4 text-gray-600">{r.summary}</td>
                  <td className="px-3 py-4 text-gray-700">{r.impact}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>

      <CardFooter>
        <div className="flex justify-end gap-3">
          <Button variant="ghost">Kembali</Button>
          <Button variant="default">Simpan</Button>
        </div>
      </CardFooter>
    </Card>
  );
}

export default function FiturXyz() {
  return (
    <div className="p-6 bg-[#F8F9FB] min-h-screen">
      <PageHeader title="Fitur Xyz" breadcrumb={["Dashboard", "Order List"]} />

      {/* Button variants demo (outline, ghost, destructive) */}
      <div className="mt-4 mb-6 flex items-center gap-3">
        <Button variant="outline">Batal</Button>
        <Button variant="ghost">Batal</Button>
        <Button variant="destructive">Batal</Button>
      </div>

      <div className="mt-6">
        {Array.from({ length: 10 }).map((_, i) => (
          <SampleTable key={i} index={i + 1} />
        ))}
      </div>
    </div>
  );
}

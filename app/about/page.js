export default function aboutPage() {
  const highlights = [
    { id: 1, title: "Simple UI", detail: "Built with clean and easy-to-read layout" },
    { id: 2, title: "Fast Learning", detail: "Practicing React and Next.js step by step" },
    { id: 3, title: "Useful Data", detail: "Showing everyday grocery prices clearly" },
  ];

  return (
    <div className="min-h-screen bg-slate-50 py-10 px-4">
      <div className="max-w-xl mx-auto bg-white rounded-xl shadow-md border border-slate-200 p-6">
        <h1 className="text-3xl font-bold text-blue-600 text-center tracking-wide">
          ABOUT PAGE
        </h1>

        <p className="text-green-700 bg-green-50 border border-green-200 rounded-lg p-3 mt-4 text-sm">
          This is the about page of our first Next.js app. We are learning step by step and enjoying building it.
        </p>

        <p className="mt-5 mb-3 text-slate-700 font-medium">
          Here are a few simple things about this project:
        </p>

        <div className="overflow-hidden rounded-lg border border-slate-200">
          <table className="w-full border-collapse text-left">
            <thead className="bg-slate-100 text-slate-700 text-sm uppercase">
              <tr>
                <th className="py-3 px-4 border-b border-slate-200">ID</th>
                <th className="py-3 px-4 border-b border-slate-200">Feature</th>
                <th className="py-3 px-4 border-b border-slate-200">Details</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 text-slate-800">
              {highlights.map((item) => (
                <tr key={item.id} className="hover:bg-blue-50/60 transition-colors">
                  <td className="py-3 px-4 text-slate-500">{item.id}</td>
                  <td className="py-3 px-4 font-medium">{item.title}</td>
                  <td className="py-3 px-4 text-slate-600">{item.detail}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
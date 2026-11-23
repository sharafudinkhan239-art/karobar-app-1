export default function abc() {
  const a = [
    { id: 1, name: "Basmati Rice (1kg)", price: 320 },
    { id: 2, name: "Cooking Oil (1L)", price: 540 },
    { id: 3, name: "Sugar (1kg)", price: 150 },
    { id: 4, name: "Fresh Milk (1L)", price: 220 },
    { id: 5, name: "Eggs (Dozen)", price: 310 },
  ];

  return (
    <div className="min-h-screen bg-slate-50 py-10 px-4">
      <div className="max-w-xl mx-auto bg-white rounded-xl shadow-md border border-slate-200 p-6">
        <h1 className="text-3xl font-bold text-blue-600 text-center tracking-wide">
          HOME PAGE
        </h1>

        <p className="text-green-700 bg-green-50 border border-green-200 rounded-lg p-3 mt-4 text-sm">
          This is the first page of our first app on Next.js. We are pleased too much after seeing it.
        </p>

        <p className="mt-5 mb-3 text-slate-700 font-medium">
          Now we are going to make a simple grocery price table here:
        </p>

        <div className="overflow-hidden rounded-lg border border-slate-200">
          <table className="w-full border-collapse text-left">
            <thead className="bg-slate-100 text-slate-700 text-sm uppercase">
              <tr>
                <th className="py-3 px-4 border-b border-slate-200">ID</th>
                <th className="py-3 px-4 border-b border-slate-200">Item</th>
                <th className="py-3 px-4 border-b border-slate-200">Price (PKR)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 text-slate-800">
              {a.map((i) => (
                <tr key={i.id} className="hover:bg-blue-50/60 transition-colors">
                  <td className="py-3 px-4 text-slate-500">{i.id}</td>
                  <td className="py-3 px-4 font-medium">{i.name}</td>
                  <td className="py-3 px-4 font-semibold text-emerald-700">
                    {i.price}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
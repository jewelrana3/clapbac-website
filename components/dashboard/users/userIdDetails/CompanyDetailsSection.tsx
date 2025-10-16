export function CompanyDetailsSection({
  data,
}: {
  data: { label: string; value: any }[];
}) {
  return (
    <div className="p-4 text-sm space-y-1 pb-2 border-b border-gray-300">
      {data.map((item) => (
        <div key={item.label} className="grid grid-cols-2">
          <span className="w-40 font-medium text-gray-600">{item.label}:</span>
          <span className="whitespace-pre-line">
            <span className="hover:underline">{item.value}</span>
          </span>
        </div>
      ))}
    </div>
  );
}

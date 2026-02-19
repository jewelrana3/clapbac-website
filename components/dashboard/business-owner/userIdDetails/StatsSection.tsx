export function StatsSection({
  data,
}: {
  data: { label: string; value: any }[];
}) {
  return (
    <div className="p-4 text-sm space-y-1 pt-1">
      {data.map((item) => (
        <div key={item.label} className="grid grid-cols-2">
          <span className="w-56 font-medium text-gray-600">{item.label}:</span>
          <span>{item.value || "N/A"}</span>
        </div>
      ))}
    </div>
  );
}

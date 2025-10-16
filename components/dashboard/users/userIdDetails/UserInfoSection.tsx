export function UserInfoSection({
  data,
}: {
  data: { label: string; value: any }[];
}) {
  return (
    <div className="p-4 text-sm space-y-1">
      {data.map((item) => (
        <div key={item.label} className="grid grid-cols-2">
          <p className="font-medium text-gray-600">{item.label}:</p>
          <p>{item.value}</p>
        </div>
      ))}
    </div>
  );
}

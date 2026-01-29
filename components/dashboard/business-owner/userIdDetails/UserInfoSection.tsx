export function UserInfoSection({
  data,
}: {
  data: { label: string; value: any }[];
}) {
  return (
    <div className="p-4  space-y-1">
      <h1 className="text-lg">User Information</h1>
      {data.map((item) => (
        <div key={item.label} className="grid grid-cols-2 text-sm">
          <p className="font-medium text-gray-600">{item.label}:</p>
          <p>{item.value}</p>
        </div>
      ))}
    </div>
  );
}

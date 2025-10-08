const userInfo = [
  { label: "User Name", value: "arabica123" },
  { label: "Display Name", value: "Pete Wells" },
  { label: "Business Name", value: "Arabica Coffee" },
  { label: "Email", value: "petewells123@gmail.com" },
  { label: "Business Category", value: "Food & Drink" },
  { label: "Join Date", value: "2/10/23" },
  { label: "Location", value: "Beverly Hills, CA" },
];

const topSection = [
  { label: "First Name", value: "Pete" },
  { label: "Last Name", value: "Wells" },
  { label: "Company Name", value: "Arabica Coffee" },
  { label: "Title", value: "Owner" },
  { label: "Phone", value: "310.570.3930" },
  {
    label: "Address",
    value: "123 Main Street, Suite 8F\nBeverly Hills, CA 90210",
  },
  { label: "Website", value: "www.arabicacoffee.com" },
];

const bottomSection = [
  { label: "Number of Clapbac Reviews", value: "34", isLink: true },
  { label: "Last Login / Last Active", value: "8/29/25" },
];

const buttons = [
  {
    label: "Suspend",
    style:
      "bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-full shadow-md",
    aria: "suspend-user",
  },
  {
    label: "Ban",
    style:
      "bg-orange-400 hover:bg-orange-500 text-white px-5 py-2 rounded-full shadow-md",
    aria: "ban-user",
  },
  {
    label: "Delete",
    style:
      "bg-black hover:bg-gray-900 text-white px-5 py-2 rounded-full shadow-md",
    aria: "delete-user",
  },
];
export default function UserDetails() {
  return (
    <section className="">
      <div className=" p-4  w-80 text-sm">
        <div className="space-y-1 text-gray-800">
          {userInfo.map((item) => (
            <div key={item.label} className="grid grid-cols-2">
              <p className="font-medium text-gray-600">{item.label}:</p>
              <p> {item.value}</p>
            </div>
          ))}
        </div>
      </div>
      <hr />
      <div className=" p-4 rounded-md  w-96 text-sm text-gray-800 space-y-3">
        {/* Top Section */}
        <div className="space-y-1 pb-2 border-b border-gray-300">
          {topSection.map((item) => (
            <div key={item.label} className="grid grid-cols-2">
              <span className="w-40 font-medium text-gray-600">
                {item.label}:
              </span>
              <span className="whitespace-pre-line">
                {item?.isLink ? (
                  <a href="#" className="text-blue-600 hover:underline">
                    {item.value}
                  </a>
                ) : (
                  item.value
                )}
              </span>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="space-y-1 pt-1">
          {bottomSection.map((item) => (
            <div key={item.label} className="flex">
              <span className="w-56 font-medium text-gray-600">
                {item.label}:
              </span>
              {item.isLink ? (
                <a href="#" className="text-blue-600 hover:underline">
                  {item.value}
                </a>
              ) : (
                <span>{item.value}</span>
              )}
            </div>
          ))}
        </div>
      </div>
      <hr />{" "}
      <div className="max-w-xl">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Notes About This User:
        </label>

        <textarea
          className="w-full h-28 p-4 bg-white border border-gray-200 shadow-sm resize-none focus:outline-none focus:ring-2 focus:ring-orange-200 rounded-sm"
          placeholder=""
          aria-label="Notes about this user"
        />

        <p className="mt-3 text-sm italic text-gray-500">
          If you feel the user is fake in any way, you can block or delete the
          user from here.
        </p>
      </div>
    </section>
  );
}

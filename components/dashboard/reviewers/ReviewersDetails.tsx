import { Textarea } from "@/components/ui/textarea";

const userInfo = [
  { label: "User Name", value: "nanbar38" },
  { label: "Display Name", value: "Nancy B." },
  { label: "Email", value: "NancyBarna38@gmail.com" },
  { label: "Location", value: "Los Angeles, CA" },
];

const topSection = [
  { label: "First Name", value: "Nancy" },
  { label: "Last Name", value: "Barna" },
  { label: "Phone", value: "310.570.3930" },
  {
    label: "Address",
    value: "123 Main Street,Beverly Hills, CA 90210",
  },
];

const bottomSection = [
  { label: "Original Reviews:", value: "3" },
  { label: "Number of Responses:", value: "18" },
  {
    label: "Avg Rating:",
    value: (
      <>
        <div className="text-[#F05223] text-xl">★★☆☆☆</div>
      </>
    ),
  },
  { label: "Last Login / Last Active:", value: "9/5/25" },
  { label: "Reviewer Type:", value: "The Drama Queen" },
  { label: "Reviewer Consequence:", value: "Name on the Wall of Shame" },
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
export default function ReviewersDetails() {
  return (
    <section className=" text-[#3D454E]">
      <div className=" p-4 text-sm">
        <div className="space-y-1 ">
          {userInfo.map((item) => (
            <div key={item.label} className="grid grid-cols-2">
              <p className="font-medium text-gray-600">{item.label}:</p>
              <p> {item.value}</p>
            </div>
          ))}
        </div>
      </div>
      <hr />
      <div className=" p-4 text-sm  space-y-3">
        {/* Top Section */}
        <div className="space-y-1 pb-2 border-b border-gray-300">
          {topSection.map((item) => (
            <div key={item.label} className="grid grid-cols-2">
              <span className="w-40 font-medium text-gray-600">
                {item.label}:
              </span>
              <span className="whitespace-pre-line">
                <span className=" hover:underline">{item.value}</span>
              </span>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="space-y-1 pt-1">
          {bottomSection.map((item) => (
            <div key={item.label} className="grid grid-cols-2">
              <span className="w-56 font-medium text-gray-600">
                {item.label}
              </span>

              <span>{item.value}</span>
            </div>
          ))}
        </div>
      </div>
      <hr />
      <div className="max-w-2xl p-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Notes About This User:
        </label>

        <Textarea
          className="w-full h-28 p-4 bg-white   shadow-sm resize-none border-none rounded-sm"
          placeholder=""
          aria-label="Notes about this user"
        />

        <p className="mt-3 text-sm italic text-gray-500">
          If you feel the user is fake in any way, you can block or delete the
          user from here.
        </p>
      </div>

      {/* btn */}
      <div className="flex gap-4 ml-4">
        <button className="bg-[#F05223] text-white p-2 rounded-xl font-bold w-24">
          Suspend
        </button>
        <button className="bg-[#F05223] text-white p-2 rounded-xl font-bold w-24">
          Ban
        </button>
        <button className="bg-[#000000] text-white p-2 rounded-xl font-bold w-24">
          Delete
        </button>
      </div>
    </section>
  );
}

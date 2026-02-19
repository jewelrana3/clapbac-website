export const getUserInfo = (user: any) => [
  { label: "User Name", value: user?.username },
  { label: "Display Name", value: user?.firstName + " " + user?.lastName },
  { label: "Email", value: user?.email },
  // { label: "Business Category", value: "Food & Drink" },
  { label: "Join Date", value: user?.createdAt?.slice(0, 10) },
  // { label: "Location", value: "Beverly Hills, CA" },
];

export const getTopSection = (user: any) => [
  // { label: "First Name", value: user?.firstName },
  // { label: "Last Name", value: user?.lastName },
  { label: "Company Name", value: user?.company?.name || "N/A" },
  { label: "Title", value: user?.role },
  { label: "Phone", value: user?.phone },
  { label: "Address", value: user?.company?.address || "N/A" },
  { label: "Website", value: user?.company?.website || "N/A" },
];

export const getBottomSection = (user: any) => [
  {
    label: "Number of Clapbac Reviews",
    value: user?.company?.reviewCount,
    isLink: true,
  },
  // { label: "Last Login / Last Active", value: "N/D" },
];

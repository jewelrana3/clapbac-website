"use client";
import { deleteCookie } from "cookies-next/client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const paths = [
  { id: 1, name: "Overview", path: "/dashboard" },
  { id: 2, name: "Users", path: "/dashboard/users" },
  { id: 18, name: "Companies", path: "/dashboard/companies" },
  { id: 3, name: "Reviews", path: "/dashboard/reviews" },
  { id: 4, name: "Reviewers", path: "/dashboard/reviewers" },
  { id: 5, name: "Reports", path: "/dashboard/reports" },
  { id: 6, name: "Announcements", path: "/dashboard/announcements" },

  { id: 16, name: "Categories", path: "/dashboard/categories" },
  {
    id: 7,
    name: "Settings",
    path: "#",
    children: [
      {
        id: 7.1,
        name: "Terms & Conditions",
        path: "/dashboard/terms-conditions",
      },
      {
        id: 7.2,
        name: "Privacy Policy",
        path: "/dashboard/privacy-policy",
      },
    ],
  },

  { id: 22, name: "FAQ", path: "/dashboard/faq" },
  { id: 8, name: "Contact Us", path: "/dashboard/contact" },
  { id: 9, name: "Change Password", path: "/dashboard/change-password" },
  { id: 10, name: "Log Out", path: "/login" },
];

export default function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();

  const pathParts = pathname.split("/");
  const id =
    pathParts.includes("user-details") || pathParts.includes("reviewers")
      ? pathParts.at(-1)
      : null;

  const handleLogout = () => {
    deleteCookie("accessToken");
    deleteCookie("refreshToken");
    window.location.replace("/login");
  };

  return (
    <section className="bg-[#F2F2F2] w-[340px] text-black py-14">
      {paths.map((item) => {
        const isActive = pathname === item.path;
        const isUserActive =
          item.path === "/dashboard/users" &&
          pathname.startsWith(`/dashboard/user-details/${id}`);

        // reviews active
        const isReviewsActive =
          item.path === "/dashboard/reviewers" &&
          pathname.startsWith(`/dashboard/reviewers/${id}`);

        // Special case for logout
        if (item.name === "Log Out") {
          return (
            <div key={item.id} className="px-10 my-3">
              <button
                onClick={handleLogout}
                className="block font-bold px-4 py-2 cursor-pointer  text-[#F05223] "
              >
                {item.name}
              </button>
            </div>
          );
        }

        return (
          <div key={item.id} className="px-10 my-3">
            {/* Parent Link */}
            <Link
              href={item.path}
              className={`block font-bold px-4 py-2 rounded w-full ${
                isActive || isUserActive || isReviewsActive
                  ? "bg-[#F05223] text-white"
                  : "text-black"
              }`}
            >
              {item.name}
            </Link>

            {/* Children (if any) */}
            {item.children && (
              <div className="ml-6 mt-2 space-y-2">
                {item.children.map((child) => {
                  const isChildActive = pathname === child.path;

                  return (
                    <Link
                      href={child.path}
                      key={child.id}
                      className={`block font-bold px-4 py-2 rounded w-full text-sm ${
                        isChildActive
                          ? "bg-[#F05223] text-white"
                          : "text-gray-700"
                      }`}
                    >
                      {child.name}
                    </Link>
                  );
                })}
              </div>
            )}
          </div>
        );
      })}
    </section>
  );
}

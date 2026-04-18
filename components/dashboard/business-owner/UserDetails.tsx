import { UserInfoSection } from "./userIdDetails/UserInfoSection";
import { CompanyDetailsSection } from "./userIdDetails/CompanyDetailsSection";
import { StatsSection } from "./userIdDetails/StatsSection";
import { UserActions } from "./userIdDetails/UserActions";
import {
  getBottomSection,
  getTopSection,
  getUserInfo,
} from "@/components/dashboardData/usersDetailsData";

export default function UserDetails({ findUserById: user }: any) {
  const userInfo = getUserInfo(user);
  const topSection = getTopSection(user);

  const bottomSection = getBottomSection(user);

  return (
    <section className=" text-[#3D454E]">
      <UserInfoSection data={userInfo} />
      <hr />
      {user?.role === "Owner" && <CompanyDetailsSection data={topSection} />}
      {user?.role === "Owner" && <StatsSection data={bottomSection} />}
      <hr />

      <UserActions findUser={user} />
    </section>
  );
}

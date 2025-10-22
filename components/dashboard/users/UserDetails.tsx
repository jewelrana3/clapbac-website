import { UserInfoSection } from "./userIdDetails/UserInfoSection";
import { CompanyDetailsSection } from "./userIdDetails/CompanyDetailsSection";
import { StatsSection } from "./userIdDetails/StatsSection";
import { UserActions } from "./userIdDetails/UserActions";
import {
  getBottomSection,
  getTopSection,
  getUserInfo,
} from "@/components/dashboardData/usersDetailsData";

export default function UserDetails({ findUserById }: any) {
  const userInfo = getUserInfo(findUserById);
  const topSection = getTopSection(findUserById);
  const bottomSection = getBottomSection(findUserById);

  return (
    <section className=" text-[#3D454E]">
      <UserInfoSection data={userInfo} />
      <hr />
      <CompanyDetailsSection data={topSection} />
      <StatsSection data={bottomSection} />
      <hr />

      <UserActions findUser={findUserById} />
    </section>
  );
}

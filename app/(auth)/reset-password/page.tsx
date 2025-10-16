import ProfileSection from "@/components/share/ProfileSection";
import signUp from "../../../public/signup.jpg";
import SectionTitle from "@/components/share/SectionTitle";
import ResetPasswordForm from "@/components/forms/ResetPasswordForm";

const des = (
  <>
    <p>
      `Anyone can leave a review. Doesn’t mean they should. This site helps me
      filter <br /> out the noise and focus on feedback from people who actually
      get it.`
    </p>
  </>
);

export default function ResetPassword() {
  return (
    <>
      <SectionTitle title="Reset Password" />
      <section className="mt-0 py-20">
        <ResetPasswordForm />
      </section>
      <ProfileSection
        image={signUp}
        des={des}
        shortName="— Jordan K., Los Angeles"
      />
    </>
  );
}

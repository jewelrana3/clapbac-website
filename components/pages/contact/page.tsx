import Button from "@/components/share/Button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function ContactForm() {
  return (
    <div className="max-w-xl py-10 px-10 md:px-20 mx-auto bg-[#f1f1f1] shadow-md my-10 rounded border-r-2">
      <form className="space-y-4">
        <div>
          <Input id="firstName" placeholder="First Name" />
        </div>
        <div>
          <Input id="lastName" placeholder="Last Name" />
        </div>
        <div>
          <Input id="email" type="email" placeholder="Email" />
        </div>
        <div>
          <Input id="phone" type="tel" placeholder="Phone" />
        </div>
        <div>
          <Input id="subject" placeholder="Subject" />
        </div>
        <div>
          <Textarea
            id="message"
            placeholder="Message"
            rows={9}
            className="w-full h-28"
          />
        </div>
        <Button
          type="submit"
          className="bg-orange-600 hover:bg-orange-700 w-full sm:w-[206px] h-10  text-md"
        >
          Submit
        </Button>
      </form>
    </div>
  );
}

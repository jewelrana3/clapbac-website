import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogTrigger,
} from "@/components/ui/dialog";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "../ui/label";
import { myFetch } from "@/utils/myFetch";

export default function ReportModal({ review }: any) {
  const [selectedReason, setSelectedReason] = useState("spam");

  const handleSubmitReport = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Reported reason:", selectedReason);
    // You can now send `selectedReason` to your API

    try {
      const res = await myFetch("/reports/create", {
        method: "POST",
        body: {
          review,
          reason: selectedReason,
        },
      });

      console.log("res", res);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="px-4 py-2 border border-gray-600 rounded-md text-gray-800 hover:bg-gray-100 transition cursor-pointer w-[128px]">
          Report
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] py-3 ">
        <form onSubmit={handleSubmitReport}>
          <RadioGroup value={selectedReason} onValueChange={setSelectedReason}>
            <div className="flex items-center gap-3 mt-10">
              <RadioGroupItem value="Spam" />
              <Label htmlFor="r1">Spam</Label>
            </div>
            <div className="flex items-center gap-3">
              <RadioGroupItem value="Harassment" />
              <Label htmlFor="r2">Harassment</Label>
            </div>
            <div className="flex items-center gap-3">
              <RadioGroupItem value="Fake Review" />
              <Label htmlFor="r3">Fake Review</Label>
            </div>
          </RadioGroup>
          <DialogFooter className="mt-4">
            <Button className="bg-[#F05223]" type="submit">
              Submit
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}

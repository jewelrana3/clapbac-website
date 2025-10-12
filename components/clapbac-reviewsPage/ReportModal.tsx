import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Textarea } from "../ui/textarea";

export default function ReportModal() {
  console.log("ss");
  return (
    <Dialog>
      <form>
        <DialogTrigger asChild>
          <button className="px-4 py-2 border border-gray-600 rounded-md text-gray-800 hover:bg-gray-100 transition cursor-pointer w-[128px]">
            Report
          </button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px] py-3">
          <DialogHeader>
            <DialogTitle>Report </DialogTitle>
          </DialogHeader>
          <div className="grid gap-4">
            <div className="grid gap-3">
              <Textarea
                className="rounded h-40"
                name="report"
                placeholder="your report here"
              />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit">Submit</Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
}

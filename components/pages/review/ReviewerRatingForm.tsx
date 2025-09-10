import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Star } from "lucide-react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { businessCategories, reviewerTypes } from "@/demoData/reviewPage";
import RatingHeader from "./RatingHeader";

export default function ReviewerRatingForm() {
  return (
    <section className="my-14">
      <form className="max-w-2xl mx-auto space-y-6 p-6 border rounded-lg shadow-sm">
        {/* Star Rating */}
        <RatingHeader />

        {/* Name of Reviewer */}
        <div>
          <Label htmlFor="reviewerName">
            Name of Reviewer that you are Rating
          </Label>
          <Input id="reviewerName" placeholder="e.g. Sarah M." />
          <p className="text-sm text-muted-foreground mt-1">
            Please use first name and last initial only (e.g., Sarah M.) to
            respect privacy.
          </p>
        </div>

        {/* Paste Excerpt */}
        <div>
          <Label htmlFor="excerpt">
            Paste Excerpt from Original Review Here
          </Label>
          <Textarea id="excerpt" rows={3} />
          <p className="text-sm text-muted-foreground mt-1">
            Review needs to be short excerpts from original review to comply
            with Fair Use.
          </p>
        </div>

        {/* Review Source */}
        <div>
          <Label htmlFor="source">Review Source (e.g. Yelp, Google)</Label>
          <Input id="source" placeholder="e.g. Yelp" />
        </div>

        {/* Source Link */}
        <div>
          <Label htmlFor="sourceLink">Paste Review Source Link Here</Label>
          <Input id="sourceLink" placeholder="https://..." />
        </div>

        {/* Date of Experience */}
        <div>
          <Label htmlFor="date">Date of Experience</Label>
          <Input id="date" type="date" />
        </div>

        {/* How They Rated You */}
        <div>
          <Label>How the Original Reviewer Rated Your Business</Label>
          <div className="flex items-center space-x-1 mt-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star key={star} className="w-5 h-5 text-gray-400" />
            ))}
          </div>
        </div>

        {/* Title of Your Review */}
        <div>
          <Label htmlFor="reviewTitle">Title of Your Review</Label>
          <Input id="reviewTitle" />
        </div>

        {/* Your Review */}
        <div>
          <Label htmlFor="yourReview">Your Review</Label>
          <Textarea id="yourReview" rows={5} />
          <p className="text-sm text-muted-foreground mt-1">
            Review needs to be at least 100 characters.
          </p>
        </div>

        <div className="space-y-2">
          <Label>Reviewer Type</Label>
          <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select Reviewer Type" />
            </SelectTrigger>
            <SelectContent>
              {reviewerTypes.map((item, index) => (
                <SelectItem key={index} value={item.label}>
                  {item.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Reviewer Consequence */}
        <div className="space-y-2">
          <Label>Reviewer Consequence</Label>
          <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select Consequence" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="banned">Banned for Life</SelectItem>
              <SelectItem value="warned">Issued a Warning</SelectItem>
              <SelectItem value="ignored">Ignored</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Business Website */}
        <div className="space-y-2">
          <Label>Your Business Website</Label>
          <Input placeholder="https://yourwebsite.com" />
        </div>

        {/* Business Category */}
        <div className="space-y-2">
          <Label>Your Business Category</Label>
          <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select Category" />
            </SelectTrigger>
            <SelectContent>
              {businessCategories.map((item, index) => (
                <SelectItem key={index} value={item.label}>
                  {item.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Certification Checkbox */}
        <div className="flex items-start space-x-3">
          <Checkbox id="certify" />
          <label
            htmlFor="certify"
            className="text-sm font-normal text-muted-foreground leading-snug"
          >
            You certify that this review reflects your genuine, unbiased
            experience, and was not influenced by any compensation, perks or
            offers. Thanks for keep it real.
          </label>
        </div>

        {/* Submit Button */}
        <Button type="submit" className="bg-[#F05223]">
          Submit Your Review
        </Button>
      </form>
    </section>
  );
}

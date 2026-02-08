"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Switch } from "@/components/ui/switch";
import { myFetch } from "@/utils/myFetch";
import toast from "react-hot-toast";
import { Loader, LoaderCircle } from "lucide-react";
import { DialogClose } from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function AIReviewGenerator({
  context,
  setValue,
}: {
  context: string;
  setValue: any;
}) {
  const [isLoading, setIsLoading] = useState(false);
  const [prompt, setPrompt] = useState("");
  const [tone, setTone] = useState("Polite");
  const [lengthInWords, setLengthInWords] = useState([50]);
  const [useHashTags, setUseHashtags] = useState(false);
  const [useEmojis, setUseEmojis] = useState(true);
  const [resultCount, setResultCount] = useState(3);
  const tones = [
    "Polite",
    "Witty",
    "Enthusiastic",
    "Friendly",
    "Informational",
    "Funny",
  ];
  const moreTones = [
    "Frustrated",
    "Professional",
    "Approachable",
    "Assertive",
    "Measured",
    "Respectful",
    "Clear",
    "Informative",
    "Calm",
    "Confident",
    "Neutral",
    "Empathetic",
    "Structured",
  ];
  const isMoreSelected = tone && moreTones.includes(tone);

  const [results, setResults] = useState<{ title: string; message: string }[]>(
    [],
  );
  const [selected, setSelected] = useState<number>(0);

  const handleSubmit = async () => {
    // validation
    if (!prompt) {
      toast.error("Please write your prompt.");
      return;
    }

    setIsLoading(true);
    const payload = {
      context,
      prompt,
      tone,
      lengthInWords: lengthInWords[0],
      useHashTags,
      useEmojis,
      resultCount,
    };

    try {
      const res = await myFetch("/reviews/generate", {
        method: "POST",
        body: payload,
      });
      if (res.success) {
        setResults(res.data);
      } else {
        toast.error(res.message || "Failed to generate content.");
      }
    } catch (err) {
      console.error("Error generating content:", err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 bg-gray-50 h-auto">
      {/* Left Panel */}
      <Card className="lg:col-span-1 rounded-2xl shadow-none border">
        <CardContent className="space-y-6 p-6">
          <form className="space-y-6">
            {/* Prompt */}
            <div>
              <h3 className="font-semibold text-sm mb-2">Your prompt</h3>
              <textarea
                className="w-full min-h-40 rounded-xl bg-white border border-gray-200 p-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                required
              />
            </div>

            {/* Tone of voice */}
            <div>
              <h3 className="font-bold text-gray-800 text-sm mb-2">
                Tone of voice
              </h3>
              <ToggleGroup
                type="single"
                value={tone}
                onValueChange={(val) => val && setTone(val)}
                className="flex flex-wrap gap-2"
              >
                {tones.map((t) => (
                  <ToggleGroupItem
                    key={t}
                    value={t}
                    className={`px-4 py-2 rounded-full border text-sm
                      data-[state=on]:bg-primary data-[state=on]:text-white
                      data-[state=off]:bg-white data-[state=off]:text-gray-700`}
                  >
                    {t}
                  </ToggleGroupItem>
                ))}
                {/* more tones */}
                <ToggleGroupItem
                  value="More"
                  asChild
                  data-state={isMoreSelected ? "on" : "off"}
                >
                  <Select
                    value={isMoreSelected ? tone : ""}
                    onValueChange={(val) => setTone(val)}
                  >
                    <SelectTrigger
                      className="px-4 py-2 rounded-full border text-sm
                      data-[state=on]:bg-primary data-[state=on]:text-white
                      data-[state=off]:bg-white data-[state=off]:text-gray-700"
                      data-state={isMoreSelected ? "on" : "off"}
                    >
                      <SelectValue placeholder="More" />
                    </SelectTrigger>

                    <SelectContent>
                      {moreTones.map((t) => (
                        <SelectItem key={t} value={t}>
                          {t}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </ToggleGroupItem>
              </ToggleGroup>
            </div>

            {/* Word count */}
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span className="font-bold text-gray-800">
                  Approximate words
                </span>
                <span className="text-gray-500">{lengthInWords[0]}</span>
              </div>
              <Slider
                value={lengthInWords}
                onValueChange={setLengthInWords}
                min={5}
                max={120}
                step={1}
              />
            </div>

            {/* Toggles */}
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-700 font-medium">
                Generate hashtags
              </span>
              <Switch
                checked={useHashTags}
                onCheckedChange={(val) => setUseHashtags(!!val)}
              />
            </div>

            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-700 font-medium">Include emoji</span>
              <Switch
                checked={useEmojis}
                onCheckedChange={(val) => setUseEmojis(!!val)}
              />
            </div>

            {/* Post count */}
            <div className="flex items-center justify-between text-sm">
              <span className="font-bold text-gray-800">Posts to generate</span>
              <input
                type="number"
                value={resultCount}
                onChange={(e) => setResultCount(Number(e.target.value))}
                className="px-3 py-1 rounded-lg border w-16 text-center"
                min={3}
                max={5}
              />
            </div>

            <Button
              onClick={handleSubmit}
              type="button"
              className="w-full rounded-md py-4"
              disabled={isLoading}
            >
              {isLoading ? "Generating..." : "Generate"}
            </Button>
          </form>
        </CardContent>
      </Card>

      {/* Right Panel */}
      <Card className="lg:col-span-2 rounded-2xl shadow-none border">
        <CardContent className="p-6 space-y-4 h-full max-h-[650px] overflow-y-scroll scroll-hidden">
          <div className="flex justify-between items-center">
            <h2 className="font-semibold text-lg">Results</h2>
            <Button
              variant="ghost"
              className="text-sm text-gray-500"
              onClick={() => setResults([])}
            >
              Clear results
            </Button>
          </div>

          {/*  */}
          {isLoading && (
            <div className="text-sm flex justify-center items-center gap-2 py-4">
              <LoaderCircle className="animate-spin" /> Generating reviews,
              please wait...
            </div>
          )}

          {/* Empty state */}
          {!isLoading && results.length === 0 && (
            <div className="text-sm text-gray-500">
              No results yet. Fill the form and click Generate.
            </div>
          )}

          {/* Results */}
          {!isLoading &&
            results.length > 0 &&
            results.map((item, idx) => (
              <div
                key={idx}
                className={`border-2 rounded-xl p-4 flex gap-3 cursor-pointer ${
                  idx === selected ? "border-primary" : ""
                }`}
                onClick={() => setSelected(idx)}
              >
                <Checkbox checked={idx === selected} className="mt-1" />
                <div>
                  <h3 className="text-sm text-gray-700 font-bold">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-700 mt-1">{item.message}</p>
                </div>
              </div>
            ))}

          {/* Use selected button */}
          {!isLoading && results.length > 0 && (
            <div className="flex justify-end pt-4 mt-auto">
              <DialogClose asChild>
                <Button
                  type="button"
                  className="rounded-md px-6"
                  onClick={() => {
                    setValue("clapbacTitle", results[selected]?.title || "");
                    setValue(
                      "clapbacMessage",
                      results[selected]?.message || "",
                    );
                    toast.success("Generated review inserted!");
                  }}
                >
                  Use selected result
                </Button>
              </DialogClose>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}

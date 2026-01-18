import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Switch } from "@/components/ui/switch";

export default function AIReviewGenerator() {
  const [prompt, setPrompt] = useState(
    "Anything nice to say, say shady haters who think they can hide behind their screens...",
  );
  const [tone, setTone] = useState("Witty");
  const [wordCount, setWordCount] = useState([69]);
  const [generateHashtags, setGenerateHashtags] = useState(false);
  const [includeEmoji, setIncludeEmoji] = useState(true);
  const [postCount, setPostCount] = useState(3);
  const tones = [
    "Polite",
    "Witty",
    "Enthusiastic",
    "Friendly",
    "Informational",
    "Funny",
  ];

  const [results, setResults] = useState<string[]>([
    "We take all feedback seriously, but this review does not reflect the experience of the vast majority of our customers. We stand by the quality of our service and are always happy to address genuine concerns directly.",
    "It’s unfortunate to see a review that lacks context. We encourage anyone with a real issue to reach out so we can resolve it properly and transparently.",
    "We strive to provide consistent, high-quality service, and this comment does not align with our records or customer feedback. We remain open to constructive dialogue.",
    "Our team works hard to deliver a positive experience, and while we welcome fair criticism, misleading statements do not represent who we are or how we operate.",
  ]);
  const [selected, setSelected] = useState<number>(0);

  const handleSubmit = async () => {
    const payload = {
      prompt,
      tone,
      wordCount: wordCount[0],
      generateHashtags,
      includeEmoji,
      postCount,
    };
    console.log(payload);

    // try {
    //   const res = await fetch("/api/generate-content", {
    //     method: "POST",
    //     headers: { "Content-Type": "application/json" },
    //     body: JSON.stringify(payload),
    //   });
    //   const data = await res.json();
    //   setResults(data.posts || []);
    // } catch (err) {
    //   console.error("Error generating content:", err);
    // }
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
                    className={`px-4 py-2 rounded-lg border text-sm
                      data-[state=on]:bg-primary data-[state=on]:text-white
                      data-[state=off]:bg-white data-[state=off]:text-gray-700`}
                  >
                    {t}
                  </ToggleGroupItem>
                ))}
              </ToggleGroup>
            </div>

            {/* Word count */}
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span className="font-bold text-gray-800">
                  Approximate words
                </span>
                <span className="text-gray-500">{wordCount[0]}</span>
              </div>
              <Slider
                value={wordCount}
                onValueChange={setWordCount}
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
                checked={generateHashtags}
                onCheckedChange={(val) => setGenerateHashtags(!!val)}
              />
            </div>

            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-700 font-medium">Include emoji</span>
              <Switch
                checked={includeEmoji}
                onCheckedChange={(val) => setIncludeEmoji(!!val)}
              />
            </div>

            {/* Post count */}
            <div className="flex items-center justify-between text-sm">
              <span className="font-bold text-gray-800">Posts to generate</span>
              <input
                type="number"
                value={postCount}
                onChange={(e) => setPostCount(Number(e.target.value))}
                className="px-3 py-1 rounded-lg border w-16 text-center"
                min={1}
                max={10}
              />
            </div>

            <Button type="button" className="w-full rounded-md py-4">
              Generate
            </Button>
          </form>
        </CardContent>
      </Card>

      {/* Right Panel */}
      <Card className="lg:col-span-2 rounded-2xl shadow-none border">
        <CardContent className="p-6 space-y-4">
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

          {results.length === 0 && (
            <div className="text-sm text-gray-500">
              No results yet. Fill the form and click Generate.
            </div>
          )}

          {results.map((text, idx) => (
            <div
              key={idx}
              className={`border-2 rounded-xl p-4 flex gap-3 cursor-pointer ${
                idx === selected ? "border-primary" : ""
              }`}
              onClick={() => setSelected(idx)}
            >
              <Checkbox checked={idx === selected} />
              <p className="text-sm text-gray-700">{text}</p>
            </div>
          ))}

          {results.length > 0 && (
            <div className="flex justify-end pt-4 mt-auto">
              <Button
                type="button"
                onClick={handleSubmit}
                className="rounded-md px-6"
              >
                Use selected result
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}

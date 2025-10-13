import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import React from "react";

export default function FormField({
  label,
  name,
  placeholder,
  type = "text",
  isTextarea = false,
  helperText,
}: {
  label: string;
  name: string;
  placeholder?: string;
  type?: string;
  isTextarea?: boolean;
  helperText?: string;
}) {
  return (
    <div>
      <Label htmlFor={name}>{label}</Label>
      {isTextarea ? (
        <Textarea id={name} name={name} rows={type === "long" ? 5 : 3} />
      ) : (
        <Input id={name} name={name} placeholder={placeholder} type={type} />
      )}
      {helperText && (
        <p className="text-sm text-muted-foreground mt-1">{helperText}</p>
      )}
    </div>
  );
}

"use client";
import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import {
  MultiSelector,
  MultiSelectorContent,
  MultiSelectorInput,
  MultiSelectorItem,
  MultiSelectorList,
  MultiSelectorTrigger,
} from "@/components/ui/multi-select";
import { myFetch } from "@/utils/myFetch";

const formSchema = z.object({
  name_6092856238: z.array(z.string()).min(1, {
    error: "Please select at least one item",
  }),
});

export default function MultiSelect({ category }: any) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name_6092856238: [""],
    },
  });

  const onSubmit = async function (values: z.infer<typeof formSchema>) {
    try {
      const res = await myFetch(`/categories/${category._id}`, {
        method: "PATCH",
        body: values,
      });

      if (res.success) {
        toast.success("Category updated successfully.");
      } else {
        toast.error(res.message || "Category update failed.");
      }
    } catch (error) {
      console.error("Form submission error", error);
      toast.error("Failed to submit the form. Please try again.");
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-5 max-w-3xl mx-auto mt-2"
      >
        <FormField
          control={form.control}
          name="name_6092856238"
          render={({ field }) => (
            <FormItem>
              {/* <FormLabel>Select your framework</FormLabel> */}
              <FormControl>
                <MultiSelector
                  values={field.value}
                  onValuesChange={field.onChange}
                  loop
                  className="w-full"
                >
                  <MultiSelectorTrigger>
                    <MultiSelectorInput placeholder="Select Item" />
                  </MultiSelectorTrigger>
                  <MultiSelectorContent>
                    <MultiSelectorList>
                      <MultiSelectorItem
                        key={category._id}
                        value={category.name}
                      >
                        {category.name}
                      </MultiSelectorItem>
                    </MultiSelectorList>
                  </MultiSelectorContent>
                </MultiSelector>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
}

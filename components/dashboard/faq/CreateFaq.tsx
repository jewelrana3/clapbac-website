import { myFetch } from "@/utils/myFetch";
import { revalidate } from "@/utils/revalidateTags";
import toast from "react-hot-toast";

export const handleUpdateFaq = async (formData: FormData) => {
  const id = formData.get("_id") as string;
  const question = formData.get("question") as string;
  const answer = formData.get("answer") as string;

  // decide method + url
  const isEdit = Boolean(id);
  const method = isEdit ? "PATCH" : "POST";
  const url = isEdit ? `/faqs/${id}` : `/faqs/create`;

  try {
    const res = await myFetch(url, {
      method,
      body: { question, answer },
    });

    if (res.success) {
      toast.success(
        id ? "FAQ updated successfully" : "FAQ created successfully"
      );
      formData.values();

      revalidate("faqs");
    } else {
      toast.error("Failed to create FAQ");
    }
  } catch (error) {
    toast.error("Failed to create FAQ");
  }
};

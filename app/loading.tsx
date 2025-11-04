import { LoaderCircleIcon } from "lucide-react";

function LoadingPage() {
  return (
    <div className="h-screen flex justify-center items-center">
      <LoaderCircleIcon className="animate-spin" />
    </div>
  );
}

export default LoadingPage;

import { LoaderCircleIcon } from "lucide-react";

const Loader = () => {
  return (
    <section className="h-screen flex justify-center items-center">
      <div className="flex flex-col items-center gap-2">
        <LoaderCircleIcon className="animate-spin md:size-8" />
        <h2 className="md:text-lg">Loading...</h2>
      </div>
    </section>
  );
};

export default Loader;

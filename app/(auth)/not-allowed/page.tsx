function NotAllowedPage() {
  return (
    <section className="min-h-[90vh] flex justify-center items-center">
      <div className="text-center space-y-4">
        <h1 className="text-5xl font-bold">401</h1>
        <h1 className="text-2xl font-semibold">
          You do not have permission to access this page
        </h1>
      </div>
    </section>
  );
}

export default NotAllowedPage;

export default function FormSuccess({ succMessage }) {
  return (
    <section className="fixed top-16 sm:right-6 right-2 bg-green-700 w-[250px] sm:text-2xl text-lg font-medium p-2 border-l-8 border-l-green-900">
      <p>{succMessage}</p>
    </section>
  );
}

import classes from "./formloader.module.css";
/**
 * FormLoader Component
 * This component provides a loading animation
 */
export default function FormLoader() {
  return (
    <section className="w-full h-[95vh] flex justify-center items-center fixed bottom-0 left-0 z-10 bg-primary/70">
      <div className={classes.pulse}></div>
    </section>
  );
}

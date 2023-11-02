import classes from "./formloader.module.css";
/**
 * FormLoader Component
 * This component provides a loading animation
 */
export default function FormLoader() {
  return (
    <section className="w-full h-screen flex justify-center items-center fixed top-0 left-0 z-30 bg-primary/70">
      <div className={classes.pulse}></div>
    </section>
  );
}

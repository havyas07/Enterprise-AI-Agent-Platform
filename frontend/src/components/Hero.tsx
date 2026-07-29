import Button from "@/components/Button";
export default function Hero() {
    return (
      <section className="flex flex-col items-center justify-center text-center min-h-[80vh] px-6 bg-slate-950 text-white">
        <h1 className="text-6xl font-extrabold leading-tight">
          Enterprise AI Agent Platform
        </h1>
  
        <p className="mt-6 max-w-3xl text-xl text-slate-300">
          Build, deploy and manage intelligent AI employees for HR, Finance,
          Software Engineering, Customer Support, Cyber Security, Marketing and
          more — all from one enterprise platform.
        </p>
  
      <div className="mt-10 flex gap-4">
  <Button
  text="Get Started"
  variant="primary"
/>

<Button
  text="Learn More"
  variant="secondary"
/>
       </div>
      </section>
    );
  }
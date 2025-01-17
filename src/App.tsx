import { ReactNode } from "react";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

function App() {
  return (
    <div className="w-full ">
      <section
        id="intro"
        className="py-4 mx-auto px-4 space-y-4 w-full max-w-[1280px] bg-[#222]"
      >
        <div>
          <h3>My name is</h3>
          <h1 className="bg-gradient-to-r from-[#5A924E] to-[#ccecc4] w-fit bg-clip-text text-transparent">
            Lam Ho Sy
          </h1>
          <p className="w-[300px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim,
            rerum. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Labore nulla in nam culpa assumenda dicta. Vitae dolorem modi
            laborum voluptatibus?
          </p>
          <Button>
            <span>Contact Me </span>
          </Button>
        </div>
        <div className="bg-slate-500 relative">
          <img
            className="absolute z-10 w-[300px] h-[300px] rounded-full"
            src="/images/avatar_no.jpg"
            alt="xx"
          />
        </div>
      </section>
    </div>
  );
}

function Button({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <button
      className={cn(
        "bg-[#5A924E] p-2 hover:bg-opacity-90 flex items-center rounded-md gap-4",
        className
      )}
    >
      {children}
    </button>
  );
}

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export default App;

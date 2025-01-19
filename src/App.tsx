import { ReactNode } from "react";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

function App() {
  return (
    <div className="w-full max-w-[1440px] mx-auto my-12">
      <section id="intro" className="py-4 overflow-clip w-full bg-[#222]">
        <div className="mx-auto max-w-[1280px] flex px-12 justify-between items-center ">
          <div className="space-y-4">
            <h3>Hi there, I'm</h3>
            <h1 className="bg-gradient-to-r from-[#5A924E] to-[#ccecc4] w-fit bg-clip-text text-transparent">
              Lam Ho Sy
            </h1>
            <p className="w-[570px]">
              A frontend web developer with 3 years of experience specializing
              in ReactJS. Passionate about crafting intuitive and responsive
              user interfaces, optimizing performance, and implementing
              innovative solutions to complex problems. Committed to writing
              clean code, optimizing performance, and ongoing learning
            </p>
            <Button>
              <span>Contact Me </span>
            </Button>
          </div>
          <img
            className="w-[300px] avatar-shadow h-[300px] rounded-full"
            src="/images/avatar_no.jpg"
            alt="avatar"
          />
        </div>
      </section>

      <section id="summary" className="py-8 mx-auto  px-12 max-w-[1280px]">
        <h3 className="font-semibold ps-2 border-l-4 border-[#5A924E]">
          Summary
        </h3>
        <div className="flex items-center my-2 gap-4">
          <div className="text-[60px] text-[#5A924E] font-semibold">3+</div>
          <p>
            A frontend web developer with 3 years of experience specializing in
            ReactJS. Passionate about crafting intuitive and responsive user
            interfaces, optimizing performance, and implementing innovative
            solutions to complex problems. Committed to writing clean code,
            optimizing performance, and ongoing learning
          </p>
        </div>
      </section>

      <section id="stack" className="py-8 bg-[#222] ">
        <div className="mx-auto px-12  max-w-[1280px]">
          <h3 className="font-semibold ps-2 border-l-4 border-[#5A924E]">
            Tech Stack
          </h3>
          <div className="flex items-center my-2 mt-8 gap-6 flex-wrap justify-start">
            <img className="size-24" src="/icons/html5.svg" alt="html5" />
            <img className="size-24" src="/icons/css.svg" alt="css" />
            <img
              className="size-24"
              src="/icons/javascript.svg"
              alt="javascript"
            />
            <img
              className="size-24"
              src="/icons/typescript.svg"
              alt="typescript"
            />
            <img className="size-24" src="/icons/reactjs.svg" alt="reactjs" />
            <img className="size-24" src="/icons/nextjs.svg" alt="nextjs" />
            <img className="size-24" src="/icons/redux.svg" alt="redux" />
            <img
              className="size-24"
              src="/icons/tailwindcss.svg"
              alt="tailwind"
            />
            <img
              className="size-24"
              src="/icons/react-query.svg"
              alt="react-query"
            />
            <img className="size-24" src="/icons/nodejs.svg" alt="nodejs" />
            <img className="size-24" src="/icons/git.svg" alt="git" />
            <img className="size-24" src="/icons/figma.svg" alt="figma" />
            <img
              className="size-24"
              src="/icons/github-light.svg"
              alt="github-light"
            />
          </div>
        </div>
      </section>

      <section id="summary" className="py-8 mx-auto  px-12 max-w-[1280px]">
        <h3 className="font-semibold ps-2 border-l-4 border-[#5A924E]">
          Projects
        </h3>
        <div className="grid gap-y-6 gap-x-4 grid-cols-1 mt-6 md:grid-cols-2 lg:grid-cols-3">
          <Project />
          <Project />
          <Project />
        </div>
      </section>

      <section id="summary" className="py-8 bg-[#222]">
        <div className="px-12 flex mx-auto justify-start gap-12 max-w-[1280px]">
          <div className="flex-[5] ">
            <h3 className="font-semibold ps-2  border-l-4 border-[#5A924E]">
              What I offer
            </h3>
            <div className="gap-4 mt-6 grid grid-cols-2 ">
              <div className="w-full flex gap-4 rounded-xl border-2 border-[#5A924E] p-4">
                <img src="/icons/1.svg" alt="1" />
                <div className="space-y-1">
                  <h4 className="font-semibold">Frontend Development</h4>
                  <p className="text-sm">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ipsa commodi optio
                  </p>
                </div>
              </div>
              <div className="w-full flex gap-4 rounded-xl border-2 border-[#5A924E] p-4">
                <img src="/icons/2.svg" alt="2" />
                <div className="space-y-1">
                  <h4 className="font-semibold">Frontend Development</h4>
                  <p className="text-sm">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ipsa commodi optio
                  </p>
                </div>
              </div>
              <div className="w-full flex gap-4 rounded-xl border-2 border-[#5A924E] p-4">
                <img src="/icons/rocket.svg" alt="rocket" />
                <div className="space-y-1">
                  <h4 className="font-semibold">Frontend Development</h4>
                  <p className="text-sm">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ipsa commodi optio
                  </p>
                </div>
              </div>
              <div className="w-full flex gap-4 rounded-xl border-2 border-[#5A924E] p-4">
                <img src="/icons/design.svg" alt="design" />
                <div className="space-y-1">
                  <h4 className="font-semibold">Frontend Development</h4>
                  <p className="text-sm">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ipsa commodi optio
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex-[3]">
            <h3 className="font-semibold ps-2 border-l-4 border-[#5A924E]">
              Contact me
            </h3>
            <div className="flex flex-col gap-y-3 py-4 px-6  gap-4 rounded-xl bg-[#5A924E] mt-6">
              <a href="https://mail.google.com/mail/?view=cm&fs=1&to=holam9120@gmail.com">
                <div className="flex gap-4 hover:underline items-center">
                  <img src="/icons/mail.svg" className="size-8" alt="mail" />
                  <span>holam9120@gmail.com</span>
                </div>
              </a>
              <a href="https://github.com/lamdan0901">
                <div className="flex gap-4 hover:underline items-center">
                  <img
                    src="/icons/github-light.svg"
                    className="size-8"
                    alt="github-light"
                  />
                  <span> /lamdan0901</span>
                </div>
              </a>
              <div className="flex gap-4 hover:underline items-center">
                <img
                  src="/icons/linkedin-white.svg"
                  className="size-8"
                  alt="linkedin-white"
                />
                <a href="https://www.linkedin.com/in/lam-ho-786288174/">
                  /in/lam-ho-786288174
                </a>
              </div>
              <div className="flex gap-4 hover:underline items-center">
                <img
                  src="/icons/telegram.svg"
                  className="size-8"
                  alt="telegram"
                />
                <a href="https://t.me/Lamho912">/Lamho912</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function Project() {
  return (
    <div className="overflow-hidden bg-[#919DAB] rounded-2xl">
      <div className="p-5">
        <img
          className="w-full object-cover aspect-video rounded-xl"
          src="/images/avatar_no.jpg"
          alt="avatar"
        />
      </div>
      <div className="space-y-6 p-5 pt-0 project-content-shadow  bg-[#27302E] ">
        <a className="hover:text-[#6dba5c]" href="https://basedict.com/">
          <h3>Basedict.com</h3>
        </a>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa commodi
          optio dicta harum aut omnis.
        </p>
        <a href="https://github.com/lamdan0901/basedict-fe">
          <Button>View detail</Button>
        </a>
      </div>
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

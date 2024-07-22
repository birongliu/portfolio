import React from "react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="rounded-xl py-10 mt-20 bg-slate-800 "
    >
      <div className="p-14 ">
        <div className="p-10 bg-black-200 rounded px-10">
          <h1 className="text-white-100 font-bold text-3xl pb-4">Contact Me</h1>
          <hr className="py-1 w-20 bg-white-100" />
          <p className="text-white-100 py-5">
            {" "}
            Thanks for taking the time to explore my website! I'm always looking
            for new opportunities to connect and collaborate. If you're
            interested in discussing projects, ideas, or just want to say hi,
            please don't hesitate to reach out.
          </p>
          <div className="flex gap-2 items-center">
            <a href="https://linkedin.com/in/birongliu">
              <img
                width={25}
                height={25}
                alt="linkedin"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg"
              />
            </a>
            <a href="https://github.com/birongliu">
              <img
                width={25}
                height={25}
                alt="github"
                src="./icons/github.png"
              />
            </a>
            <a href="mailto:birong.liu75@gmail.com">
              <img
                width={35}
                height={35}
                alt="github"
                src="./icons/email.svg"
              />
            </a>
          </div>          
        </div>
      </div>
    </section>
  );
} 
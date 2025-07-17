import Reveal from "./Reveal";

const Contact = () => {
  return (
    <div className="px-6 max-w-[1000px] mx-auto md:my-12" id="contact">
      <Reveal>
        <div className="grid md:grid-cols-2 place-items-center">
          <div>
            <div className="text-gray-300 my-3">
              <h3 className="text-5xl font-semibold mb-5">
                About <span className="text-sky-500">Me</span>
              </h3>
              <p className="text-justify leading-7 w-10/11 mx-auto">
                Hi! I&apos;m Amarnath Kumar, a passionate and detail-oriented
                B.Tech CSE (AI & ML) student at Brainware University. I have
                hands-on experience in frontend, backend, and full-stack
                development, with a strong focus on creating modern, scalable,
                and user-friendly web applications.
              </p>
              <div className="pb-4"></div>
              <p className="text-justify leading-7 w-10/11 mx-auto">
                Over time, I&apos;ve built several projects using technologies
                like React, Node.js, Express, MongoDB, Tailwind CSS, and more. I
                enjoy turning complex problems into simple, beautiful, and
                intuitive solutions.
              </p>
            </div>
          </div>

          <form
            action="https://getform.io/f/akknjoda"
            method="POST"
            className=" max-w-6xl p-5 md:p-12"
            id="form"
            target="_blank"
          >
            <p className="text-gray-100 font-bold text-xl mb-2">
              Let´s connect!
            </p>
            <input
              type="text"
              id="name"
              placeholder="Your Name ..."
              name="name"
              className="mb-2 w-full rounded-md border border-sky-500 py-2 pl-2 pr-4 bg-slate-600/20"
            />
            <input
              type="email"
              id="email"
              placeholder="Your Email ..."
              name="email"
              className="mb-2 w-full rounded-md border border-sky-500 py-2 pl-2 pr-4 bg-slate-600/20"
            />
            <textarea
              type="text"
              name="message"
              id="textarea"
              cols="30"
              rows="4"
              placeholder="Your Message ..."
              className="mb-2 w-full rounded-md border border-sky-500 py-2 pl-2 pr-4 bg-slate-600/20"
            />
            <button
              type="submit"
              className="w-full py-3 rounded-md text-gray-100 font-semibold text-xl bg-sky-500"
            >
              Send Message
            </button>
          </form>
        </div>
      </Reveal>
    </div>
  );
};

export default Contact;

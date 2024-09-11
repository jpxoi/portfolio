import {
  CSSBadge,
  FlaskBadge,
  HTMLBadge,
  JavaScriptBadge,
  PythonBadge,
  ReactBadge,
  TailwindBadge,
} from "../Atoms/Badges";

function ProjectCard(props) {
  "HTML" in props.stack;

  return (
    <article className="project__card flex flex-col space-x-0 space-y-8 group md:flex-row md:space-x-8 md:space-y-0 mb-16">
      <div className="w-full md:w-1/2">
        <div className="relative flex flex-col items-center col-span-6 row-span-5 gap-8 transition duration-500 ease-in-out transform shadow-xl overflow-clip rounded-xl sm:rounded-xl md:group-hover:-translate-y-1 md:group-hover:shadow-2xl lg:border lg:border-gray-800 lg:hover:border-gray-700 lg:hover:bg-gray-800/50">
          <picture className="rounded-lg shadow-2xl shadow-white/10 aspect-video">
            <source srcSet={props.imgavif} type="image/avif" />
            <source srcSet={props.img} type="image/webp" />
            <img
              loading="lazy"
              className="rounded-lg shadow-2xl shadow-white/10 aspect-video"
              src={props.img}
              alt={props.alt}
              width={700}
              height={393.75}
            />
          </picture>
        </div>
      </div>

      <div className="w-full md:w-1/2 md:max-w-lg">
        <h3 className="project__title text-xl font-bold text-gray-100">
          {props.title}
        </h3>
        <div className="flex flex-wrap mt-2">
          <div className="project__card__badges flex gap-x-2 gap-y-2 md:gap-y-0 flex-row flex-wrap mb-4">
            {props.stack.includes("ReactJS") ? <ReactBadge /> : null}
            {props.stack.includes("TailwindCSS") ? <TailwindBadge /> : null}
            {props.stack.includes("HTML") ? <HTMLBadge /> : null}
            {props.stack.includes("CSS") ? <CSSBadge /> : null}
            {props.stack.includes("JavaScript") ? <JavaScriptBadge /> : null}
            {props.stack.includes("Flask") ? <FlaskBadge /> : null}
            {props.stack.includes("Python") ? <PythonBadge /> : null}
          </div>
          <div className="project__description text-sm mt-2 text-gray-400">
            {props.description}
          </div>
          <footer className="flex items-end justify-start mt-4 gap-x-4">
            {props.github && (
              <a
                href={props.github}
                target="_blank"
                rel="noreferrer"
                role="link"
                className="project__button inline-flex items-center justify-center gap-2 px-3 py-2 space-x-2 text-base text-white transition bg-gray-800 border border-gray-600 focus-visible:ring-yellow-500/80 text-md hover:bg-gray-800 hover:border-gray-900 group max-w-fit rounded-xl hover:text-white focus:outline-none focus-visible:outline-none focus-visible:ring focus-visible:ring-white focus-visible:ring-offset-2 active:bg-black"
              >
                <svg
                  className="size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path>
                </svg>
                Code
              </a>
            )}
            {props.link && (
              <a
                href={props.link}
                target="_blank"
                rel="noreferrer"
                role="link"
                className="project__button inline-flex items-center justify-center gap-2 px-3 py-2 space-x-2 text-base text-white transition bg-gray-800 border border-gray-600 focus-visible:ring-yellow-500/80 text-md hover:bg-gray-800 hover:border-gray-900 group max-w-fit rounded-xl hover:text-white focus:outline-none focus-visible:outline-none focus-visible:ring focus-visible:ring-white focus-visible:ring-offset-2 active:bg-black"
              >
                <svg
                  className="size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                  <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                </svg>
                Preview
              </a>
            )}
          </footer>
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;

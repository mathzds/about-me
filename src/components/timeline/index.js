import React from "react";

export default function Timeline({ events }) {
  return (
    <div className="min-h-screen flex justify-center items-center animate-fade-in">
      <section className="my-5">
        <ol className="relative border-l-2">
          {events.map((event, index) => (
            <li className="mb-10 ml-4" key={index}>
              <div className="absolute w-3 h-3 bg-muted-foreground rounded-full mt-1.5 -left-[0.43rem] border border-muted-foreground bg-white"></div>
              <time className="mb-1 text-sm font-thin leading-none">{event.date}</time>
              <h3 className="text-lg font-semibold">
                {event.link ? (
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary underline hover:text-primary/90 transition-colors"
                    href={event.link}
                  >
                    {event.title}
                  </a>
                ) : (
                  event.title
                )}
              </h3>
              <p className="mb-4 text-base font-normal text-muted-foreground">
                {event.description}
              </p>
            </li>
          ))}
        </ol>
      </section>
    </div>
  );
}

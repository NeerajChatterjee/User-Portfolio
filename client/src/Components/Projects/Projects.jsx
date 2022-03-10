import React from "react";
import ProjectsData from "./ProjectsData";

function Projects() {
  return (
    <section className="p-10 px-8 mx-auto md:p-20">
      <section className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3 ">
        {ProjectsData.map((item, id) => (
          <article
            className="w-full h-full duration-500 bg-center bg-cover shadow-xl cursor-pointer max-w-mdmx-auto hover:-translate-y-2 group lg:max-w-full"
            style={{
              backgroundImage: `url(
                ${item.imgsrc}
              )`,
            }}
          >
            <div className="flex flex-col flex-wrap w-full h-full px-10 duration-300 transform bg-black bg-opacity-80 hover:bg-opacity-90">
              <h1 className="mb-5 text-3xl text-white duration-300 transform translate-y-20 group-hover:translate-y-0">
                {item.title}
                <p>{item.date}</p>
              </h1>
              <div className="w-16 h-2 mb-5 duration-300 transform translate-y-20 bg-yellow-500 rounded-full group-hover:translate-y-0"></div>
              <div className="text-xl text-white duration-500 transform opacity-0 group-hover:opacity-80">
                {item.desc}
                <a href="#">Go to repo</a>
              </div>
            </div>
          </article>
        ))}
      </section>
    </section>
  );
}

export default Projects;

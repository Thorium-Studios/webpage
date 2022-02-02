import React from "react";
import { Link } from "react-router-dom";

export default function Projects() {
  return (
    <div>
      <section id="work" class="mt-5">
        <div class="container">
          <h2 class="mb-2">Our Projects</h2>
          <div class="row gap-2">
            <div class="col-12-xs col-6-md col-3-lg">
              {/* <Link to="/projects/webpage"> */}
              <div class="card p-0">
                <h3 class="card-title m-1">
                  Webpage <span class="badge-orange text-white ml-1">new</span>
                </h3>
                <img src="/img/webpage.png" alt="" />
                <p class="m-1">This very website! Made with ReactJS</p>
              </div>
              {/* </Link> */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

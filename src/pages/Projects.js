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
              <a href="https://vikingtactical.us">
                <div class="card p-0">
                  <h3 class="card-title m-1">VTAC Website</h3>
                  <img src="/img/vtac.png" alt="" />
                  <p class="m-1">VikingTactical's clan website</p>
                </div>
              </a>
              {/* </Link> */}
            </div>
            <div class="col-12-xs col-6-md col-3-lg">
              <Link to="projects/ras">
                <div class="card p-0">
                  <h3 class="card-title m-1">
                    Rás <span class="badge-orange text-white ml-1">new</span>
                  </h3>
                  <center>
                    <img src="/img/ras.png" alt="" />
                  </center>
                  <p class="m-1">The Viking sprinter game</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

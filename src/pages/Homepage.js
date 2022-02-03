import React from "react";
import { Link } from "react-router-dom";

export default function Homepage() {
  return (
    <div>
      <div class="container mt-5">
        <div class="row justify-center">
          <div class="col-12-xs col-5-md">
            <h2>
              <div class="font-xxl">Development is</div>
              <div class="font-xxl text-secondary">Elementary</div>
            </h2>
            <p class="text-gray mt-2 mb-3">
              Best dev studio on the periodic table
            </p>
            <a
              href="#work"
              class="btn-outlined-secondary text-secondary text-hover-white"
            >
              View Our Work
            </a>
          </div>
          <div class="col-12-xs col-5-md">
            <img src="/img/laptop.svg" alt="" />
          </div>
        </div>
      </div>
      {/* About Section */}
      <section id="about" class="bg-secondary-dark-7 text-white mt-5 pt-4 pb-4">
        <div class="container">
          <h2 class="mb-2">About Thorium Studios</h2>
          <p>
            Thorium Studios started as a passion project by our founder Johnny
            Hunter in 2021. It was originally just a place to hone his skills
            and gain experience developing various applications, systems,
            webpages, and more. Since then, we have taken on many projects, both
            in-house and for clients alike.
          </p>
          <p class="mt-1">
            We design and develop a multitude of different kinds of things, with
            a particular focus on Discord bots, G-Suite apps, web-dev, and game
            development.
          </p>
        </div>
      </section>
      {/* Work Section */}
      <section id="work" class="mt-5">
        <div class="container">
          <h2 class="mb-2">Some of Our Work</h2>
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
            <div class="col-12-xs col-6-md col-3-lg">
              <div class="card p-0">
                <h3 class="card-title m-1">Coming Soon...</h3>
                <img src="/img/comingsoon.png" alt="" />
                <p class="m-1">Project to be added</p>
              </div>
            </div>
            <div class="col-12-xs col-6-md col-3-lg">
              <div class="card p-0">
                <h3 class="card-title m-1">Coming Soon...</h3>
                <img src="/img/comingsoon.png" alt="" />
                <p class="m-1">Project to be added</p>
              </div>
            </div>
          </div>
          <div class="row justify-center mt-2">
            <Link to="/projects">
              <button class="btn-primary text-white font-md">View All</button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

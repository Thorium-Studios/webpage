import React from "react";

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
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
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
              <div class="card p-0">
                <h3 class="card-title m-1">
                  Webpage <span class="badge-orange text-white ml-1">new</span>
                </h3>
                <img src="/img/webpage.png" alt="" />
                <p class="m-1">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Totam, hic!
                </p>
              </div>
            </div>
            <div class="col-12-xs col-6-md col-3-lg">
              <div class="card p-0">
                <h3 class="card-title m-1">Thorium Recipes</h3>
                <img src="/img/food.png" alt="" />
                <p class="m-1">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Totam, hic!
                </p>
              </div>
            </div>
            <div class="col-12-xs col-6-md col-3-lg">
              <div class="card p-0">
                <h3 class="card-title m-1">Mario Club</h3>
                <img src="/img/mario.png" alt="" />
                <p class="m-1">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Totam, hic!
                </p>
              </div>
            </div>
            <div class="col-12-xs col-6-md col-3-lg">
              <div class="card p-0">
                <h3 class="card-title m-1">Thorium Things</h3>
                <img src="/img/notes.png" alt="" />
                <p class="m-1">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Totam, hic!
                </p>
              </div>
            </div>
          </div>
          <div class="row justify-center mt-2">
            <button class="btn-primary text-white font-md">View All</button>
          </div>
        </div>
      </section>
    </div>
  );
}

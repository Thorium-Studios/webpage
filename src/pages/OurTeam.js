import React from "react";
import { Link } from "react-router-dom";

export default function OurTeam() {
  return (
    <div>
      <section id="work" class="mt-5">
        <div class="container">
          <h2 class="mb-2 font-xl">Our Team Members</h2>
          <div class="row gap-2">
            <div class="col-12-xs col-6-md col-4-lg">
              <a href="https://twitter.com/J_Hunter_09">
                <div class="card p-0 bg-primary-dark-5 text-white">
                  <center>
                    <h3 class="card-title m-1">Johnny Hunter</h3>
                    <img src="/img/team/Hunter.png" alt="" />
                    <p class="m-1">Founder, CEO, Lead Developer</p>
                  </center>
                </div>
              </a>
            </div>

            <div class="col-12-xs col-6-md col-4-lg">
              <a href="#">
                <div class="card p-0 bg-secondary-dark-5 text-white">
                  <center>
                    <h3 class="card-title m-1">Syco</h3>
                    <img src="/img/team/Syco2.png" alt="" />
                    <p class="m-1">Director of Design</p>
                  </center>
                </div>
              </a>
            </div>

            <div class="col-12-xs col-6-md col-4-lg">
              <a href="https://twitter.com/realStratigan">
                <div class="card p-0 bg-secondary-dark-5 text-white">
                  <center>
                    <h3 class="card-title m-1">Stratigan</h3>
                    <img src="/img/team/Stratigan2.png" alt="" />
                    <p class="m-1">Director of Marketing</p>
                  </center>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

import React from "react";
import { Link } from "react-router-dom";

export default function Project210() {
  return (
    <div>
      <div class="container mt-5">
        <div class="row justify-center">
          <div class="col-12-xs col-5-md">
            <img src="/img/projects/210.png" alt="" />
          </div>
          <div class="col-12-xs col-5-md">
            <h2>
              <div class="font-xxl text-primary">Project 210</div>
            </h2>
            <p class="text-secondary mt-2 mb-3">
              Breakout clone made in the Pico-8 fantasy console
              <br />
              Created as a learning project for pico-8.
            </p>
            <div className="row gap-2">
              <div className="col-12-xs col-5-md">
                <a href="#" class="btn-slate text-gray">
                  Play in browser
                </a>
                <div className="p-2"></div>
                <div className="row gap-1">
                  <div className="col-12-xs col-12-md col-12-lg">
                    <a
                      target="_blank"
                      href="http://dl.thoriumstudios.us/210/dl-win.html"
                      className="btn-outlined-primary text-primary text-hover-white"
                    >
                      Download for Windows
                    </a>
                  </div>
                </div>
                <div className="row gap-1">
                  <div className="col-12-xs col-12-md col-12-lg">
                    <a
                      target="_blank"
                      href="http://dl.thoriumstudios.us/210/dl-mac.html"
                      className="btn-outlined-primary text-primary text-hover-white"
                    >
                      Download for Mac
                    </a>
                  </div>
                </div>
                <div className="row gap-1">
                  <div className="col-12-xs col-12-md col-12-lg">
                    <a
                      target="_blank"
                      href="http://dl.thoriumstudios.us/210/dl-linux.html"
                      className="btn-outlined-primary text-primary text-hover-white"
                    >
                      Download for Linux
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

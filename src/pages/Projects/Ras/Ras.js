import React from "react";
import { Link } from "react-router-dom";

export default function Ras() {
  return (
    <div>
      <div class="container mt-5">
        <div class="row justify-center">
          <div class="col-12-xs col-5-md">
            <img src="/img/projects/ras.png" alt="" />
          </div>
          <div class="col-12-xs col-5-md">
            <h2>
              <div class="font-xxl text-primary">Rás</div>
            </h2>
            <p class="text-secondary mt-2 mb-3">The Viking sprinter game</p>
            <div className="row gap-2">
              <div className="col-12-xs col-5-md">
                <Link
                  to="/projects/ras/play"
                  class="btn-outlined-primary text-primary text-hover-white"
                >
                  Play in browser
                </Link>
                <div className="p-2"></div>
                <div className="row gap-1">
                  <div className="col-12-xs col-12-md col-12-lg">
                    <a href="#" className="btn-slate text-gray">
                      Download for Windows
                    </a>
                  </div>
                </div>
                <div className="row gap-1">
                  <div className="col-12-xs col-12-md col-12-lg">
                    <a href="#" className="btn-slate text-gray">
                      Download for Mac
                    </a>
                  </div>
                </div>
                <div className="row gap-1">
                  <div className="col-12-xs col-12-md col-12-lg">
                    <a href="#" className="btn-slate text-gray">
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

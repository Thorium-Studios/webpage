import React from "react";
import { Link } from "react-router-dom";

export default function SiteHeader() {
  return (
    <div className="site-header bg-primary text-white">
      <nav class="navbar justify-between mb-4 pb-1 pt-1">
        <div class="container">
          <Link to="/">
            <h1 class="site-title">Thorium Studios</h1>
          </Link>
          <ul class="display-f">
            <li class="ml-2 text-hover-secondary">
              <Link to="/projects">Projects</Link>
            </li>
            <li class="ml-2 text-hover-secondary">
              <Link to="our-team">Our Team</Link>
            </li>
            <li className="ml-2 text-hover-secondary">
              <a href="https://discord.gg/wFJHDYWuQr">Discord</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

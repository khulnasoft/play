import React from "react";
import SlackIcon from "../../assets/images/social-icons/slack.svg";
import DockerIcon from "../../assets/images/social-icons/docker.svg";
import YoutubeIcon from "../../assets/images/social-icons/youtube.svg";
// import TwitterIcon from "../../assets/images/social-icons/twitter.svg";
import GithubIcon from "../../assets/images/social-icons/github.svg";
import CalendarIcon from "../../assets/images/social-icons/calendar.png";
import LinkedinIcon from "../../assets/images/social-icons/linkedin.png";
import { ReactComponent as TwitterLogo } from "../../assets/images/social-icons/twitter.svg";
import FooterWrapper from "./Footer.styles";

const Footer = () => {
  return (
    <FooterWrapper>
      <div className="container">
        <div className="footer-links resources">
          <h3 className="section-title">
            <a className="title-link" href="https://meshplay.khulnasoft.com/community">
              Project
            </a>
          </h3>
          <ul className="section-categories">
            <li>
              <a className="category-link" href="https://meshplay.khulnasoft.com/calendar">
                <img src={CalendarIcon} alt="Calendar Icon" />
                Calendar
              </a>
            </li>

            <li>
              <a
                className="category-link"
                href="https://hub.docker.com/u/meshplay/"
              >
                <img src={DockerIcon} alt="Docker Icon" />
                Docker Hub
              </a>
            </li>
            <li>
              <a className="category-link" href="https://slack.meshplay.khulnasoft.com/">
                <img src={SlackIcon} alt="Slack Icon" />
                Slack
              </a>
            </li>
            <li>
              <a
                className="category-link"
                href="https://github.com/khulnasoft/play"
              >
                <img src={GithubIcon} alt="GitHub Icon" />
                Github
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-links getting-started">
          <h3 className="section-title">
            <a
              className="title-link"
              href="https://meshplay.khulnasoft.com/#getting-started"
            >
              Getting Started
            </a>
          </h3>
          <ul className="section-categories">
            <li>
              <a className="category-link" href="https://docs.meshplay.khulnasoft.com/">
                Docs
              </a>
            </li>
            <li>
              <a className="category-link" href="https://meshplay.khulnasoft.com/features">
                Features
              </a>
            </li>
            <li>
              <a
                className="category-link"
                href="https://meshplay.khulnasoft.com/integrations"
              >
                Integrations
              </a>
            </li>
            <li>
              <a
                className="category-link"
                href="https://meshplay.khulnasoft.com/#getting-started"
              >
                Run Meshplay
              </a>
            </li>
            <li>
              <a className="category-link" href="https://meshplay.khulnasoft.com/catalog">
                Meshplay Catalog
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-links community">
          <h3 className="section-title">
            <a className="title-link" href="https://meshplay.khulnasoft.com/community">
              Community
            </a>
          </h3>
          <ul className="section-categories">
            <li>
              <a className="category-link" href="http://discuss.meshplay.khulnasoft.com/">
                Discussion Forum
              </a>
            </li>
            {/* <li>
              <a
                className="category-link"
                href="https://meshplay.khulnasoft.com/blog"
              >Blog
              </a>
            </li> */}
            <li>
              <a className="category-link" href="https://cloud.meshplay.khulnasoft.com">
                Meshplay Cloud
              </a>
            </li>
            {/* <li>
              <a
                className="category-link"
                href="https://khulnasoft.com/community/members"
              >
                Community Members
              </a>
            </li> */}
            <li>
              <a className="category-link" href="https://meshplay.khulnasoft.com/calendar">
                Community Events
              </a>
            </li>
            <li>
              <a className="category-link" href="https://meshplay.khulnasoft.com/subscribe">
                Mailing Lists
              </a>
            </li>
            {/* <li>
              <a
                className="category-link"
                href="https://khulnasoft.com/service-mesh-landscape"
              >Service Mesh Comparison
              </a>
            </li> */}
          </ul>
        </div>
        <div className="footer-links resources">
          <h3 className="section-title">
            <a className="title-link" href="https://meshplay.khulnasoft.com/calendar">
              Social
            </a>
          </h3>
          <ul className="section-categories">
            <li>
              <a className="category-link" href="https://meshplay.khulnasoft.com/blog">
                {/* <img src={TwitterIcon} alt="Twitter Icon"/>
                Twitter */}
              </a>
            </li>
            <li>
              <a
                className="category-link"
                href="https://twitter.com/meshplayio/"
              >
                <TwitterLogo />
                Twitter
              </a>
            </li>
            <li>
              <a
                className="category-link"
                href="https://www.youtube.com/channel/UCFL1af7_wdnhHXL1InzaMvA"
              >
                <img src={YoutubeIcon} alt="Youtube Icon" />
                Youtube
              </a>
            </li>
            <li>
              <a
                className="category-link"
                href="https://www.linkedin.com/company/meshplay/"
              >
                <img src={LinkedinIcon} alt="Linkedin Icon" />
                Linkedin
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="container flex copyright">
        <div className="text">
          &copy; {new Date().getFullYear()}- The Meshplay Authors
        </div>
        <div className="text">Proudly representing every CNCF project</div>
        <div className="text">
          <a href="https://github.com/khulnasoft/meshplay/blob/master/CODE_OF_CONDUCT.md">
            Code of Conduct
          </a>
        </div>
      </div>
    </FooterWrapper>
  );
};

export default Footer;

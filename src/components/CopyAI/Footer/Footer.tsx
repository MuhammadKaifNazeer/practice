import React from "react";

const Footer: React.FC = () => {
  return (
    <div className="z-10 flex w-full flex-col items-center border-t border-grey-200 px-8 py-4 self-end">
      <div className="flex w-full max-w-screen-xl flex-1 flex-col pb-20 lg:flex-row">
        <div className="mt-6 flex flex-1 flex-col">
          <h4 className="text-md mb-3">Company</h4>
          <a
            href="https://jobs.lever.co/CopyAI"
            target="_blank"
            className="py-1 text-xs text-grey-400 hover:text-grey-500"
            rel="noopener noreferrer"
          >
            Work With Us
          </a>
          <a
            href="https://www.copy.ai/contact-us"
            target="_blank"
            className="py-1 text-xs text-grey-400 hover:text-grey-500"
            rel="noopener noreferrer"
          >
            Contact Us
          </a>
        </div>
        <div className="mt-6 flex flex-1 flex-col">
          <h4 className="text-md mb-3">Help &amp; Support</h4>
          <a
            href="https://community.copy.ai/knowledge-base"
            target="_blank"
            className="py-1 text-xs text-grey-400 hover:text-grey-500"
            rel="noopener noreferrer"
          >
            View Tutorials
          </a>
          <a
            href="https://form.typeform.com/to/OKJSvGEy"
            target="_blank"
            className="py-1 text-xs text-grey-400 hover:text-grey-500"
            rel="noopener noreferrer"
          >
            Request a New Feature
          </a>
          <a
            href="https://form.typeform.com/to/e7V02YP4"
            target="_blank"
            className="py-1 text-xs text-grey-400 hover:text-grey-500"
            rel="noopener noreferrer"
          >
            Report a Bug
          </a>
          <a
            href="https://form.typeform.com/to/mv6I2Fmw"
            target="_blank"
            className="py-1 text-xs text-grey-400 hover:text-grey-500"
            rel="noopener noreferrer"
          >
            Report an Outage
          </a>
        </div>
        <div className="mt-6 flex flex-1 flex-col">
          <h4 className="text-md mb-3">Community &amp; Tools</h4>
          <a
            href="https://community.copy.ai"
            target="_blank"
            className="py-1 text-xs text-grey-400 hover:text-grey-500"
            rel="noopener noreferrer"
          >
            Join Our Community
          </a>
          <a
            href="https://www.linkedin.com/company/copyai"
            target="_blank"
            className="py-1 text-xs text-grey-400 hover:text-grey-500"
            rel="noopener noreferrer"
          >
            Follow Us On LinkedIn
          </a>
        </div>
        <div className="mt-6 flex flex-1 flex-col">
          <h4 className="text-md mb-3">Terms &amp; Policies</h4>
          <a
            href="https://www.copy.ai/privacy-notice"
            target="_blank"
            className="py-1 text-xs text-grey-400 hover:text-grey-500"
            rel="noopener noreferrer"
          >
            Privacy Notice
          </a>
          <a
            href="https://www.copy.ai/terms-of-service"
            target="_blank"
            className="py-1 text-xs text-grey-400 hover:text-grey-500"
            rel="noopener noreferrer"
          >
            Terms of Service
          </a>
          <a
            href="https://www.notion.so/copyai/CopyAI-Usage-Guidelines-38ce4874063d4020b00ef6a206bdeee2"
            target="_blank"
            className="py-1 text-xs text-grey-400 hover:text-grey-500"
            rel="noopener noreferrer"
          >
            Usage Guidelines
          </a>
        </div>
      </div>
      <div className="flex w-full max-w-screen-xl flex-1 items-end justify-start">
        <a className="mr-2 h-8 w-28 cursor-pointer" href="/">
          <svg
            version="1.1"
            id="copyai-logo-2023"
            xmlns="http://www.w3.org/2000/svg"
            height="100%"
            width="100%"
            viewBox="0 0 910 276"
            xmlSpace="preserve"
          >
            <g id="logo">
              <path
                id="dot"
                fill="#693EE0"
                className="st0"
                d="M677.9,196c0,14.7-12.1,26.7-26.7,26.7c-14.9,0-27-12.1-27-26.7c0-14.9,12.1-27,27-27
            C665.8,169,677.9,181.1,677.9,196z"
              />
              <path
                id="copyai"
                className="st1"
                fill="#171717"
                d="M77.8,101.2c16.4,0,25.3,7.5,28.4,22.1h43.1c-4.9-32.2-27.9-56-71-56c-43.7,0-75.6,29.3-75.6,77.9
            c0,48.3,31.9,77.6,75.6,77.6c40.8,0,65.5-23,70.7-56.3h-42.8c-3.7,14.7-11.5,22.4-28.2,22.4c-20.1,0-32.2-16.7-32.2-44.2
            C45.9,117,58.3,101.2,77.8,101.2z M243.2,67.3c-43.4,0-77,29.9-77,77.9c0,48.3,33.6,77.6,77,77.6c43.4,0,77-29.6,77-77.6
            C320.2,96.9,286.5,67.3,243.2,67.3z M243.2,188.9c-20.1,0-34.5-16.4-34.5-43.7c0-27.6,14.4-44,34.2-44c20.1,0,34.2,16.4,34.2,44
            C277.1,172.5,262.7,188.9,243.2,188.9z M427.2,67.3c-22.7,0-39.4,9.5-49.4,26.7V70.8h-38.2v202.6h42.5v-70.1
            c10.3,12.9,25,19.5,43.4,19.5c35.1,0,67.5-28.2,67.5-77.6C493,94.3,462.2,67.3,427.2,67.3z M415.7,189.1
            c-19.8,0-33.6-17-33.6-44c0-26.4,13.8-44.2,33.6-44.2c20.4,0,34.2,17.8,34.2,44.2C449.9,171.9,435.8,189.1,415.7,189.1z
            M572.4,163.6l-33.9-92.8h-45.1l57.2,135.3l-31,67.2h44.8l86.8-202.6h-43.1L572.4,163.6z M768.5,67.3c-41.1,0-64.9,17.2-69.2,49.1
            h42.8c2.9-12.9,11.2-19.2,26.7-19.2c15.2,0,24.4,7.8,24.4,23v7.5l-43.1,4.3c-38.8,3.7-53.4,21.8-53.4,46.3
            c0,25.6,21.3,44.5,54,44.5c19.5,0,35.6-7.2,46.8-22.1v18.7h37.9v-96.2C835.5,84.6,810.5,67.3,768.5,67.3z M751.1,188.9
            c-12.7,0-20.9-6.9-20.9-17.7c0-10.3,7.2-16.4,19.8-17.7l35.6-3.4v5.2C785.6,179.4,771.4,188.9,751.1,188.9z"
              />
            </g>
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Footer;


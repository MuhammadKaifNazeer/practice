import React from "react";

const FAQst: React.FC = () => {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
        <h2 className="text-2xl font-bold leading-10 tracking-tight text-black">
          Frequently asked questions
        </h2>
        <div className="mt-20">
          <dl className="space-y-16 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-16 sm:space-y-0 lg:gap-x-10">
            <div>
              <dt className="text-base font-semibold leading-7 text-black">
                Are there any training or onboarding resources available for new
                users?
              </dt>
              <dd className="mt-2 text-base leading-7 text-neutral-700">
                <p>
                  Yes, we offer a range of tutorials, tips and tricks, and
                  knowledge articles to help users get acquainted with all of
                  Rogue's features.
                </p>
              </dd>
            </div>
            <div>
              <dt className="text-base font-semibold leading-7 text-black">
                What is Rogue's RFP shredder?
              </dt>
              <dd className="mt-2 text-base leading-7 text-neutral-700">
                <p>
                  Manually sifting through solicitations and outlining volumes
                  can be time-consuming. Our RFP Shredder accelerates this by
                  identifying the volumes you'll want to address. You can then
                  effortlessly add relevant section headers in the “Templates”
                  section to guide your writing.
                </p>
              </dd>
            </div>
            <div>
              <dt className="text-base font-semibold leading-7 text-black">
                What is Rogue Deep Dive?
              </dt>
              <dd className="mt-2 text-base leading-7 text-neutral-700">
                <p>
                  Rogue Deep Dive is part of how Rogue uses your content
                  (winning proposals, resumes, past performance, etc.) to
                  customize the AI to generate content specific to{" "}
                  <strong>your</strong> company.
                </p>
              </dd>
            </div>
            <div>
              <dt className="text-base font-semibold leading-7 text-black">
                What's the protocol for handling sensitive information like CUI?
              </dt>
              <dd className="mt-2 text-base leading-7 text-neutral-700">
                <p>
                  We prioritize your data's security, which is why Rogue is NIST
                  800-171 compliant and suitable for storing and processing CUI
                  data.
                </p>
              </dd>
            </div>
            <div>
              <dt className="text-base font-semibold leading-7 text-black">
                If I'm proposing to the same opportunity as someone else, will
                we end of with identical or highly similar proposals?
              </dt>
              <dd className="mt-2 text-base leading-7 text-neutral-700">
                <p>
                  No, because your generations are informed by every generation
                  you have done previously. Even if you and another user started
                  from scratch on the same opportunity having never before used
                  Rogue, your input to the model (RLHF) will quickly diverge
                  your generation outputs.
                </p>
              </dd>
            </div>
            <div>
              <dt className="text-base font-semibold leading-7 text-black">
                How does document exporting work?
              </dt>
              <dd className="mt-2 text-base leading-7 text-neutral-700">
                <p>
                  Our documents are crafted in a universal markup language,
                  making it a breeze to copy and paste into any writing tool.
                  When you transfer content from Rogue into your editor, it
                  seamlessly matches your existing format. We've found this
                  approach to be more straightforward than traditional export
                  tools.
                </p>
              </dd>
            </div>
            <div>
              <dt className="text-base font-semibold leading-7 text-black">
                {" "}
                Is Rogue integrated with ChatGPT?
              </dt>
              <dd className="mt-2 text-base leading-7 text-neutral-700">
                <p>
                  Rogue is designed to be ahead of the curve. We're model
                  agnostic, ensuring flexibility to adapt to the best AI models
                  available. Currently, we're integrated with Microsoft Azure’s
                  OpenAI GPT-4, fine-tuned to align with government proposal
                  writing standards.
                </p>
              </dd>
            </div>
            <div>
              <dt className="text-base font-semibold leading-7 text-black">
                How often is the Microsoft Azure’s OpenAI GPT updated within
                Rogue
              </dt>
              <dd className="mt-2 text-base leading-7 text-neutral-700">
                <p>
                  We maintain a close partnership with Microsoft and ensure that
                  we're always using the latest and most optimized version of
                  OpenAI GPT.
                </p>
              </dd>
            </div>
            <div>
              <dt className="text-base font-semibold leading-7 text-black">
                How does Rogue handle multi-user collaboration?
              </dt>
              <dd className="mt-2 text-base leading-7 text-neutral-700">
                <p>
                  Rogue supports multi-user collaboration, allowing teams to
                  work together seamlessly in the same documents at the same
                  time. With features like real-time editing and feedback, teams
                  can efficiently produce content in a collaborative
                  environment.
                </p>
              </dd>
            </div>
            <div>
              <dt className="text-base font-semibold leading-7 text-black">
                Does my data make the model better for my competitors?
              </dt>
              <dd className="mt-2 text-base leading-7 text-neutral-700">
                <p>
                  No, your data is kept private within your organization's
                  database.
                </p>
              </dd>
            </div>
            <div>
              <dt className="text-base font-semibold leading-7 text-black">
                How can I incorporate my old content into Rogue?
              </dt>
              <dd className="mt-2 text-base leading-7 text-neutral-700">
                <p>
                  It's simple! Just upload your content via the Data Shelf, and
                  let our system do the rest. You can then use the deep dive
                  function in chat to pull information from your data shelf.
                </p>
              </dd>
            </div>
            <div>
              <dt className="text-base font-semibold leading-7 text-black">
                How does Rogue handle Sections L&amp;M?
              </dt>
              <dd className="mt-2 text-base leading-7 text-neutral-700">
                <p>
                  Our AI smartly parses Sections L&amp;M to generate an outline,
                  allowing you to seamlessly integrate relevant sections from C
                  into the template for the volume, optimizing your content
                  creation process.
                </p>
              </dd>
            </div>
            <div>
              <dt className="text-base font-semibold leading-7 text-black">
                Can I upload resumes to Rogue?
              </dt>
              <dd className="mt-2 text-base leading-7 text-neutral-700">
                <p>
                  Absolutely! You can upload resumes via the Rogue Data Shelf.
                </p>
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
};

export default FAQst;

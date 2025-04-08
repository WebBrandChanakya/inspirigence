import Form from "@/components/ui/Form";
import PageBanner from "@/components/ui/PageBanner";
import React from "react";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Follow, LinksData } from "@/content/Links";
import Link from "next/link";
const page = () => {
  const ContactLinks = LinksData.find(
    (section) => section.title === "Contact Info"
  );
  return (
    <>
      <PageBanner data={"Contact Us"} />
      <section className=" bg-white dark:bg-darkLvl1 ">
        {/* Contact Info & Social Media Section */}
        <div className="md:px-20 bg-primarybg items-center flex space-y-10 flex-col-reverse md:flex-row justify-center mx-auto w-full md:p-10  ">
          {/* Left Section */}
          <div className="pb-28 px-10 ">
            <div className="space-y-4">
              <div className="max-w-7xl mx-auto mb-8">
                <h2 className="text-3xl font-bold text-secondary dark:text-white">
                  Get In Touch
                </h2>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  For any assistance, please reach out to us. Submit your
                  queries here, and <br />
                  we will get back to you within two to three working days
                </p>
              </div>
              {ContactLinks.links.map((link, index) =>
                link.href ? (
                  <Link
                    key={index}
                    className="text-secondary dark:text-white block"
                    href={link.href}
                  >
                    {link.label}
                  </Link>
                ) : (
                  <div
                    key={index}
                    className="text-secondary dark:text-white  lg:w-4/6"
                  >
                    {link.label}
                  </div>
                )
              )}
            </div>

            {/* Social Media Icons */}
            <div className="flex mt-4 space-x-4  ">
              <Link
                href={Follow.Instagram}
                className="w-8 h-8 flex justify-center items-center bg-primary rounded-full"
              >
                <FaInstagram className="text-white text-lg" />
              </Link>
              <Link
                href={Follow.Twitter}
                className="w-8 h-8 flex justify-center items-center bg-primary rounded-full "
              >
                <FaXTwitter className="text-white text-lg" />
              </Link>
              <Link
                href={Follow.Facebook}
                className="w-8 h-8 flex justify-center items-center bg-primary rounded-full "
              >
                <FaFacebookF className="text-white text-lg" />
              </Link>
              <Link
                href={Follow.LinkedIn}
                className="w-8 h-8 flex justify-center items-center bg-primary rounded-full "
              >
                <FaLinkedin className="text-white text-lg" />
              </Link>
            </div>
          </div>

          {/* Right Section */}
          <div className="bg-white dark:bg-secondary p-10 rounded-xl shadow-lg max-w-lg mx-auto md:mx-0">
            <h3 className="text-xl font-semibold mb-6 text-secondary dark:text-white">
              Send Us Message
            </h3>
            <Form />
          </div>
        </div>
      </section>
    </>
  );
};

export default page;

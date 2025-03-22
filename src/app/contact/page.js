import Form from "@/components/ui/Form";
import PageBanner from "@/components/ui/PageBanner";
import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import { LinksData } from "@/content/Links";
import Link from "next/link";
const page = () => {
  const ContactLinks = LinksData.find(
    (section) => section.title === "Contact Info"
  );
  return (
    <>
      <PageBanner data={"Contact Us"} />
      <section className=" bg-gray-100 dark:bg-secondary ">
        {/* Contact Info & Social Media Section */}
        <div className="px-20 flex justify-center mx-auto w-full bg-white dark:bg-primarybg p-10  ">
          {/* Left Section */}
          <div className="pb-28   px-10 ">
            <div className="space-y-4">
              <div className="max-w-7xl mx-auto mb-8">
                <h2 className="text-3xl font-bold text-secondary dark:text-white">Get In Touch</h2>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  Feel free to contact us! Submit your queries here and we will
                  get
                  <br />
                  back to you as soon as possible.
                </p>
              </div>
              {ContactLinks.links.map((link, index) => (
                <Link
                  className="text-secondary  dark:text-white block"
                  href={link.href}
                  key={index}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Social Media Icons */}
            <div className="flex space-x-5 mt-8">
              <FaFacebook className="text-2xl text-primary cursor-pointer hover:text-gray-600" />
              <FaInstagram className="text-2xl text-primary cursor-pointer hover:text-gray-600" />
              <FaLinkedin className="text-2xl text-primary cursor-pointer hover:text-gray-600" />
              <FaYoutube className="text-2xl text-primary cursor-pointer hover:text-gray-600" />
            </div>
          </div>

          {/* Right Section */}
          <div className="bg-white dark:bg-secondary p-10 rounded-xl shadow-lg max-w-lg mx-auto md:mx-0 md:right-32">
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

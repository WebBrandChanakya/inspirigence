"use client";


export default function ContactBtn() {
  const scrollToFooter = () => {
    const footer = document.getElementById("quote");
    if (footer) {
      footer.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <button
      onClick={scrollToFooter}
      className="bg-primary rounded-full py-3 px-7 lg:text-base font-semibold text-white hover:bg-primary cursor-pointer  hover:scale-95 transition-all duration-100 transform md:w-fit "
    >
      <span>Book A Free Consultation</span>
    </button>
  );
}

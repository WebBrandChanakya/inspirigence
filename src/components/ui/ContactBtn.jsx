"use client";


export default function ContactBtn({cta }) {
  const scrollToFooter = () => {
    const footer = document.getElementById("quote");
    if (footer) {
      footer.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <button
      onClick={scrollToFooter}
      className={`bg-min ${cta?'rounded-xl':'rounded-full'} py-3 px-7 lg:text-base font-semibold text-white hover:bg-min cursor-pointer  hover:scale-95 transition-all duration-100 transform md:w-fit`}>
      <span>Get A Free Consultation</span>
    </button>
  );
}

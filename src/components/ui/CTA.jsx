import Link from "next/link";

export default function CTA({ title, description, subtext, buttonText, buttonLink, imageSrc }) {
    return (
      <div className="flex flex-col md:flex-row items-center justify-between bg-primary text-white rounded-2xl shadow-lg mx-auto m-5">
        {/* Left Side - Text & Input */}
        <div className="md:w-2/3 p-6 lg:px-20">
          {title && <h2 className="text-2xl md:text-3xl font-bold mb-3">{title}</h2>}
          {description && <p className="text-white/80 mb-6">{description}</p>}
          {subtext && <p className="mb-6 font-semibold">{subtext}</p>}
          {buttonText && buttonLink && (
            <div className="flex items-center gap-2">
              <Link className='bg-min hover:scale-95 transition-all duration-100 transform p-5 text-white rounded-xl' href={buttonLink}>{buttonText}</Link>
            </div>
          )}
        </div>
  
        {/* Right Side - Image */}
        {imageSrc && (
          <div className="md:w-1/3 -m-5 hidden lg:block border rounded-lg">
            <img 
              src={imageSrc} 
              alt="Business analytics"
              className="rounded-lg shadow-md"
            />
          </div>
        )}
      </div>
    );
}

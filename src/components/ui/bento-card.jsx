import { Link } from "react-router-dom";

const BentoCard = ({
  icon,
  title,
  description,
  buttonText,
  buttonVariant = "primary",
  href = "#",
  btnColor,
}) => {
  return (
    <div
      className={`bento-card p-8 flex flex-col justify-between min-h-[340px] border
      bg-white border-gray-100`}
    >
      <div>
        <div
          className={`w-12 h-12 rounded-[2.5rem] flex items-center justify-center text-xl mb-6
           bg-indigo-50`}
        >
          {icon}
        </div>

        <h4 className="font-bold mb-3">{title}</h4>

        <p className={`text-xs leading-relaxed text-gray-500`}>{description}</p>
      </div>

      <Link
        to={href}
        className={`w-full mt-8 py-3 rounded-full text-[10px] font-bold uppercase text-center tracking-widest transition
          ${
            buttonVariant === "primary"
              ? `${btnColor} text-white shadow-indigo-100`
              : "border border-gray-200 text-black hover:bg-gray-50"
          }`}
      >
        {buttonText}
      </Link>
    </div>
  );
};

function BentoBox({ className = "", children }) {
  return (
    <div
      className={[
        "rounded-[2.5rem] border border-[#f2f2f7] transition-all duration-400",
        "hover:-translate-y-[5px] hover:shadow-[0_20px_40px_rgba(0,0,0,0.04)]",
        className,
      ].join(" ")}
    >
      {children}
    </div>
  );
}

export { BentoBox, BentoCard };

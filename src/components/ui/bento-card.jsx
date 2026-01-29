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

export default BentoCard;

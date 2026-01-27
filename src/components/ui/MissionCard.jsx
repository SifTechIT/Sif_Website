import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const MissionCard = ({
  icon,
  title,
  description,
  action,
  highlight = false,
  href = "#",
}) => {
  return (
    <div
      className={`bento-card p-8 border
        ${highlight ? "bg-purple-50/50 border-purple-100" : ""}
        `}
    >
      <div className="mb-6">{icon}</div>

      <h4 className="font-bold mb-2">{title}</h4>
      <p className={`text-xs mb-6 text-gray-500`}>{description}</p>
      <Link
        to={href}
        className={`text-xs uppercase tracking-widest text-purple-600 flex items-center py-2   `}
      >
        <div className="">{action}</div>
        <ChevronRight className="h-4 w-4" />
      </Link>
    </div>
  );
};
export default MissionCard;

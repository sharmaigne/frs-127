// TODO: Add tooltips
import DoneAllIcon from "@/public/icons/doneAll";
import CheckIcon from "@/public/icons/check";
import RemoveIcon from "@/public/icons/remove";
import CloseIcon from "@/public/icons/close";

const ProgressIcon = ({ status }: { status: string }) => {
  const icons: { [key: string]: JSX.Element } = {
    sent: <DoneAllIcon className="w-8 h-8 fill-secondary" />,
    approved: <DoneAllIcon className="w-8 h-8 fill-secondary" />,
    pending: <RemoveIcon className="w-8 h-8 fill-accent" />,
    changes_requested: <CheckIcon className="w-8 h-8 fill-accent" />,
    rejected: <CloseIcon className="w-8 h-8 fill-primary" />,
    default: <DoneAllIcon className="w-8 h-8 fill-none" />,
  };

  const colors: { [key: string]: string } = {
    sent: "secondary",
    approved: "secondary",
    changes_requested: "accent",
    pending: "accent",
    rejected: "primary",
    default: "text",
  };

  const color = colors[status] || colors.default;

  const colorConfig: { [key: string]: { border: string; bg: string } } = {
    primary: {
      border: "border-primary",
      bg: "bg-primary-50",
    },
    secondary: {
      border: "border-secondary",
      bg: "bg-secondary-50",
    },
    accent: {
      border: "border-accent",
      bg: "bg-accent-50",
    },
    default: {
      border: "border-darker",
      bg: "bg-text-50",
    },
  };

  return (
    <div className="flex justify-center">
      <div
        className={`p-3 ${colorConfig[color]?.border} ${colorConfig[color]?.bg} border-2 w-fit rounded-full`}
      >
        {icons[status] || icons.default}
      </div>
    </div>
  );
};

export default ProgressIcon;

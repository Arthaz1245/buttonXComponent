const Button = ({
  text,
  isDisabled,
  shadowStatus,
  icon,
  color,
  weight,
  height,
  border,
  textColor,
  iconPosition,
  hover,
}) => {
  return (
    <button
      className={
        hover
          ? border
            ? `${shadowStatus} ${weight} ${color} ${height} rounded-md  border ${border} text-center ${textColor} text-sm font-medium`
            : `${shadowStatus} ${weight} ${color} ${height} rounded-md text-center ${textColor} text-sm font-medium ${hover} `
          : border
          ? `${shadowStatus} ${weight} ${color} ${height} rounded-md  border ${border} text-center ${textColor} text-sm font-medium`
          : `${shadowStatus} ${weight} ${color} ${height} rounded-md text-center ${textColor} text-sm font-medium `
      }
      disabled={isDisabled}
    >
      {icon && iconPosition === "left" && (
        <div className="w-4 h-4 relative flex-col justify-start items-start inline-flex mr-2">
          {icon}
        </div>
      )}
      {text}
      {icon && iconPosition !== "left" && (
        <div className="w-4 h-4 relative flex-col justify-start items-start inline-flex ml-2">
          {icon}
        </div>
      )}
    </button>
  );
};

export default Button;

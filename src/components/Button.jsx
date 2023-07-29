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
}) => {
  return (
    <button
      className={
        border
          ? `${shadowStatus} ${weight} ${color} ${height} rounded-md  border ${border} text-center ${textColor} text-sm font-medium`
          : `${shadowStatus} ${weight} ${color} ${height} rounded-md text-center ${textColor} text-sm font-medium`
      }
      disabled={isDisabled}
    >
      {icon ? (
        <div
          className={
            iconPosition === "right"
              ? `w-4 h-4 relative flex-col justify-start items-start inline-flex`
              : `w-4 h-4 relative flex-col justify-end items-end inline-flex `
          }
        >
          {icon}
        </div>
      ) : null}
      {text}
    </button>
  );
};

export default Button;

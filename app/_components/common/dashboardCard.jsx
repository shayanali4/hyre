const DashboardCard = ({
  title,
  subtitle,
  children,
  action,
  footer,
  cardheading,
  headtitle,
  headsubtitle,
  middlecontent,
  bgColor,
  text,
}) => {
  return (
    <div
      className={`border-[1px] border-lightWhite ${bgColor} ${text}  rounded-md shadow-sm  relative h-full`}
    >
      {cardheading ? (
        <div className="px-8 py-8">
          <h5 className="text-1.1 font-semibold leading-[25px]">{headtitle}</h5>
          <p className="text-0.8 font-normal leading-[25px]">{headsubtitle}</p>
        </div>
      ) : (
        <div className="px-8 py-10">
          {title ? (
            <div className="flex justify-between items-center mb-3">
              <div>
                {title && <h5 className="text-xl">{title}</h5>}

                {subtitle && (
                  <p className="text-sm text-gray-500">{subtitle}</p>
                )}
              </div>
              {action}
            </div>
          ) : null}

          {children}
        </div>
      )}

      {middlecontent}
      {footer}
    </div>
  );
};

export default DashboardCard;

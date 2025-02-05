import React, { forwardRef } from "react";

// Utility function to merge classnames
const cn = (...classes) => {
  return classes.filter(Boolean).join(" ");
};

const BASE_LINK_CLASSES =
  "link--navigation c-content-interactive-secondary t-interactive";

const LinkNavigation = forwardRef(({ text, className, ...props }, ref) => {
  const linkClasses = cn(BASE_LINK_CLASSES, className);

  return (
    <a ref={ref} className={linkClasses} {...props}>
      {text}
    </a>
  );
});

LinkNavigation.displayName = "Link - Navigation";

export default LinkNavigation;

import Link from "next/link";
import React from "react";
import clsx from "clsx";

const StyledButton = ({
  route,
  type,
  children,
}: {
  route: string;
  type: "primary" | "secondary";
  children: React.ReactNode;
}) => {
  const isPrimary = type === "primary";

  return (
    <Link
      href={route}
      className={clsx(
        "inline-block px-5 py-3 max-w-fit text-sm font-semibold relative border border-solid after:absolute after:w-[105%] after:h-0.5 after:left-2 after:-bottom-1.5 before:absolute before:w-0.5 before:h-[115%] before:top-2 before:-right-1.5 transform hover:scale-105 transition duration-300",
        {
          "bg-very-dark-blue border-white after:bg-white before:bg-white":
            isPrimary,
          "bg-mustard-yellow border-mustard-yellow after:bg-mustard-yellow before:bg-mustard-yellow":
            !isPrimary,
        }
      )}
    >
      {children}
    </Link>
  );
};

export default StyledButton;

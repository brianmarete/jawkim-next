import Image from "next/image";

const Logo = () => {
  return (
    <div className="flex items-center">
      <Image
        src="https://pub-94dc47df391c4556bac5370df0514d7d.r2.dev/jawkim-logo.png"
        alt="JAWKIM ARCHITECTS"
        width={200}
        height={100}
      />
    </div>
  );
};

export default Logo;

import Image from "next/image";

const Logo = () => {
  return (
    <div className="flex items-center">
      <Image
        src="/images/logo.png"
        alt="JAWKIM ARCHITECTS"
        width={200}
        height={100}
      />
    </div>
  );
};

export default Logo;

import Image from "next/image";
import Link from "next/link";

const HeaderLogo: React.FC = () => {
  return (
    <div className="relative flex flex-grow basis-0 items-center">
      <Link
        aria-label="Home page"
        href="/"
        onClick={() => {
          window.location.href = "/";
        }}
      >
        <Image
          src={"/images/bg.png"}
          alt="logo"
          height={20}
          width={200}
          className="max-h-16 h-auto w-auto"
        />
      </Link>
    </div>
  );
};

export default HeaderLogo;

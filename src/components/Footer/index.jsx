import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-[#3d3990]">
      <div className="container grid md:grid-cols-3 grid-cols-1  py-10">
        <div>
          <a className=" text-white text-2xl font-bold">BELLETTO-TRAVEL</a>
        </div>
        <div className="flex flex-col">
          <Link href={"/"} className="footer-text">
            Bosh sahifa
          </Link>
          <Link href={"/destinations"} className="footer-text">
            Sayohatlar
          </Link>
          <Link href={"/contact"} className="footer-text">
            Bog'lanish
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;

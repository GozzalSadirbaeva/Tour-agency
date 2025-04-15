import { useEffect, useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { useRouter } from "next/navigation";

const BookNowButton = () => {
  const t = useTranslations();
  const lang = useLocale();
  const router = useRouter();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const userAgent = navigator.userAgent || navigator.vendor || window.opera;
      const mobileRegex = /android|iphone|ipad|ipod|windows phone/i;
      setIsMobile(mobileRegex.test(userAgent));
    }
  }, []);

  const handleClick = () => {
    if (isMobile) {
      window.location.href = "tel:+998950407447";
    } else {
        router.push(`/${lang}/contact`);
    }
  };

  return (
    <button
      onClick={handleClick}
      className="bg-[#3d3990] text-white px-6 py-3 text-lg font-semibold rounded-lg shadow-lg hover:bg-[#343082]"
    >
      {t("BookNow")}
    </button>
  );
};

export default BookNowButton;

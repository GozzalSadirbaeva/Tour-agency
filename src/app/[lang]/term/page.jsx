import { useTranslations } from "next-intl";

export default function TermsAndConditions() {
  const t = useTranslations();
  return (
    <div className="max-w-4xl mx-auto py-10 px-6 sm:px-4 md:px-6">
      <h1 className="text-4xl font-bold text-center text-[#3d3990] mb-6 text-wrap">
       {t('termtitle')}
      </h1>
      <p className="text-gray-600 mb-4 text-xl sm:text-lg md:text-left text-center">
       {t('welcome')}
      </p>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 sm:text-xl">
          {t('booking_title')}
        </h2>
        <p className="text-gray-600 mt-2 text-xl sm:text-lg">
          {t('booking_text')}
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 sm:text-xl">
         {t('cancellation_title')}
        </h2>
        <p className="text-gray-600 mt-2 text-xl sm:text-lg">
          {t('cancellation_text')}
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 sm:text-xl">
          {t('liability_title')}
        </h2>
        <p className="text-gray-600 mt-2 text-xl sm:text-lg">
          {t('liability_text')}
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 sm:text-xl">
         {t('privacy_title')}
        </h2>
        <p className="text-gray-600 mt-2 text-xl sm:text-lg">
          {t('privacy_text')}
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 sm:text-xl">
         {t('modification_title')}
        </h2>
        <p className="text-gray-600 mt-2 text-xl sm:text-lg">
         {t('modification_text')}
        </p>
      </section>

      <p className="text-gray-600 text-base mt-6 text-center sm:text-sm">
        {t('contact')}
      </p>
    </div>
  );
}

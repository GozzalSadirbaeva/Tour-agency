import { useTranslations } from "next-intl";
import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const Faq = () => {
  const t = useTranslations();
  const [openIndex, setOpenIndex] = useState(null);

  const faqItems = [
    { questionKey: "faq_question_1", answerKey: "faq_answer_1" },
    { questionKey: "faq_question_2", answerKey: "faq_answer_2" },
    { questionKey: "faq_question_3", answerKey: "faq_answer_3" },
  ];

  const toggleQuestion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h2 className="text-3xl font-bold text-center mb-8 text-[#3d3990]">{t("faq_title")}</h2>
      <div className="space-y-4">
        {faqItems.map((item, index) => (
          <div key={index} className="border-b pb-4">
            <button
              onClick={() => toggleQuestion(index)}
              className="flex justify-between items-center w-full text-left font-medium text-lg"
            >
              {t(item.questionKey)}
              <FaChevronDown
                className={`transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""}`}
              />
            </button>
            {openIndex === index && (
              <p className="mt-3 text-gray-600">{t(item.answerKey)}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;

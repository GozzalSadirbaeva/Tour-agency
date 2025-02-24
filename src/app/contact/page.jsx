const Contact = () => {
  return <div className="container grid md:grid-cols-2 grid-cols-1 mt-10">
    <div>
        <img src="/jpg22.jpg" alt="" className="rounded-lg" />
    </div>
    <div>
        <h2 className="font-bold text-[38px] leading-[30px] text-color-second text-center">
          Bog‘lanish
        </h2>
          <div className="pt-10 px-10 pb-12 bg-white">
            <h2 className="font-semibold text-[26px] leading-8 pb-6">
              Ma’lumot qoldiring
            </h2>
            <h3 className="inter text-[20px] leading-[34px] font-light pb-5">
              Ma’lumotlaringizni qoldiring va operatorimiz sizga darhol aloqaga
              chiqadi.
            </h3>
            <form action="" className="flex flex-col">
              <input
                type="text"
                placeholder="Ismingiz"
                className="inter text-xl leading-7 py-[10px] px-4 border-[1px] border-[#54576366] rounded-2xl mb-[20px]"
              />
              <input
                type="text"
                placeholder="+998 Telefon raqamingiz"
                className="inter text-xl leading-7 py-[10px] px-4 border-[1px] border-[#54576366] rounded-2xl mb-[20px]"
              />
              <button className="py-3 bg-[#DDAE57] text-white inter text-xl leading-7 rounded-2xl">
                Jo‘natish
              </button>
            </form>
          </div>
    </div>
  </div>;
};

export default Contact;

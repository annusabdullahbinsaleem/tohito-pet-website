import catDogIllustration from "../assets/cat-dog-illustration.png";

export default function Newsletter() {
  return (
    <section className="px-6 pb-20">
      <div className="max-w-5xl mx-auto bg-white shadow-md rounded-xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <h3 className="text-xl md:text-2xl font-bold text-brand-dark text-center md:text-left">
          Get Cute Puppies <br /> in Your Inbox
        </h3>

        <form className="flex w-full md:w-auto flex-1 max-w-md gap-3">
          <input
            type="email"
            placeholder="enter your email here"
            className="flex-1 border border-gray-300 rounded-md px-4 py-2.5 text-sm outline-none focus:border-brand-red"
          />
          <button
            type="submit"
            className="bg-brand-red text-white px-6 py-2.5 rounded-md font-semibold text-sm shadow-sm shrink-0"
          >
            Subscribe
          </button>
        </form>

        <img
          src={catDogIllustration}
          alt=""
          aria-hidden="true"
          className="w-20 h-auto hidden lg:block"
        />
      </div>
    </section>
  );
}
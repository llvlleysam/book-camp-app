export default function AboutUsPage() {
  return (
    <div className="w-full h-screen flex flex-col gap-8 p-8 mt-20 ">
      <div className="flex flex-col items-center gap-4">
        <p className="text-4xl font-bold">About Us</p>
        <h1 className="text-2xl font-bold">
          Programming: One of the Most Lucrative Professions in the World
        </h1>
        <p>
          According to the latest statistics from domestic and international job
          platforms, software developers are consistently ranked among the top
          professions due to their attractive salaries and growth opportunities.
          Programming is one of the most rewarding and sought-after careers
          globally, and with the right skills, there are abundant job prospects
          and high incomes to be achieved.
        </p>
      </div>
      <div className="flex flex-col items-center gap-4">
        <span className="text-xl font-bold">Which boot camp is right for me?</span>
        <p>
          With several boot camps to choose from, determining which one aligns
          with your interests and needs can be challenging. For further
          guidance, you can book an online consultation with an expert.
        </p>
        <button className="py-2 px-4 bg-orange-500 text-white font-bold rounded-lg drop-shadow-xl">Contact number reservation</button>
        <img src="./web-developer.jpg" alt="" />
      </div>
    </div>
  );
}

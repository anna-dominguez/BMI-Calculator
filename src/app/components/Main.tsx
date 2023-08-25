import Image from "next/image"

import ImageManEating from "../../../public/images/image-man-eating.webp"
import IconEating from "../../../public/images/icon-eating.svg"
import IconExercice from "../../../public/images/icon-exercise.svg"
import IconSleep from "../../../public/images/icon-sleep.svg"
import IconGender from "../../../public/images/icon-gender.svg"
import IconAge from "../../../public/images/icon-age.svg"
import IconMuscle from "../../../public/images/icon-muscle.svg"
import IconPregnancy from "../../../public/images/icon-pregnancy.svg"
import IconRace from "../../../public/images/icon-race.svg"

const Main = () => {
  return (
    <main className="mt-[150%] grid gap-[72px] md:mt-[60%] lg:mt-[5%] ">
      <section className="grid gap-12 md:grid-flow-col lg:grid-cols-2 lg:items-end lg:mx-[140px]">
        <Image src={ImageManEating} alt="A man eating" />
        <div className="grid gap-8 mx-6 mb-6">
          <h2>What your BMI result means</h2>
          <p className="text-darkElectricBlue">
            A BMI range of 18.5 to 24.9 is considered a {"'"}healthy weight.
            {"'"} Maintaining a healthy weight may lower your chances of
            experiencing health issues later on, such as obesity and type 2
            diabetes. Aim for a nutritious diet with reduced fat and sugar
            content, incorporating ample fruits and vegetables. Additionally,
            strive for regular physical activity, ideally about 30 minutes daily
            for five days a week.
          </p>
        </div>
      </section>
      <section className="bg-gradient-to-l from-[#D6E6FE50] to-transparent p-6 grid lg:grid-cols-3 gap-10 lg:px-[140px]">
        <div className="grid md:grid-flow-col lg:grid-flow-row items-center gap-8">
          <Image src={IconEating} alt="Icon eating" />
          <div className="grid gap-6">
            <h3>Healthy eating</h3>
            <p className="text-darkElectricBlue">
              Healthy eating promotes weight control, disease prevention, better
              digestion, immunity, mental clarity, and mood.
            </p>
          </div>
        </div>
        <div className="grid md:grid-flow-col lg:grid-flow-row items-center gap-8">
          <Image src={IconExercice} alt="Icon eating" />
          <div className="grid gap-6">
            <h3>Regular exercice</h3>
            <p className="text-darkElectricBlue">
              Exercise improves fitness, aids weight control, elevates mood, and
              reduces disease risk, fostering wellness and longevity.
            </p>
          </div>
        </div>
        <div className="grid md:grid-flow-col lg:grid-flow-row items-center gap-8">
          <Image src={IconSleep} alt="Icon eating" />
          <div className="grid gap-6">
            <h3>Adequate sleep</h3>
            <p className="text-darkElectricBlue">
              Sleep enhances mental clarity, emotional stability, and physical
              wellness, promoting overall restoration and rejuvenation.
            </p>
          </div>
        </div>
      </section>
      <section className="px-6 lg:px-0 pb-[100px] lg:mx-[140px] grid gap-4 md:grid-cols-4 lg:grid-cols-7 md:gap-6 text-center justify-items-center lg:text-start">
        <div className="md:col-span-4 lg:col-span-3">
          <h2>Limitation of BMI</h2>
          <p className="text-darkElectricBlue mt-8 mb-14">
            Although BMI is often a practical indicator of healthy weight, it is
            not suited for every person. Specific groups should carefully
            consider their BMI outcomes, and in certain cases, the measurement
            may not be beneficial to use.
          </p>
        </div>
        <div className="md:col-span-2 lg:col-start-5 card">
          <div className="flex gap-4 items-center">
            <Image src={IconGender} alt="Icon gender" />
            <h3>Gender</h3>
          </div>
          <p className="text-gunmetal">
            The development and body fat composition of girls and boys vary with
            age. Consequently, a child{"'"}s age and gender are considered when
            evaluating their BMI.
          </p>
        </div>
        <div className="card md:col-span-2 lg:col-start-4">
          <div className="flex gap-4 items-center">
            <Image src={IconAge} alt="Icon age" />
            <h3>Age</h3>
          </div>
          <p className="text-gunmetal">
            In aging individuals, increased body fat and muscle loss may cause
            BMI to underestimate body fat content.
          </p>
        </div>
        <div className="card md:col-span-2 lg:col-start-6">
          <div className="flex gap-4 items-center">
            <Image src={IconMuscle} alt="Icon muscle" />
            <h3>Muscle</h3>
          </div>
          <p className="text-gunmetal">
            BMI may misclassify muscular individuals as overweight or obese, as
            it doesn{"'"}t differentiate muscle from fat.
          </p>
        </div>
        <div className="card md:col-span-2 lg:col-start-3">
          <div className="flex gap-4 items-center">
            <Image src={IconPregnancy} alt="Icon Pregnancy" />
            <h3>Pregnancy</h3>
          </div>
          <p className="text-gunmetal">
            Expectant mothers experience weight gain due to their growing baby.
            Maintaining a healthy pre-pregnancy BMI is advisable to minimise
            health risks for both mother and child.
          </p>
        </div>
        <div className="card md:col-start-2 md:col-end-4 lg:col-start-5 lg:col-end-7">
          <div className="flex gap-4 items-center">
            <Image src={IconRace} alt="Icon race" />
            <h3>Race</h3>
          </div>
          <p className="text-gunmetal">
            Certain health concerns may affect individuals of some Black and
            Asian origins at lower BMIs than others. To learn more, it is
            advised to discuss this with your GP or practice nurse.
          </p>
        </div>
      </section>
    </main>
  )
}

export default Main

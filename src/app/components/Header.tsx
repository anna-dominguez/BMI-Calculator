import { useState } from "react"
import Image from "next/image"

import Logo from "../../../public/images/logo.svg"
import RadioChecked from "@/svg/RadioChecked"

const Header = () => {
  const [isMetric, setIsMetric] = useState(true)
  const [weight, setWeight] = useState("")
  const [height, setHeight] = useState("")
  const [inch, setInch] = useState("")
  const [ft, setFt] = useState("")
  const [st, setSt] = useState("")
  const [lbs, setLbs] = useState("")

  const calculateBMI = () => {
    if (isMetric) {
      const meters = Number(height) / 100
      return Math.round((Number(weight) / (meters * meters)) * 10) / 10
    } else {
      if (!lbs || !st) return
      const heightImperial = Number(ft) * 30.48 + Number(inch) * 2.54
      const weightImperial = Number(st) * 6.35029 + Number(lbs) * 0.453592

      return (weightImperial / Math.pow(heightImperial / 100, 2)).toFixed(2)
    }
  }

  const BMI = Number(calculateBMI())

  const isHealthy = () => {
    if (BMI < 18.5) return "underweight"
    if (BMI <= 24.9) return "a healthy weight"
    if (BMI <= 29.9) return "overweight"
    if (BMI > 30) return "obese"
  }

  return (
    <header className="lg:ml-6 flex bg-gradient-to-l from-[#D6E6FE] to-transparent pt-6 lg:pt-[75px] px-6 lg:pl-[116px] rounded-b-[35px] lg:w-[70%]">
      <div className="flex flex-col gap-6 lg:gap-[127px] items-center lg:items-start ">
        <Image src={Logo} alt="Logo" />
        <div className="flex flex-col gap-6 lg:gap-9 lg:w-[52%]">
          <h1>Body Mass Index Calculator</h1>
          <p className="text-center lg:text-start text-bodyM font-normal pb-[200px]">
            Better understand your weight in relation to your height using our
            body mass index (BM) calculator. While BMI is not the sole
            determinant of a healthy weight, it offers a valuable starting point
            to evaluate your overall health and well-being.
          </p>
        </div>
      </div>
      <div className="absolute mr-6 md:ml-6 flex rounded-2xl shadow-[16px_32px_56px_0_rgba(143,174,207,0.25)] flex-col top-[70%] md:top-[25%] lg:top-[10%] lg:left-[55%] md:w-[90%] lg:max-w-[500px] p-6 gap-6 bg-white">
        <h3>Enter your details below</h3>
        <div className="grid grid-flow-col justify-between md:justify-normal font-medium text-bodyM">
          <div
            onClick={() => setIsMetric(true)}
            className="inline-flex items-center gap-[18px]"
          >
            <label
              className="relative flex cursor-pointer items-center rounded-full "
              htmlFor="metric"
              data-ripple-dark="true"
            >
              <input
                id="metric"
                name="type"
                type="radio"
                checked={isMetric}
                onChange={() => setIsMetric(true)}
                className="before:content[''] peer peer-checked:border-none radio-button"
              />
              <div className="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-gunmetal opacity-0 transition-opacity peer-checked:opacity-100">
                <RadioChecked />
              </div>
            </label>
            <label
              className="mt-px cursor-pointer select-none font-medium"
              htmlFor="metric"
            >
              Metric
            </label>
          </div>
          <div
            onClick={() => setIsMetric(false)}
            className="inline-flex items-center gap-[18px]"
          >
            <label
              className="relative flex cursor-pointer items-center rounded-full "
              htmlFor="imperial"
              data-ripple-dark="true"
            >
              <input
                id="imperial"
                name="type"
                type="radio"
                checked={!isMetric}
                onChange={() => setIsMetric(false)}
                className="before:content[''] peer peer-checked:border-none radio-button"
              />
              <div className="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-gunmetal opacity-0 transition-opacity peer-checked:opacity-100">
                <RadioChecked />
              </div>
            </label>
            <label
              className="mt-px cursor-pointer select-none font-medium"
              htmlFor="imperial"
            >
              Imperial
            </label>
          </div>
        </div>
        {isMetric ? (
          <div className="grid grid-flow-row md:grid-flow-col md:grid-cols-2 gap-4 md:gap-6">
            <div className="flex flex-col gap-2">
              <label className="text-darkElectricBlue text-bodyS" id="height">
                Height
              </label>
              <div className="relative">
                <input
                  className="px-6 py-5 rounded-xl font-medium text-headingM border border-borders w-full"
                  type="text"
                  value={height}
                  onChange={(e) => setHeight(e.target.value)}
                  id="height"
                  placeholder="0"
                />
                <p className="absolute font-medium text-headingM text-blue right-6 top-[30%]">
                  cm
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-darkElectricBlue text-bodyS" id="weight">
                Weight
              </label>
              <div className="relative">
                <input
                  className="px-6 py-5 rounded-xl font-medium text-headingM border border-borders w-full"
                  type="text"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                  id="weight"
                  placeholder="0"
                />
                <p className="absolute font-medium text-headingM text-blue right-6 top-[30%]">
                  kg
                </p>
              </div>
            </div>
          </div>
        ) : (
          <div className="grid gap-4 lg:gap-6">
            <div className="grid grid-flow-col gap-4 lg:gap-6 items-end">
              <div className="flex flex-col gap-2">
                <label className="text-darkElectricBlue  text-bodyS" id="ft">
                  Height
                </label>
                <div className="relative">
                  <input
                    className="px-6 py-5 rounded-xl font-medium text-headingM border border-borders w-full"
                    type="text"
                    value={ft}
                    onChange={(e) => setFt(e.target.value)}
                    id="ft"
                    placeholder="0"
                  />
                  <p className="absolute font-medium text-headingM text-blue right-6 top-[30%]">
                    ft
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <div className="relative">
                  <input
                    className="px-6 py-5 rounded-xl font-medium text-headingM border border-borders w-full"
                    type="text"
                    value={inch}
                    onChange={(e) => setInch(e.target.value)}
                    id="inch"
                    placeholder="0"
                  />
                  <p className="absolute font-medium text-headingM text-blue right-6 top-[30%]">
                    in
                  </p>
                </div>
              </div>
            </div>
            <div className="grid grid-flow-col gap-4 lg:gap-6 items-end">
              <div className="flex flex-col gap-2">
                <label className="text-darkElectricBlue text-bodyS" id="st">
                  Weight
                </label>
                <div className="relative">
                  <input
                    className="px-6 py-5 rounded-xl font-medium text-headingM border border-borders w-full"
                    type="text"
                    value={st}
                    onChange={(e) => setSt(e.target.value)}
                    id="st"
                    placeholder="0"
                  />
                  <p className="absolute font-medium text-headingM text-blue right-6 top-[30%]">
                    st
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <div className="relative">
                  <input
                    className="px-6 py-5 rounded-xl font-medium text-headingM border border-borders w-full"
                    type="text"
                    value={lbs}
                    onChange={(e) => setLbs(e.target.value)}
                    id="lbs"
                    placeholder="0"
                  />
                  <p className="absolute font-medium text-headingM text-blue right-6 top-[30%]">
                    lbs
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
        <div className="bg-gradient-to-r rounded-2xl md:rounded-r-full from-blue to-[#587DFF] text-white p-8">
          {BMI > 0 ? (
            <>
              <p className="text-bodyM font-medium">Your BMI is...</p>
              <p className="text-headingL font-medium mt-2 mb-6">{BMI}</p>
              <p>
                Your BMI suggests you’re {isHealthy()}. Your ideal weight is
                between <span className="font-bold">63.3kgs - 85.2kgs</span>.
              </p>
            </>
          ) : (
            <>
              <p className="text-headingM font-semibold tracking-[-1.2px] mb-4">
                Welcome!
              </p>
              <p>
                Enter your height and weight and you’ll see your BMI result here
              </p>
            </>
          )}
        </div>
      </div>
    </header>
  )
}

export default Header

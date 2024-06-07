"use client";
import image from 'next/image'
import CustomButton from './CustomButton'

const Hero = () => {
        const handleScroll =() => {

        }
  return (
    
       <div className="hero">
        <div className= "flex- pt-36 padding-x">
        <h1 className = "hero__title">
        Build AI Calling Agent that can do
        <span className="text-black"> Sales Call </span>
        </h1>

        <CustomButton
            title="Build your own voice agent"
            containerStyle = "bg-blue-500 text-white py-2 px-4 rounded"
            handleClick={handleScroll}
        />
    </div>
    </div>
  )
}

export default Hero
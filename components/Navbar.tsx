"use client";
import Link from 'next/link';
import Image from 'next/image';
import CustomButton from './CustomButton';

const Navbar = () => {
  const handleClick = () => {
    alert('Button clicked!');
  };
  return (
    <header className='w-full  absolute z-10'>
    <nav className='max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4 bg-transparent'>
      <Link href='/' className='flex justify-center items-center'>
        <Image
          src='/logo.svg'
          alt='logo'
          width={118}
          height={18}
          className='object-contain'
        />
      </Link>

      <CustomButton
      title="Sign in"
      containerStyle="custom-container"
      handleClick={handleClick}
      btnType="button"
      textStyles="text-blue-500"
      rightIcon="/logo.svg"
    />
    </nav>
  </header>
  )
}

export default Navbar
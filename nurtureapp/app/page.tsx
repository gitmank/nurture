import Header from '@/components/Header'
import Image from 'next/image'
import sparkles from '@/public/vectors/sparkles.svg'
import whirlpool from '@/public/vectors/whirlpool.svg'
import featureOneImage from '@/public/images/feature-one-image.png'
import featureTwoImage from '@/public/images/feature-two-image.png'

import { Orelega_One } from 'next/font/google'
import { signIn } from 'next-auth/react'
import SignInButton from '@/components/SignInButton'

const orelegaOne = Orelega_One({ subsets: ['latin'], weight: '400' })

export default function Home() {
  return (
    <main className="flex h-max w-screen flex-col items-center justify-between bg-black text-white">
      <Header />
      <section className="flex flex-col items-center justify-center w-screen h-[500px] md:h-[600px] lg:h-[600px] xl:h-[700px] bg-white text-primary-default">
        <section className='flex flex-col h-[80%] w-[90%] lg:w-[80%] p-10 items-center justify-around border-primary-default border-4 bg-secondary-default'>
          <h1 className={`${orelegaOne.className} text-6xl md:text-8xl font-bold`}>Nurture</h1>
          <h1 className={`text-lg md:text-xl lg:text-2xl font-bold text-center`}>enabling schools to focus on student mental health 💙</h1>
          <SignInButton text="Start your Journey!" />
          <Image src={sparkles} alt="sparkles" className="absolute top-[500px] right-[80%]" />
          <Image src={whirlpool} alt="whirlpool" className="absolute w-16 h-16 fill-white top-[150px] right-3/4" />
          <Image src={sparkles} alt="sparkles" className='absolute w-16 h-16 top-[25%] right-8 lg:right-[200px]' />
        </section>
      </section>
      <section className='flex flex-row h-max w-screen flex-wrap justify-around items-start gap-20 bg-black text-secondary-default p-10 py-24'>
        <section className='flex flex-col items-start justify-start gap-10 w-[400px] h-max'>
          <Image src={featureOneImage} alt="child taking mood assessment" className='' />
          <div className='flex flex-col gap-5'>
            <h1 className='text-2xl font-bold'>Gentle Assessment 🌱</h1>
            <p className='text-lg text-left'>We use a simple and child-friendly assessment that can be taken in just 30 seconds. Additional questions are asked based on the responses.</p>
          </div>
        </section>
        <section className='flex flex-col items-start justify-start gap-10 w-[400px] h-max'>
          <Image src={featureTwoImage} alt="child taking mood assessment" className='' />
          <div className='flex flex-col gap-5'>
            <h1 className='text-2xl font-bold'>School Integration ✨</h1>
            <p className='text-lg text-left'>Currently, schools don't know how their students are doing emotionally. We collect this data and generate a student well-being report for them.</p>
          </div>
        </section>
      </section>
      <section className='flex bg-[url("../public/images/nightsky.png")] bg-cover text-white text-lg flex-col min-h-[95vh] h-max w-screen flex-wrap justify-start items-start gap-14 bg-black p-8 py-24 md:p-24'>
        <div className='flex flex-col gap-10'>
          <h1 className='text-4xl font-bold text-secondary-default'>Why choose Nurture?</h1>
          <div className='flex flex-col gap-5'>
            <p className='bg-secondary-default text-black p-2 px-3 rounded-lg'>🍀&nbsp;&nbsp;Develop emotional resilience and self-awareness in students at an early age.</p>
            <p className='bg-secondary-default text-black p-2 px-3 rounded-lg'>🏅&nbsp;&nbsp;Show parents how safe and happy the environment at your school is.</p>
          </div>
        </div>
        <div className='flex flex-col gap-10'>
          <h1 className='text-4xl font-bold text-secondary-default'>Can I try Nurture?</h1>
          <div className='flex flex-col gap-5'>
            <p className='bg-secondary-default text-black p-2 px-3 rounded-lg'>⏳&nbsp;&nbsp;Nurture is currently in prototype stage</p>
            <p className='bg-secondary-default text-black p-2 px-3 rounded-lg'>🤞&nbsp;&nbsp;You can email us for a demo account</p>
          </div>
        </div>
        <div className='flex flex-col gap-10'>
          <h1 className='text-4xl font-bold text-secondary-default'>About Us</h1>
          <div className='flex flex-col gap-5'>
            <p className='bg-secondary-default text-black p-2 px-3 rounded-lg'>🇮🇳&nbsp;&nbsp;We're a team participating in the Smart India Hackathon 2023 edition</p>
            <p className='bg-secondary-default text-black p-2 px-3 rounded-lg'>📫&nbsp;&nbsp;You can reach us at <a className='text-blue-600' href='mailto:nominal.grabs0r@icloud.com'>nominal.grabs0r@icloud.com</a></p>
          </div>
        </div>
      </section>
      <section className='flex bg-[url("../public/images/stripofdrawings.png")] bg-center bg-contain w-screen h-32 md:h-48 bg-no-repeat'>
      </section>
    </main>
  )
}

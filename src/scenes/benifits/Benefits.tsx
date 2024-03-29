import { HomeModernIcon, 
  UserGroupIcon, 
  AcademicCapIcon } from '@heroicons/react/24/solid'
import {SectionImages,BenefitType, SelectedPage } from '@/shared/types'
import { motion } from 'framer-motion'
import HText from '@/shared/HText'
import Benefit from './Benefit'
import ActionButton from '@/shared/ActionButton'
// import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic.png"

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
}

function Benefits({setSelectedPage}: Props) {

 const benefits: Array<BenefitType> = [
  {
    icon: <HomeModernIcon className="h-6 w-6" />,
    title: "State of the Art Facilities",
    description:
      "Neque adipiscing amet amet enim. Feugiat dolor enim fermentum in a in lectus pellentesque. Ullamcorper et.",
  },
  {
    icon: <UserGroupIcon className="h-6 w-6" />,
    title: "100's of Diverse Classes",
    description:
      "Eu ipsum id egestas risus tempus enim semper felis quis. Nec consectetur ac venenatis facilisi est. Eget ac turpis id.",
  },
  {
    icon: <AcademicCapIcon className="h-6 w-6" />,
    title: "Expert and Pro Trainers",
    description:
      "Fusce vestibulum aliquam ut cras. Nisl lectus egestas sapien nisl. Lacus at mi sit pellentesque. Congue parturient.",
  },
];

const Container = {
  hidden:{},
  visble:{
    transition: { staggerChilderen : 0.2}
  }
}

  return (
   <section id='benifits' className='mx-auto min-h-full w-5/6 py-20'>
    <motion.div
      onViewportEnter={() => setSelectedPage(SelectedPage.Benifits)}
    >
      {/* Header */}
      <motion.div 
       initial="hidden"
                whileInView="visible"
                viewport={{once:true, amount: 0.5}}
                transition={{duration: 0.5}}
                variants={{
                    hidden: {opacity: 0, x:-50},
                    visible: {opacity: 1, x:0 }
                }}
      className='md:my-5 md:w-3/5'>
       <HText>MORE THAN JUST A GYM.</HText>
       <p className='my-5 text-sm'>
        We provide world class fitness equipment, trainers and classes to
        get you to your ultimate fitness goals with ease. We provide true
        care into each and every member.
        </p>
      </motion.div>

      {/* Benefits */}
      <motion.div className='mt-5 md:flex items-center justify-between gap-8'
      initial="hidden"
      whileInView="visible"
      viewport={{once:true, amount: 0.5}}
      variants={Container}
      >
        {benefits.map((benefit: BenefitType) => (
            <Benefit 
            key={benefit.title}
            icon={benefit.icon}
            title={benefit.title}
            description={benefit.description}
            setSelectedPage={setSelectedPage}
            />
          ))}
      </motion.div>

      {/* Graphics and Description */}
      <div className='mt-16 items-center justify-between gap-20 md:mt-28 md:flex'>
        {/* Graphic */}
        <img className='mx-auto ' src={SectionImages.BenefitsPageGraphic} alt="benefits-page-graphic" />
        {/* Descriptin */}
        <div>
          {/* Title */}
          <div className='relative '>
            <div className='before:absolute before:-top-20 before:-left-20 before:z-[1] before:content-abstractwaves'>
              <motion.div
               initial="hidden"
                whileInView="visible"
                viewport={{once:true, amount: 0.5}}
                transition={{duration: 0.5}}
                variants={{
                    hidden: {opacity: 0, x:-50},
                    visible: {opacity: 1, x:0 }
                }}
                >
                <HText>MILLIONS OF HAPPY MEMEBERS GETTING{" "}
                <span className='text-primary-500'>FIT</span>
                </HText>
              </motion.div>
            </div>
          </div>

          {/* Description */}
          <motion.div
           initial="hidden"
                whileInView="visible"
                viewport={{once:true, amount: 0.5}}
                transition={{duration: 0.5}}
                variants={{
                    hidden: {opacity: 0, x:-50},
                    visible: {opacity: 1, x:0 }
                }}>
            <p className="my-5">
                Nascetur aenean massa auctor tincidunt. Iaculis potenti amet
                egestas ultrices consectetur adipiscing ultricies enim. Pulvinar
                fames vitae vitae quis. Quis amet vulputate tincidunt at in
                nulla nec. Consequat sed facilisis dui sit egestas ultrices
                tellus. Ullamcorper arcu id pretium sapien proin integer nisl.
                Felis orci diam odio.
              </p>
              <p className="mb-5">
                Fringilla a sed at suspendisse ut enim volutpat. Rhoncus vel est
                tellus quam porttitor. Mauris velit euismod elementum arcu neque
                facilisi. Amet semper tortor facilisis metus nibh. Rhoncus sit
                enim mattis odio in risus nunc.
              </p>
          </motion.div>

          {/* Buttons */}
          <div 
          //  initial="hidden"
          //       whileInView="visible"
          //       viewport={{once:true, amount: 0.5}}
          //       transition={{duration: 0.5}}
          //       variants={{
          //           hidden: {opacity: 0, x:-50},
          //           visible: {opacity: 1, x:0 }
          //       }}
          className='relative mt-16'>
            <div className='before:absolute before:-bottom-20 before:right-60 before:z-[-1] before:content-sparkles'>
              <ActionButton setSelectedPage={setSelectedPage}>
                  Join Now
                </ActionButton>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
   </section>
  )
}

export default Benefits
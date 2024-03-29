// import Logo from "@/assets/Logo.png"

import { SectionImages } from "@/shared/types"

type Props = {}

const Footer = (props: Props) => {
  return (
    <footer className="bg-primary-100 py-16">
        <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
            <div className="mt-16 basis-1/2 md:mt-0">
                <img src={SectionImages.logo} alt="logo" />
                <p className="my-5">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio eum architecto sequi in, doloremque 
                    quisquam adipisci distinctio id, laborum, hic ut. Deserunt, nulla rerum officiis exercitationem 
                    aliquam labore porro alias eaque! Ipsa eos eveniet odit temporibus doloremque quam facere corporis.
                </p>
                <p>©Zohaib All Rights Reserved</p>
            </div>

            <div className="mt-16 basis-1/4 md:mt-0">
                <h4 className="font-bold">Links</h4>
                <p className="my-5">This is the Link 1</p>
                <p className="my-5">Lorem ipsum dolor sit amet.</p>
                <p>Lorem, ipsum.</p>
            </div>

            
           <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Contact Us</h4>
          <p className="my-5">Layyah Punjab Pakistan</p>
          <p>(+92)304-4436138</p>
        </div>
        </div>
    </footer>
    )
}

export default Footer
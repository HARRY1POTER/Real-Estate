import { CheckCircle2 } from "lucide-react";
import codeImg from '../assets/code.jpg'
import { checklistItems } from "../constants";

const Workflow = () => {
  return (
    <div className="mt-20" id="workflow">
        <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center mt-6 tracking-wide mb-6">
            Accelerate your <span className="bg-gradient-to-r from-blue-500 to-blue-800 text-transparent bg-clip-text">business workflow.</span>
        </h2>
        <div className="flex flex-wrap justify-center">
            <div className="p-2 w-1/2 lg:w-1/2">
                <img src={codeImg} alt="image" />
            </div>
            <div className="pt-12 mb-10 w-full lg:w-1/2">
                {checklistItems.map((item, index) => (
                    <div key={index} className="flex mb-12">
                        <div className="text-green-400 bg-neutral-900 h-10 w-10 p-2 justify-center items-center rounded-full">
                            <CheckCircle2 />
                        </div>
                        <div>
                            <h5 className="mt-1 mb-2 text-xl">{item.title}</h5>
                            <p className="text-md text-neutral-500">{item.description}</p>
                        </div>
                    </div>    
                ))}
            </div>
        </div>
    </div>
  )
}

export default Workflow
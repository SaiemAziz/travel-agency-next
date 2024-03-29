
import { FiSmile } from "react-icons/fi";
import { BiBus,  } from "react-icons/bi";
import {  MdBusinessCenter } from "react-icons/md";
import { AiFillWechat } from "react-icons/ai";
const Stars = () => {
    return (
      <div className="bg-[url(https://images.unsplash.com/photo-1471922694854-ff1b63b20054?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80)] bg-cover bg-center py-5 bg-opacity-20">
        <div className="px-4 py-14 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 ">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="text-center">
              <div className="flex items-center justify-center w-10 h-10 mx-auto mb-3 rounded-full  sm:w-12 sm:h-12">
                <FiSmile className="text-5xl text-primary" />
              </div>
              <h6 className="text-4xl font-bold text-primary">70,101</h6>
              <p className="mb-2 font-bold text-md text-secondary">
                Happy Coustomer
              </p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-10 h-10 mx-auto mb-3 rounded-full  sm:w-12 sm:h-12">
                <BiBus className="text-5xl text-primary" />
              </div>
              <h6 className="text-4xl font-bold text-primary">109</h6>
              <p className="mb-2 font-bold text-md text-secondary">
                Amazing Tours
              </p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-10 h-10 mx-auto mb-3 rounded-full  sm:w-12 sm:h-12">
                <MdBusinessCenter className="text-5xl text-primary" />
              </div>
              <h6 className="text-4xl font-bold text-primary">6,409</h6>
              <p className="mb-2 font-bold text-md text-secondary">
                In Business
              </p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-10 h-10 mx-auto mb-3 rounded-full  sm:w-12 sm:h-12">
                <AiFillWechat className="text-5xl text-primary"/>
              </div>
              <h6 className="text-4xl font-bold text-primary">10,876</h6>
              <p className="mb-2 font-bold text-md text-secondary">
                Support Case
              </p>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Stars;
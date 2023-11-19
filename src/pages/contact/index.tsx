import { Container } from "../../components/container";
import { BsArrowLeft } from "react-icons/bs";
import { BsArrowRight } from "react-icons/bs";
import imgContact from "../../assets/imgC.jpg";
import imgContact2 from "../../assets/imgC2.jpg";
import { MdArrowOutward } from "react-icons/md";

export function Contact() {
  return (
    <Container>
      <header className="w-full h-16 flex  item-center justify-between my-5">
        <p className="text-xl text-slate-400">OUR BLOGS</p>

        <div className="flex gap-5">
          <BsArrowLeft size={28} color="#A2C7EF" />
          <BsArrowRight size={28} color="#000" />
        </div>
      </header>

      <main className="w-full h-screen">
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="flex flex-col w-full">
            <img
              className=" w-full max-w-2xl h-96 rounded-2xl"
              src={imgContact2}
              alt="woman working"
            />
            <div className="flex  items-center justify-between px-2">
              <div className="flex flex-col justify-between">
                <p className="text-3xl font-semibold">
                  How to create business content
                </p>
                <span className="text-lg text-zinc-500">
                  6 ways to create business content to create sales
                </span>
              </div>
              <div className="h-16 w-16 rounded-full  flex items-center justify-center mt-2">
                <MdArrowOutward size={28} color="#000" />
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full">
            <img
              className=" w-full max-w-2xl h-96 rounded-2xl"
              src={imgContact}
              alt="woman working"
            />
            <div className="flex  items-center justify-between px-2">
              <div className="flex flex-col justify-between">
                <p className="text-3xl font-semibold">
                  How to build a business faster
                </p>
                <span className="text-lg text-zinc-500">
                  8 ways to make your Business Progress and Develop
                </span>
              </div>
              <div className="h-16 w-16 rounded-full bg-green-600 flex items-center justify-center mt-2">
                <MdArrowOutward size={28} color="#000" />
              </div>
            </div>
          </div>
        </div>
      </main>
    </Container>
  );
}

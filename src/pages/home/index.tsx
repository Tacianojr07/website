import { Container } from "../../components/container";
import image from "../../assets/img.jpg";

export function Home() {
  return (
    <Container>
      <main className="grid grid-cols-1 lg:grid-cols-2">
        <section className="w-full max-w-3xl flex justify-center  mt-10 ">
          <div className="flex flex-col item-center mb-4">
            <h1 className="text-7xl font-semibold mb-4">
              Your business sucess start here
            </h1>
            <span className="font-thin text-xl">
              Grown your client base with Holihili and targeted strategires
            </span>

            <div className="flex items-start w-full max-w-xl gap-10  mt-5 text-center">
              <button className=" bg-green-300 w-full py-2 h-10 rounded-full  text-center mx-auto">
                Get my Free Proposal
              </button>
              <button className="bg-slate-200 w-full py-2 h-10 rounded-full   text-center">
                how it works
              </button>
            </div>
          </div>
        </section>
        <aside className="w-full ">
          <img
            className="w-full  rounded-lg mb-2 min-h-full hover:scale-105 cursor-pointer transition-all "
            src={image}
            alt="imagem de negocios"
          />
        </aside>

        <div className="flex flex-col jusitfy-center  gap-2">
          <span className="text-xl">Social Media / Content Writing / SEOS</span>
          <span className="text-xl">Video Prodution / Pay Per Click</span>
        </div>
      </main>
    </Container>
  );
}

import { Container } from "../../components/container";
import imgbuniness from "../../assets/woman.jpg";
import { Button } from "../../components/button";

export function About() {
  return (
    <Container>
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <img className="rounded-2xl" src={imgbuniness} alt="buniness" />
        <article className="w-full flex flex-col justify-center items-center mb-5">
          <p className="text-7xl font-medium">Why need digital</p>
          <p className="text-6xl font-medium text-zinc-200 mb-10">
            marketing services
          </p>
          <p className="text-xl text-center text-zinc-500">
            The online marketing indutry is growing at an unprecedented rate.
            Accoding to eMarketer, businesses in the U.S spend more tanh $110
            bilion on digital advertising
          </p>
          <Button bgColor="#86EFAC" placeholder="Read More"></Button>
        </article>
      </section>
    </Container>
  );
}

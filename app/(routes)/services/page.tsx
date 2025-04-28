import AvatarServices from "@/components/AvatarServices";
import CircleImage from "@/components/CircleImage";
import SliderServices from "@/components/SliderServices";
import TransitionPage from "@/components/TransitionPage";

const ServicesPage = () => {
  return (
    <>
      <TransitionPage />
      <CircleImage />
      <AvatarServices />

      <div className="grid items-center justify-center h-lvh max-h-5xl max-w-5xl gap-6 mx-auto md:grid-cols-2 ">
        <div className="max-w-[450px] mt-20 text-center md:mt-0">
          <h1 className="text-2xl leading-tight text-center  md:text-4xl md:mb-5">
            Nuestros{" "}
            <span className="font-bold text-secondary">servicios.</span>
          </h1>
          <p className="my-3 md:mb-3 md:my-0 px-2 md:text-xl text-gray-300">
            Ofrecemos servicios de desarrollo tanto web como de aplicaciones
            mobiles especializadas en soluciones atractivas y funcionales.
            Utilizando las últimas tecnologías, como React, Node y TypeScript,
            diseñamos interfaces de usuario intuitivas y responsivas que
            reflejan la identidad de marca de nuestros clientes y mejoran su
            presencia en línea como tambien APIs funcionales de lado del
            servidor.
          </p>
          <button className="px-3 py-2 rounded-lg bg-secondary hover:bg-secondary/65">
            Contacta con nosotros
          </button>
        </div>

        {/*Slider*/}
        <div>
          <SliderServices />
        </div>
      </div>
    </>
  );
};

export default ServicesPage;

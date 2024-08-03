import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <div className="h-[90dvh] flex flex-row items-center">
        <div className="flex flex-row max-md:flex-col-reverse justify-between items-center h-[300px] w-full">
          <div className="p-8 max-w-[680px]" data-aos="fade-right">
            <h1 className="font-extrabold text-6xl">Refki Alfarizi</h1>
            <h2 className="font-semibold text-4xl">Teknik Informatika</h2>
            <p className="text-xl mt-4 w-4/5"><q>Abalskdjf laskdjflk sdlkfjlaksjdf slad</q></p>
          </div>
          <div>
            <Image
              src="/frieren.jpg"
              alt="Picture of the author"
              width={300}
              height={300}
              className="rounded-full"
            />
          </div>
        </div>
      </div>

      <div className="h-[75dvh] flex flex-row items-start">
        <div className="flex flex-row max-md:flex-col-reverse justify-end items-start h-[300px] w-full">
          
          <div className="p-8 w-full" data-aos="fade-right">
            <h1 className="font-extrabold text-6xl">Minat</h1>
            <h2 className="font-semibold text-4xl">Teknik Informatika</h2>
          </div>

          
          <div className="p-8 w-full text-end" data-aos="fade-right">
            <h1 className="font-extrabold text-6xl">Bakat</h1>
            <h2 className="font-semibold text-4xl">Teknik Informatika</h2>
          </div>
        </div>
      </div>

      <div className="h-[75dvh] flex flex-row items-start">
        <div className="flex flex-row max-md:flex-col-reverse justify-between items-start h-[300px] w-full">
          <div className="p-8 " data-aos="fade-right">
            <h1 className="font-extrabold text-6xl">Proyek-proyek</h1>
            <h2 className="font-semibold text-4xl"></h2>
   
          </div>
          
        </div>
      </div>
    </main>
  );
}

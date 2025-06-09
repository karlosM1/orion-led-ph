import { Card, CardContent } from "@/components/ui/card";
import { Header } from "./components/navigation-bar";
import { Footer } from "./components/footer";
import { images } from "@/constants";

export const About = () => {
  return (
    <>
      <Header />
      <section className="container mx-auto px-4 py-8 md:py-16">
        <div className="grid lg:grid-cols-2 gap-6 md:gap-8">
          <Card className="bg-[#F4F4F4] text-black p-5 md:p-8">
            <CardContent className="p-0">
              <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">
                About
              </h3>
              <p className="text-black mb-4 md:mb-6 text-sm md:text-base">
                ORION is your trusted partner in premium automotive lighting.
                Founded with a passion for innovation and safety, our mission is
                to illuminate every journey with cutting-edge car light
                solutions that combine performance, style, and reliability.{" "}
                <br />
                <br />
                We understand that visibility is crucial—not just for safety,{" "}
                but also for making a lasting impression on the road. That’s why
                we focus on providing lights that not only perform exceptionally
                but also enhance the aesthetic appeal of your vehicle.
                <br />
                <br /> At ORION, we take pride in our commitment to customer
                satisfaction. Our team of experts works continuously to test,
                refine, and expand our product line to ensure we offer the best
                in the industry. We also provide detailed support and guidance,
                so whether you're making your first upgrade or are a seasoned
                automotive professional, you’ll find the help and service you
                need.
                <br />
                <br />
                We believe that the right lighting makes all the difference.
                With ORION, you’re not just buying car lights—you’re investing
                in quality, durability, and style that lasts. Light the way
                forward with confidence. Light it with ORION.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-[#F4F4F4] text-white flex justify-end overflow-hidden m-0 p-0">
            <div className="relative h-64 md:h-full w-full ">
              <img
                src={images.aboutpic}
                alt="Featured Car"
                className="absolute inset-0 w-full h-full object-cover rounded-lg"
                style={{ filter: "brightness(0.7)" }}
              />
            </div>
          </Card>
          <Card className="bg-black text-white p-5 md:p-8">
            <CardContent className="p-0">
              <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">
                MISSION
              </h3>
              <p className="text-gray-300 mb-2 md:mb-6 text-sm md:text-base">
                To deliver high-quality, innovative car lighting solutions that
                enhance safety, style, and performance on every journey.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-black text-white p-5 md:p-8">
            <CardContent className="p-0">
              <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">
                VISION
              </h3>
              <p className="text-gray-300 mb-2 md:mb-6 text-sm md:text-base">
                To become a leading global brand in automotive
                lighting—recognized for excellence, trusted by drivers, and
                driven by a passion for illuminating the future of mobility.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
      <Footer />
    </>
  );
};

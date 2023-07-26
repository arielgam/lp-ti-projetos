import Image from "../atoms/Image";
import TitleHero from "../molecules/TitleHero";
import imgHero from "../../assets/Image/img_site.png";

export default function Hero() {
    return (
        <section className="flex justify-between items-center">
            <TitleHero />
            <Image src={imgHero} size="big" />
        </section>
    )
}
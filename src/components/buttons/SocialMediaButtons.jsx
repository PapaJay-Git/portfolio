import SocialMediaButton from "./SocialMediaButton";
import facebook from "./../../assets/svgs/facebook.svg"
import instagram from "./../../assets/svgs/instagram.svg"
import linkedin from "./../../assets/svgs/linkedin.svg"

export default function SocialMediaButtons() {
    return (
        <span className="flex flex-row gap-2">
            <SocialMediaButton
                url="https://www.facebook.com/jc.mayo.main"
                imagePath={facebook}
                alt="Facebook Icon"/>
            <SocialMediaButton
                url="https://www.instagram.com/papajay____/"
                imagePath={instagram}
                alt="instagram Icon"/>
            <SocialMediaButton
                url="https://www.linkedin.com/in/jayson-c-784746321/"
                imagePath={linkedin}
                alt="linkedin Icon"/>
        </span>
    );
}
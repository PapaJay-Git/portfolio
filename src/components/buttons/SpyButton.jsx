import MainButtonDesign from "./MainButtonDesign";
import {Link as ScrollLink} from 'react-scroll';

export default function SpyButton({
    children,
    additionalClasses = '',
    sectionName
}) {
    return (
        <ScrollLink
            key={sectionName}
            to={sectionName}
            spy={true}
            smooth={true}
            offset={-150}
            duration={1500}
            onClick={() => console.log(1)}>
            <MainButtonDesign additionalClasses={additionalClasses}>
                {children}
            </MainButtonDesign>
        </ScrollLink>

    );
}

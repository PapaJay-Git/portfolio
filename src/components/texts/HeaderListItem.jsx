import {Link as ScrollLink} from 'react-scroll';

const HeaderListItem = ({ initialActive, title, sectionName}) => {
    return (
        <li
            className="flex flex-col items-center text-base cursor-pointer w-[fit-content] header-list-item"
           >
            <ScrollLink
            key={sectionName}
            to={sectionName}
            spy={true}
            smooth={true}
            offset={-150}
            duration={500}
            className={`${initialActive ? 'active' : ''}`}
          >
            <span>{title}</span>
          </ScrollLink>
          
        </li>
    );
};

export default HeaderListItem;
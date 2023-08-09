import styles from './contacts.module.css';
import AsideBlock from './utils/aside-block';
import { ItemProps } from './utils/aside-block';
import {FaPhone as PhoneIcon, FaEnvelope as MailIcon, FaLocationArrow as LocationIcon, FaCheck, FaLinkedin, FaGithub} from 'react-icons/fa'

const contacts: Array<ItemProps> = [
    {
        link: 'tel:+995568721501',
        text: '+995 568 721 501',
        icon: <PhoneIcon/>
    },
    {
        link: 'mailto:redisotschek@gmail.com',
        text: 'redisotschek@gmail.com',
        icon: <MailIcon/>
    },
    {
        link: 'https://www.linkedin.com/in/dmitrymetelev/',
        text: 'dmitrymetelev',
        icon: <FaLinkedin/>,
    },
    {
        link: 'https://github.com/redisotschek',
        text: 'redisotschek',
        icon: <FaGithub/>,
    },
    {
        text: 'Tbilisi, Georgia',
        icon: <LocationIcon/>,
        chip: <div><FaCheck color='green'/><div>Ready to relocate</div></div>
    },
]

export default function Contacts({className}: {className?: string}) {
    return (
        <AsideBlock className={className} id='contact-info' title='Contacts' items={contacts}/>
    )
}
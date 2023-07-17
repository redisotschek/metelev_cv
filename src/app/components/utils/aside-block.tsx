import Link from 'next/link'
import Chip from './chip';
import styles from './aside.module.css'

export type ItemProps = {
    icon?: React.ReactNode,
    link?: string,
    text: string,
    chip?: React.ReactNode
}

function Item(props: ItemProps){
 return (
    <div className={`${styles.aside_item} text-lg`}>
        {props.icon}
        {props.link ? <Link href={props.link}>{props.text}</Link> : <div>{props.text}</div>}
    </div>
 )
}

export default function AsideBlock({items, title, id, className}: {items: Array<ItemProps> | Array<string>, title?: string, id?: string, className ?: string}) {
    return (
        <div id={id} className={`flex flex-col gap-1 items-start mt-2 ${className}`}>
            <h2 className={`text-2xl mb-1 ${styles.title}`}>{title}</h2>
            {
                isArrayItemProps(items) 
                ? 
                items?.map(mapItemProps)
                :
                items?.map(mapStrings)
            }
        </div>
    )
}

function isArrayItemProps(items: Array<ItemProps> | Array<string>): items is Array<ItemProps> {
    return (items[0] as ItemProps).text !== undefined;
}

function mapItemProps (item: ItemProps, index: number) {
    return (
        <>
            <Item key={index} {...item}/> 
            {item.chip && <Chip key={index + 'chip'} children={item.chip}/>}                
        </>
    )
}

function mapStrings (item: string, index: number) {
    return (
        <div key={index} className={`text-lg`}>{item}</div>
    )
}
export const TabItem = ({isActive, itemKey, title, onTabClick}) => {

    return (
        <li className="tab-item-component nav-item">
           <a className={isActive ? 'nav-link active bg-primary text-white' : 'nav-link'} onClick={()=>onTabClick(itemKey)}>{title}</a>
        </li>
    )
}
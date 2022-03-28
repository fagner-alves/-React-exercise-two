import React, {useState} from "react";
import { TabContent } from "./tabContent.js"
import { TabItem } from "./tabItem.js"

export const Tab = ({data}) => {

    const [tabs, setTabs] = useState(data)

    const handleTabClick = (id) => {
        const newTabs = tabs.map(
            (t) => 
            t.id === id
            ? {...t, isActive: true}
            : {...t, isActive: false}
        )

        setTabs(newTabs)
    }

    return (
        <div class="tab-component">
            <ul className="nav nav-tabs nav-justified">
                {tabs.map(({id, title, isActive}) => <TabItem isActive={isActive} itemKey={id} title={title} onTabClick={handleTabClick}/>)}
            </ul>
            <div className="tab-content">
                {tabs.map(({text, isActive}) => {
                    return isActive && <TabContent>{text}</TabContent>
                })} 
            </div>           
        </div>
    )
}
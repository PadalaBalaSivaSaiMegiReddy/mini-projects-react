import React from 'react'
import Tabs from './tabs'

function RandomComponent(){
    return <div>Some random content</div>
}

function handleChange(currentTabIndex){
    console.log(currentTabIndex)
}
const tabs=[
    {
        label:'Tab 1',
        content:<div>This is content from Tab 1</div>
    },
    {
        label:'Tab 2',
        content:<div>This is content from Tab 2</div>
    },
    {
        label:'Tab 3',
        content:<RandomComponent/>
    },
]

export default function TabTest() {
  return <Tabs tabsContent={tabs} onChange={handleChange}/>
}

import { useContext } from "react";

import LightDarkMode from "../light-dark-mode";
import TicTacToe from "../tic-tac-toe/TicTacToe";
import RandomColorGenerator from "../random-color-generator";
import Accordian from "../accordian";
import TreeView from "../tree-view";
import TabTest from "../custom-tabs/tab-test";
import menus from "../tree-view/data";
import { FeatureFlagsContext } from "./context/Context";


export default function FeatureFlags() {
  const { loading, enabledFlags } = useContext(FeatureFlagsContext);

  const componentsToRender = [
    {
      key: "showLightAndDarkMode",
      component: <LightDarkMode/> ,
    },
    {
      key: "showTicTacToeBoard",
      component: <TicTacToe />,
    },
    {
      key: "showRandomColorGenerator",
      component: <RandomColorGenerator />,
    },
    {
      key: "showAccordian",
      component: <Accordian />,
    },
    {
      key: "showTreeView",
      component: <TreeView  menus={menus} />,
    },
    {
        key : 'showTabs',
        component : <TabTest/>
    }
  ];

  function checkEnabledFlags(getCurrentKey) {
    return enabledFlags[getCurrentKey];
  }

  if (loading) return <h1>Loading data ! Please wait</h1>;

  return (
    <div>
      <h1 style={{textAlign:"center", color:"GrayText"}}>Feature Flags</h1>
      {componentsToRender.map((componentItem) =>
        checkEnabledFlags(componentItem.key) ? componentItem.component : null
      )}
    </div>
  );
}
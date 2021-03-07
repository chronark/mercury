import React from "react"
import { Tab, Tabs, Panel, List } from "@radix-ui/react-tabs"
// eslint-disable-next-line  @typescript-eslint/no-empty-interface
export interface AppNavbarProps {}
export const AppNavbar: React.FC<AppNavbarProps> = () => (
  <div className="flex w-screen">
    <Tabs defaultValue="tab1" className="flex items-center justify-center">
      <List aria-label="tabs example">
        <Tab value="tab1">One</Tab>
        <Tab value="tab2">Two</Tab>
        <Tab value="tab3">Three</Tab>
      </List>
      <Panel value="tab1">Tab one content</Panel>
      <Panel value="tab2">Tab two content</Panel>
      <Panel value="tab3">Tab three content</Panel>
    </Tabs>
  </div>
)

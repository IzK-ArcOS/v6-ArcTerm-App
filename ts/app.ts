import { ArcOSVersion } from "$ts/env";
import { ArcTermIcon } from "$ts/images/apps";
import { App } from "$types/app";
import AppSvelte from "../App.svelte";
import { Runtime } from "./runtime";

export const ArcTermApp: App = {
  metadata: {
    name: "ArcTerm",
    description: "The Terminal of ArcOS",
    author: "The ArcOS Team",
    version: ArcOSVersion,
    icon: ArcTermIcon,
    appGroup: "systemTools"
  },
  runtime: Runtime,
  content: AppSvelte,
  id: "ArcTerm",
  size: { w: 640, h: 480 },
  minSize: { w: 350, h: 250 },
  maxSize: { w: NaN, h: NaN },
  pos: { x: 60, y: 60 },
  state: {
    minimized: false,
    maximized: false,
    headless: false,
    fullscreen: false,
    resizable: true
  },
  controls: {
    minimize: true,
    maximize: true,
    close: true
  },
  glass: true
}
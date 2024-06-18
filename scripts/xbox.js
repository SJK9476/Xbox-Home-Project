import dayjs from "https://unpkg.com/dayjs@1.11.10/esm/index.js";
import { recentApps } from "../data/recentApps.js";

const currentTime = dayjs().format("HH:m");

document.querySelector(".js-current-time").innerHTML = currentTime;

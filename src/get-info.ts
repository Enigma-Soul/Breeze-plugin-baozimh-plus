import type { InfoContract } from "../types/type";
import { PLUGIN_ID } from "./common";

export function buildPluginInfo(): InfoContract {
  return {
    name: "包子漫画 Plus",
    uuid: PLUGIN_ID,
    iconUrl: "https://www.baozimh.com/favicon.ico",
    creator: {
      name: "Enigma_Soul",
      describe: "包子漫画增强插件",
    },
    describe: "包子漫画增强：翻页预读",
    version: "0.5.2",
    home: "https://github.com/Enigma-Soul/Breeze-plugin-baozimh-plus",
    // 更新只走 GitHub Release（npmName 未发布 npm 包，新版客户端 npm 通道优先会 404 致安装失败）
    updateUrl:
      "https://api.github.com/repos/Enigma-Soul/Breeze-plugin-baozimh-plus/releases/latest",
    function: [],
  };
}

export function buildManifestInfo(): InfoContract {
  return buildPluginInfo();
}

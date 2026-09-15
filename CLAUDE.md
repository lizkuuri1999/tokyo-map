# tokyo-map 專案筆記

## 專案背景
這個專案原本在另一台電腦(使用者名稱 `lizlee`)上用 Claude Code 開發,但當初開 session 時沒有指定專案資料夾,對話紀錄留在那台電腦本機,尚未取回。

程式碼本身已經部署到 GitHub Pages(https://lizkuuri1999.github.io/tokyo-map/),因此改從 GitHub repo(https://github.com/lizkuuri1999/tokyo-map)重新 clone 回來救回。目前 repo 只有一個 commit「Add files via upload」，只有一支 `index.html`，沒有其他歷史紀錄或說明文件——也就是說,當初跟 Claude 討論的過程與決策**沒有**保留下來,只有最終成品程式碼。

## 多裝置協作慣例(重要)

這個專案會在兩台使用者名稱不同的電腦上開發(這台是 `liz`,另一台是 `lizlee`)。因為 Claude Code 的 session 索引是綁定專案的絕對路徑,兩台電腦使用者路徑不同會對不起來,所以統一規定:

- **兩台電腦都必須把這個專案放在同一個絕對路徑**:`/Users/Shared/Projects/tokyo-map`(不要放在 `~/Desktop` 或其他跟使用者帳號綁定的路徑)。
- Claude Code 的**對話紀錄本身不會跨裝置同步**,只有 git 追蹤的程式碼會同步。

### 切換電腦時的固定流程

1. 離開一台電腦前:`git add -A && git commit -m "..." && git push`
2. 到另一台電腦開始前:先 `git pull` 再動手
3. 不要在兩台電腦上同時修改,避免 merge 衝突

## 給未來 Claude session 的提醒
- 如果使用者要求接續「東京地圖」的開發,先確認目前 `index.html` 的實際內容,不要假設之前討論過的功能/設計已經實作或記錄在案——很可能沒有。
- 之後每次做出重要的設計決策或功能規劃,建議記錄回本檔案,維持跨裝置、跨 session 的上下文延續性。

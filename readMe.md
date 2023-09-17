# Notice:

This is a product of project-based learning

1.  can't use the newest ethers version, there are some problems.  
    Please use "yarn add ethers@5.7.2" to return the old version.

2.  Please run it using Solidity version "0.8.19" or lower.

3.  The tutorial is from "https://www.youtube.com/watch?v=gyMwXuJrbJQ"

# 總覽圖
![OverView](/PicInGithub/PIC.jpg)

利用WSL的Linux去連VSCODE。
Solidity負責智慧合約。
Solidity經過Compile後分為abi、bin檔案。

再來用esthers去做交互，用Gamache去建立節點，供連接使用。  
Ganache裡面提供的private key會經過"encryptJson"檔案進行簡單加密  
使用者在使用時需設立環境變數，並輸入指令：  
KEYPW="密碼" node deploy.js  
來進行deploy。

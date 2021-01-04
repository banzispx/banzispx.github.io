# GIT常见问题及操作

## vscode记住用户名密码

  清除掉缓存在git中的用户名和密码 

    git credential-manager uninstall

  运行一下命令缓存输入的用户名和密码：

    git config --global credential.helper wincred
  
  可能会遇到 
  ```
  下面的错误remote: The project you were looking for could not be found.
fatal: repository 'http://172.23.250.67:8888/dam/micro-front/xilifront.git/' not found

这个时候 可以从这里  控制面板\用户帐户\凭据管理器  =》 删除对应版本库的用户名密码  来解决 然后从新执行缓存的命令

#!/bin/bash
source ${HOME}/.npmrc
cd /home/ec2-user/vebi
~/.npm-global/bin/pm2 kill
~/.npm-global/bin/pm2 start index.js

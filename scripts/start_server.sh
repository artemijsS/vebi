#!/bin/bash
source ${HOME}/.npmrc
cd /home/ec2-user/vebi
pm2 kill
pm2 start index.js

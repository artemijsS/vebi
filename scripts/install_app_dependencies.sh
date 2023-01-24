#!/bin/bash
source ~/.nvm/nvm.sh
cd /home/ec2-user/vebi
echo "$PATH"
npm install
npm run build

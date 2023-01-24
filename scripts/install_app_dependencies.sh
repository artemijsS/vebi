#!/bin/bash
source ~/.nvm/nvm.sh
cd /home/ec2-user/vebi
/home/ec2-user/.nvm/versions/node/v16.19.0/bin/npm install
/home/ec2-user/.nvm/versions/node/v16.19.0/bin/npm run build

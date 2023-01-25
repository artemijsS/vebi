#!/bin/bash
source /home/ec2-user/.bash_profile
sudo chmod -R 777 /home/ec2-user/vebi
cd /home/ec2-user/vebi
npm install
npm run build

#!/bin/bash
source /home/ec2-user/.bash_profile
sudo source ~root/.bash_profile
cd /home/ec2-user/vebi
sudo npm install
sudo npm run build

#!/bin/bash
source /home/ec2-user/.bash_profile
cd /home/ec2-user/vebi
whereis npm
npm install
npm run build

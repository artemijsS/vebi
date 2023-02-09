#!/bin/bash
source /home/ec2-user/.bash_profile
cd /home/ec2-user/vebi
~/.npm-global/bin/pm2 stop prod
~/.npm-global/bin/pm2 start prod

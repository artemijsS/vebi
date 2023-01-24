#!/bin/bash
export PATH="$(npm bin -g):$PATH"
cd /home/ec2-user/vebi
whereis npm
npm install
npm run build

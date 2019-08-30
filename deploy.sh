#!bin/bash

yarn docs:build
git add -A
git commit -m "deploy"
git push

@echo off
if "%~1"=="" (
  echo Uzycie: push_to_github.bat https://github.com/<login>/loopcheck-icalc.git
  exit /b 1
)
git init
git add .
git commit -m "v1.4.1 (cache v6)"
git branch -M main
git remote add origin %1
git push -u origin main
echo Gotowe. Teraz zaimportuj repo na vercel.com

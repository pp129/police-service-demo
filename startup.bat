@echo off
set www = ".\server\bin\www"
set /p mode=Enter Startup Mode(0:start/1:start forever):
if "%mode%"=="0" (
    serve dist -s -p 8888
)else if "%mode%"=="1" (
 	forever start %www%
 ) else if "%mode%"=="" (
 	serve dist -s -p 8888
 )


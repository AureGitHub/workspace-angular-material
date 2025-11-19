@echo off
echo [STEP 1/3] Iniciando watcher de shared-lib...
start "Shared-lib Watcher" cmd /k "cd /d %~dp0 && ng build shared-lib --watch"

timeout /t 3 /nobreak >nul

echo [STEP 2/3] Iniciando app-trading con reinicio automático...
start "App Trading Auto-Restart" cmd /k "cd /d %~dp0 && pwsh -File watch-and-restart-app.ps1"

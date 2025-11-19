# PowerShell script: watch-and-restart-app.ps1
# Monitorea cambios en dist/shared-lib y reinicia ng serve app-trading automáticamente

$libPath = "dist/shared-lib"
$ngServeProcess = $null

function Start-AppTrading {
    Write-Host "[Watcher] Iniciando app-trading..."
    $global:ngServeProcess = Start-Process -FilePath "cmd.exe" -ArgumentList "/c npx ng serve app-trading" -NoNewWindow -PassThru
}

function Stop-AppTrading {
    if ($global:ngServeProcess -ne $null) {
        Write-Host "[Watcher] Deteniendo app-trading..."
        Stop-Process -Id $global:ngServeProcess.Id -Force
        $global:ngServeProcess = $null
    }
}

Start-AppTrading

Write-Host "[Watcher] Monitoreando cambios en $libPath..."

while ($true) {
    $lastWrite = (Get-ChildItem -Recurse $libPath | Sort-Object LastWriteTime -Descending | Select-Object -First 1).LastWriteTime
    Start-Sleep -Seconds 2
    $newWrite = (Get-ChildItem -Recurse $libPath | Sort-Object LastWriteTime -Descending | Select-Object -First 1).LastWriteTime
    if ($newWrite -ne $lastWrite) {
        Write-Host "[Watcher] Cambio detectado en la librería. Reiniciando app-trading..."
        Stop-AppTrading
        Start-Sleep -Seconds 2
        Start-AppTrading
    }
}

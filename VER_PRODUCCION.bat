@echo off
echo ========================================================
echo   Iniciando Vista Previa de Produccion (dist)...
echo ========================================================
echo.
echo Abriendo tu navegador en http://localhost:4173
echo Para detener el servidor, cierra esta ventana.
echo.
start http://localhost:4173
call npm.cmd run preview -- --host 0.0.0.0 --port 4173
pause

@echo off
echo ========================================================
echo   Iniciando Servidor de Laura Glass Solutions...
echo ========================================================
echo.
echo Abriendo tu navegador en http://localhost:3000
echo Para detener el servidor, cierra esta ventana.
echo.
start http://localhost:3000
call npm.cmd run dev -- --host 0.0.0.0 --port 3000
pause

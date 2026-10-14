@echo off
title Publicar Laura Glass Solutions en Vercel
cd /d "%~dp0"
echo ======================================================================
echo          PUBLICAR LAURA GLASS SOLUTIONS EN VERCEL
echo ======================================================================
echo.
echo 1. Compilando archivos de produccion...
call npm.cmd run build
if %ERRORLEVEL% neq 0 (
    echo [ERROR] Hubo un problema al compilar. Revisa los mensajes de arriba.
    pause
    exit /b %ERRORLEVEL%
)
echo.
echo ======================================================================
echo 2. Subiendo a Vercel...
echo    - Si es la primera vez, se abrira tu navegador para iniciar sesion.
echo    - En las preguntas presiona ENTER para aceptar los valores por defecto:
echo        * Set up and deploy? [Y]
echo        * Which scope? (Tu cuenta)
echo        * Link to existing project? [N] (o [Y] si ya lo tenias creado)
echo        * What's your project's name? (laura-glass-solutions)
echo ======================================================================
echo.
call npx.cmd vercel --prod
echo.
echo ======================================================================
echo Despliegue finalizado. Tu web ya esta en linea con SSL / HTTPS.
echo ======================================================================
pause

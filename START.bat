@echo off
echo ====================================
echo  Readless Landing Page Setup
echo ====================================
echo.

REM Check if Node.js is installed
where node >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo ERROR: Node.js is not installed!
    echo Please install Node.js from https://nodejs.org/
    echo.
    pause
    exit /b 1
)

echo Node.js version:
node --version
echo.

REM Check if dependencies are installed
if not exist "node_modules\" (
    echo Installing dependencies...
    echo This may take 2-3 minutes...
    echo.
    call npm install
    if %ERRORLEVEL% NEQ 0 (
        echo.
        echo ERROR: Failed to install dependencies
        pause
        exit /b 1
    )
)

echo.
echo ====================================
echo  Starting development server...
echo ====================================
echo.
echo Your site will open at:
echo http://localhost:3000
echo.
echo Press Ctrl+C to stop the server
echo.

REM Start the development server
call npm run dev

pause

# PowerShell script to clean Prisma engine files
# Safe to run before npm install or prisma generate

$prismaPath = "node_modules\.prisma\client"

if (Test-Path $prismaPath) {
    Get-ChildItem $prismaPath -Filter "query_engine-windows.dll.node*" | Remove-Item -Force -ErrorAction SilentlyContinue
}

Write-Host "Prisma engine files cleaned. You can now run npm install and npx prisma generate."

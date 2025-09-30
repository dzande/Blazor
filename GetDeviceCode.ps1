$clientId = "1950a258-227b-4e31-a9cf-717495945fc2" # Replace with Entra ID client ID
$tenantId = "ca7981a2-785a-463d-b82a-3db87dfc3ce6"
$scope = "https://hpcdax.crm.dynamics.com/.default"

$url = "https://login.microsoftonline.com/$tenantId/oauth2/v2.0/devicecode"
$body = "client_id=$clientId&scope=$scope"
$headers = @{
    "Content-Type" = "application/x-www-form-urlencoded"
}

try {
    $response = Invoke-RestMethod -Method Post -Uri $url -Headers $headers -Body $body
    Write-Host "User Code: $($response.user_code)"
    Write-Host "Verification URL: $($response.verification_uri)"
    Write-Host "Device Code: $($response.device_code)"
    Write-Host "Poll Interval: $($response.interval) seconds"
    Write-Host "Expires In: $($response.expires_in) seconds"
    Write-Host "Instructions: Open the Verification URL in a browser, enter the User Code, and sign in. Then, paste the User Code and Device Code into the Blazor app."
    Set-Clipboard -Value $response.user_code
    Write-Host "User Code copied to clipboard!"
} catch {
    Write-Host "Error: $($_.Exception.Message)"
}
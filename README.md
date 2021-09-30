# mystic-notify

# How to use
## Client Side
```lua
exports['mystic-notify']:SendAlert('This is a test notification', 'info')
```

## Server Side
Send to everyone
```lua
TriggerClientEvent('mystic:notify', -1, 'This is a test notification', 'info')
```
Send to source
```lua
TriggerClientEvent('mystic:notify', source, 'This is a test notification', 'info')
```
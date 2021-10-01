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

## Screenshots
Info \
![Info](https://cdn.izmystic.gay/images/u6fnpurq.png) 

Error \
![Error](https://cdn.izmystic.gay/images/htsq1qad.png)

Success \
![Success](https://cdn.izmystic.gay/images/y785g5fj.png) 

Warn \
![Warn](https://cdn.izmystic.gay/images/cb2ymc5s.png) 

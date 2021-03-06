# Path of Character Level Checker

This script just hits the Path of Exile public API and outputs some selected information on the characters specified.

## Configuration

Create a configuration file in the same directory as the main script by making a copy of [`config.example.js`](./config.example.js) and naming it `config.js`. Read the example configuration for details on the requirements.

## Running the script

I wrote it to be run through [Node](https://nodejs.org/) like so:

```sh
node poe-checker.js
```

You should get output like the following:

```
Account1:
CharacterA (Necromancer 49)

Account2:
CharacterB (Shadow 39)

Account3:
CharacterC (Templar 39)
CharacterD (Scion 27)

Account4:
Couldn't read characters: 403 Forbidden
```

## Troubleshooting

### 403 Forbidden when reading character information

If the API returns 403, that is generally because the account hasn't set its character information to be public (it is private by default). This can be changed by logging in to the [Path of Exile website](pathofexile.com) and adjusting the privacy settings.

### Cannot find module './config' error

If you get the following error:

```
Error: Cannot find module './config'
```

You need to create a configuration file `config.js` in the same directory as the main script. Open and read [`config.example.js`](./config.example.js); you can use it as a base for your personal configuration.

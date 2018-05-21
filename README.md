# GRSE

## Install Locally

```sh
# clone the repository
cd ~ && git clone https://github.com/hyphen-wrex/GRSE.git GRSE

# install dependencies
cd ~/GRSE/client && npm install
cd ../server && npm install

# start server, in another terminal window
cd ~/GRSE && ./s.sh

# start webpack watcher/compiler, in another terminal window
cd ~/GRSE && ./w.sh
```
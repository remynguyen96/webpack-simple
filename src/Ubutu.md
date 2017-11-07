/*
Edit file hosts
sudo chattr -i /etc/hosts
sudo mousepad /etc/hosts
*/

/*
Install plugin
sudo dpkg -i name_plugin
sudo apt-get install -f
*/

/*
install PHPMYADMIN
curl -sS https://raw.githubusercontent.com/grrnikos/pma/master/pma.sh | sh

sudo apt-get install phpmyadmin

sudo ln -s /usr/share/phpmyadmin/ /home/vagrant/phpmyadmin

cd ~/ && serve phpmyadmin.app /home/vagrant/phpmyadmin

*/

/*
install php --ini` PHP in CLI to install laravel chay khi moi mo cmd

sudo apt-get install php7.0-dom php7.0-mbstring

sudo apt-get update

sudo apt-get install mcrypt php7.0-mcrypt

sudo apt-get upgrade

sudo apt-get install php-mbstring

sudo apt-get install phpunit
*/

/*
install composer
sudo apt-get install curl
curl -sS https://getcomposer.org/installer | php

sudo mv composer.phar /usr/local/bin/composer
*/

/*
install node js
sudo apt-get update
sudo apt-get install build-essential libssl-dev curl
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.31.1/install.sh | bash
source ~/.profile
nvm ls-remote ( phien ban muon install)
nvm install v6.9.4
// remove => sudo apt-get remove nodejs, sudo apt-get remove npm, sudo apt-get purge nodejs npm
*/

/*
unlock folder
sudo chown -R $USER: $HOME
*/

/*
Remove xampp
sudo chmod +x /opt/lampp/uninstall
sudo /opt/lampp/uninstall
Install xampp
chmod +x xampp-linux-x64-5.5.30-0-installer.run
*/

/*
install ssh-key for github ( https://help.github.com/articles/connecting-to-github-with-ssh/ )
ssh-keygen -t rsa -C "use your any email"
eval "$(ssh-agent -s)"
ssh-add ~/.ssh/id_rsa
ssh -T git@github.com
*/



/* create Homestead
vagrant box add laravel/homestead
git clone https://github.com/laravel/homestead.git Homestead
bash init.sh
*/

/* delete icon old ubutu
cd /usr/share/unity
sudo cp -R icons backup_icons
sudo wget -N http://ubunsys.com/media/icons.zip
sudo unzip -o icons.zip -d icons
*/

// ngrok http --host-header=rewrite 80

sudo gparted
xem ổ cứng

default zsh for terminal
chsh -s $(which zsh)
sudo nano ~/.bashrc
exec zsh (add top file)
https://github.com/bhilburn/powerlevel9k (theme for zsh)




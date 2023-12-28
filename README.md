"# oasis1" 
FQDN
nmap -p 389 -sV -iL <target_list>
Host+Domain

Hacing Wireless
aircrack-ng -a2 -b <bssid> -w <wordlist> <wp2 capfile>
for bssid: aircrack-ng <capfile>

Android ADB
find 5555
adb connect ip:5555
adb shell
ls...........exit
sudo, adb pull /sdcard/scan
apt install ent
ent <file.elf>
sha384sum <file.elf>

Privillege Escalation
nmap -sV -p 22 <target subnet>
ssh kali@<target_ip>
enter password from question
sudo -i or sudo su
pwd, cd/, find . -name <file.txt>
cat <file.txt>

CVE
nmap -Pn --script vuln <target ip>
copy CVE and paste it on Nvd

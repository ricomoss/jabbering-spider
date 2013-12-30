==================================
Linux Installation (Ubuntu/Debian)
==================================

Follow these instructions to install the latest version of Node.js.

1.  Download the latest Node.js binaries for Linux::

    http://www.nodejs.org/download


2.  Extract the archive to `/tmp` and remove the archive.::

    /tmp $ tar -xvf node-v0.10.24-linux-x64.tar.gz
    /tmp $ rm node-v0.10.24-linux-x64.tar.gz


3.  Relocate Node.js::

    /tmp $ sudo su -c "mv /tmp/node* /usr/local/node"


4.  Adjust your `PATH`.  Add the following to your `.bashrc` or `.zshrc`.::

    export PATH=$PATH:/usr/local/node/bin


5.  Source your new path.::

    $ source ~/.bashrc


6.  Verify it's installed.::

    $ node --version
    v0.10.24

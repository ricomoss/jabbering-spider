==========================
Environment Setup
==========================

This guide will help you set up your development environment for
jabbering-spider.

Linux Installation (Ubuntu/Debian)
==================================

By following these steps, you can easily have a working installation of the
jabbering-spider development environment.

.. note::

   The following will assume you are cloning the jabbering-spider sourcecode
   to **~/jabbering-spider**.  If you are cloning to a different location,
   you will need to adjust these instructions accordingly.

.. note::

   A dollar sign ($) indicates a terminal prompt, as your user, not root.

1.  First go install Node.js - see the documentation under `node.rst`.


2.  Clone the source::

        $ cd ~
        $ git clone git@github.com:ricomoss/jabbering-spider.git


3.  Install Meteor::

        $ curl https://install.meteor.com | sh


4.  Start the runserver::

        ~/jabbering-spider/rsb $ meteor
        [[[[[ ~/jabbering-spider/rsb ]]]]]

        Initializing mongo database... this may take a moment.
        => Meteor server running on: http://localhost:3000/

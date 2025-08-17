How to Install Python 3.13 and Serve a Local Static Website on Windows

This tutorial guides you through downloading Python 3.13, installing it on a Windows system, and using it to serve a static website from your local computer.

Step 1: Download Python 3.13

Navigate to the official Python release page for version 3.13:
https://www.python.org/downloads/release/python-3136/

Scroll down to the Files section and locate the Windows installer (64-bit).

Recommended version: Windows Installer (64-bit)

File size: ~27.5 MB

Hash/SIG: adf553e6af2ba72bfb335f87ff15a564

Click the download link to save the installer to your computer.

Step 2: Install Python

Run the downloaded installer.

On the installer screen, check the box that says “Add Python 3.13 to PATH”. This ensures Python is accessible from the command line.

Click Install Now and follow the prompts to complete the installation.

Verify the installation:

Open PowerShell or Command Prompt.

Type:

python --version


You should see:

Python 3.13.6

Step 3: Serve a Static Website Locally

Once Python is installed, you can use it to run a static website from any folder on your computer.

Open PowerShell or Command Prompt.

Navigate to the folder containing your website. Replace Your_Name and Your_Website with your actual path:

cd C:\Users\Your_Name\Your_Website


Start a simple HTTP server with Python:

python -m http.server 8000


Open a web browser and go to:

http://localhost:8000


Your static website should now be accessible locally.

Notes

Stopping the server: Press Ctrl + C in the terminal to stop the server.

Changing ports: You can replace 8000 with any available port number if needed.
FROM mcr.microsoft.com/devcontainers/javascript-node:1-22-bookworm

# Install MongoDB command line tools - though mongo-database-tools not available on arm64
RUN . /etc/os-release \
    && apt-get update && export DEBIAN_FRONTEND=noninteractive \
    && apt-get install -y \
    && apt-get install -y adb \
    && apt-get clean -y && rm -rf /var/lib/apt/lists/*


RUN npm install -g expo-cli